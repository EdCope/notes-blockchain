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
});
