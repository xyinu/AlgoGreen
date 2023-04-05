from pyteal import *

# This is the main ApprovalProgram of the contract.
def approval_program():

    on_create = Seq([
      Approve(),
    ])

    store = Seq([
      Approve(),
    ])

    transfer_ownership = Seq([
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

with open('timelock_approval.teal', 'w') as f:
    compiled = compileTeal(approval_program(), Mode.Application, version=5)
    f.write(compiled)

with open("timelock_clear.teal", "w") as f:
    compiled = compileTeal(clear_state_program(), mode=Mode.Application, version=5)
    f.write(compiled)