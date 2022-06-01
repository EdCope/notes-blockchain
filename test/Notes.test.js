const Notes = artifacts.require('Notes');

contract('Notes', () => {
  let notes;
  beforeEach(async () => {
    notes = await Notes.deployed();
  })
  it('Deploys a smart contract', async () => {
    assert(notes.address !== '');
  })
  it('can run a function on the smart contract', async () => {
    const result = await notes.readFromContract();
    assert(result === 'Preset note');
  })
  describe('Owner', () => {
    it('the initial value of the owner of a smart contract', async () => {
      const result = await notes.getOwner();
      assert(result === 'Unknown User');
    })
    it('can set the value of the owner of this contract', async () => {
      await notes.setOwner('Ed');
      assert(await notes.getOwner() === 'Ed');
    })
  })
  describe('Notes', () => {
    it('starts with an empty notes array', async () => {
      const result = await notes.getNotes();
      expect(result).to.deep.equal([]);
    })
    it('adds a note to the array', async () => {
      await notes.addNote('Sample Note');
      const result = await notes.getNotes();
      assert(result[0] === 'Sample Note');
    })
  })
  
});
