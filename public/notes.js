import Contract from '../build/contracts/Notes.json';

export class Notes {
  constructor(){
    this.contract = null;
  }

  async init(web3){
    this.contract = new web3.eth.Contract(Contract.abi, Contract.networks['5777'].address)
  }

  async loadName() {
    const name = document.getElementById('owner');
    const owner = await this.contract.methods.getOwner().call();
    name.innerHTML = owner;
  }

  async setName(formName) {
    await this.contract.methods.setOwner(formName).send({from: '0x90adb54c32eb3ed3752ef5827b38d3581fa71b3b'});
    this.loadName();
  }

  async addNote(note) {
    await this.contract.methods.addNote(note).send({from: '0x90adb54c32eb3ed3752ef5827b38d3581fa71b3b'});
    this.getNotes();
  }

  async getNotes() {
    const list = document.getElementById('displayNotes');
    list.innerHTML = '';
    const notes = await this.contract.methods.getNotes().call();
    
    notes.forEach((note) => {
      const newNote = document.createElement('li');
      newNote.innerText = note;
      list.appendChild(newNote);
    })
  }
}
