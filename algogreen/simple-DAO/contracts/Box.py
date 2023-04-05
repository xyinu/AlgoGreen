from pyteal import *

# This is the main ApprovalProgram of the contract.
def approval_program():

    on_create = Seq([
      App.globalPut(Bytes("owner"), Txn.sender()),
      App.globalPut(Bytes("value"), Int(0)),
      Approve(),
    ])

    # Take the 2nd transaction argument and store it in the "value" global variable
    store = Seq([
      Assert(Global.group_size() == Int(1)),
      Assert(Txn.sender() == App.globalGet(Bytes("owner"))),
      App.globalPut(Bytes("value"), Btoi(Txn.application_args[1])), 
      Approve(),
    ])

    # Transfer the SC ownership to the address specified at args[1]
    transfer_ownership = Seq([
      Assert(Global.group_size() == Int(1)),
      Assert(Txn.sender() == App.globalGet(Bytes("owner"))),
      App.globalPut(Bytes("owner"), Btoi(Txn.application_args[1])),
      Approve(),
    ])


    called_function = Txn.application_args[0]
    handle_noop = Cond(
      [called_function == Bytes("store"), store],
      [called_function == Bytes("transfer_ownership"), transfer_ownership],
    )


    program = Cond(
        [Txn.application_id() == Int(0), on_create],
        [Txn.on_completion() == OnComplete.NoOp, handle_noop],
    )
    return program

def clear_state_program():
  program = Seq([
    Approve()
  ])
  return program

with open('box_approval.teal', 'w') as f:
    compiled = compileTeal(approval_program(), Mode.Application, version=5)
    f.write(compiled)

with open("box_clear.teal", "w") as f:
    compiled = compileTeal(clear_state_program(), mode=Mode.Application, version=5)
    f.write(compiled)