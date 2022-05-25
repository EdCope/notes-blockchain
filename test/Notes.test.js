const Notes = artifacts.require('Notes');

contract('Notes', () => {
  it('Deploys a smart contract', async () => {
    const notes = await Notes.deployed();
    console.log(notes.address);
    assert(notes.address !== '');
  })
});
