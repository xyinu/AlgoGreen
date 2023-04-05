from pyteal import *

# This is the main ApprovalProgram of the contract.
def approval_program():

    token_key = Bytes("token")
    timelock_key = Bytes("timelock")
    voting_start_key = Bytes("voting_start")
    voting_end_key = Bytes("voting_end")
    voting_delay_key = Bytes("voting_delay")
    yes_key = Bytes("yes")
    no_key = Bytes("no")
    number_of_votes_key = Bytes("number_of_votes")
    
    # Time related values are expected to be in UNIX timestamp ex: 1667885144 (seconds)
    on_create = Seq([
      App.globalPut(token_key, Btoi(Txn.application_args[0])),
      App.globalPut(timelock_key, Btoi(Txn.application_args[1])),
      App.globalPut(voting_start_key, Btoi(Txn.application_args[2])),
      App.globalPut(voting_end_key, Btoi(Txn.application_args[3])),
      App.globalPut(voting_delay_key, Btoi(Txn.application_args[4])),
      App.globalPut(yes_key, Int(0)),
      App.globalPut(no_key, Int(0)),
      App.globalPut(number_of_votes_key, Int(0)),
      Approve(),
    ])

    # Get the number of Governance Token held by the sender
    sender_token_holding = AssetHolding.balance(Txn.sender(), App.globalGet(token_key))
    vote = Seq([
      sender_token_holding,
      Assert(
        And(
          sender_token_holding.hasValue(),
          sender_token_holding.value() > Int(0),
          Global.latest_timestamp() < App.globalGet(voting_end_key),
          Global.latest_timestamp() > App.globalGet(voting_start_key),
          Btoi(Txn.application_args[1]) >= Int(0),
          Btoi(Txn.application_args[1]) < Int(2),
      )),
      If(Btoi(Txn.application_args[1]) == Int(0)).Then(
        Seq([
          App.globalPut(no_key, App.globalGet(no_key) + Int(1)),
          App.globalPut(number_of_votes_key, App.globalGet(number_of_votes_key) + Int(1)),
        ])
      ).ElseIf(Btoi(Txn.application_args[1]) == Int(1)).Then(
        Seq([
          App.globalPut(yes_key, App.globalGet(yes_key) + Int(1)),
          App.globalPut(number_of_votes_key, App.globalGet(number_of_votes_key) + Int(1)),
        ])
        ),
      Approve(),
    ])

    # queue = Seq([
    #   Approve(),
    # ])

    # execute = Seq([
    #   Approve(),
    # ])

    called_function = Txn.application_args[0]
    handle_noop = Cond(
      [called_function == Bytes("vote"), vote],
      # [called_function == Bytes("queue"), queue],
      # [called_function == Bytes("execute"), execute],
    )


    program = Cond(
        [Txn.application_id() == Int(0), on_create],
        [Txn.on_completion() == OnComplete.NoOp, handle_noop],
        # [
        #     Txn.on_completion() == OnComplete.DeleteApplication,
        #     on_delete,
        # ],
        [
            Or(
                Txn.on_completion() == OnComplete.OptIn,
                Txn.on_completion() == OnComplete.CloseOut,
                Txn.on_completion() == OnComplete.UpdateApplication,
            ),
            Reject(),
        ],
    )
    return program

def clear_state_program():
  program = Seq([
    Approve()
  ])
  return program

with open('governance_approval.teal', 'w') as f:
    compiled = compileTeal(approval_program(), mode=Mode.Application, version=5)
    f.write(compiled)

with open("governance_clear.teal", "w") as f:
    compiled = compileTeal(clear_state_program(), mode=Mode.Application, version=5)
    f.write(compiled)



    # goal app create \
    # --creator $ONE \
    # --approval-prog governance_approval.teal \
    # --clear-prog governance_clear.teal \
    # --app-arg int:1 \
    # --app-arg int:1 \
    # --app-arg int:1667874558 \
    # --app-arg int:1667838558 \
    # --app-arg int:1000 \
    # --global-ints 8 \
    # --global-byteslices 0  \
    # --local-ints 0 \
    # --local-byteslices 0