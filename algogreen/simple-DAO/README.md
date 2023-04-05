# DAOunder - The DAO project from Down Under!

## Overview
This project aims to create a DAO on Algorand and use ASA as the governance token for the members to vote on proposals. Besides an ASA to be created, there are gonna be 3 contracts in this DAO project:
- **Governor**: control the voting.
- **Timelock**: control the delay between voting end and execution of trailing smart contract.
- **Box**: a placeholder for any executable smart contracts.

While `Governor` and `Timelock` are mostly reusable and can be turned into templates, `Box` is more like a placeholder of any executable smart contracts which can be triggered upon the result from `Governor`.

---
## Contracts
The components need to be deploy in the following order:
1. Create an asset as a Governance Token.
2. Deploy the `Timelock` with needed parameters.
3. Deploy the `Governor` with needed parameters.
4. Setup the `Timelock` to be owned by NOBODY and only the `Governor` can make proposals to it.
5. Deploy the `Box` and set it up to be owned by the `Timelock`.

### Flow
1. Propose a function call to `Box`.
2. Vote on the proposal.
3. Result is derived at the end of the voting.
4. Queue and execute the proposal after the defined delay (if any).

Example: Assuming `Box` is a smart contract that holds a number:
1. A proposal to set the number in `Box` to 10 is made.
2. Votes are casted by Governance Token holders to say whether they agree or not.
3. When the deadline of voting is passed, the function will be queue and execute to set `Box`'s number to 10, if it is agreed by majority of the voters.

### Governor
This contract needs the following functions:
- [x] on_creation
- [x] vote
- [ ] propose
- [ ] queue
- [ ] execute
### Timelock
This contract needs the following:
- [ ] minDelay ?
- [ ] proposers: list of addresses that can propose.
- [ ] executors: list of addresses that can execute.
### Box (any other contracts)
Can be anything.