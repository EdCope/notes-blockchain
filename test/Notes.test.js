const Notes = artifacts.require('Notes');

contract('Notes', () => {
  it('Deploys a smart contract', async () => {
    const notes = await Notes.deployed();
    assert(notes.address !== '');
  })
  it('can run a function on the smart contract', async () => {
    const notes = await Notes.deployed();
    const result = await notes.readFromContract();
    assert(result === 'Preset note');
  })
  it('the initial value of the owner of a smart contract', async () => {
    const notes = await Notes.deployed();
    const result = await notes.getOwner();
    assert(result === 'Unknown User');
  })
  it('can set the value of the owner of this contract', async () => {
    const notes = await Notes.deployed();
    await notes.setOwner('Ed');
    assert(await notes.getOwner() === 'Ed');
  })
});
