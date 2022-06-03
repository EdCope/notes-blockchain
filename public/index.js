import { Notes } from './notes'

let web3;

document.addEventListener('DOMContentLoaded', async () => {
  web3 = await initWeb3();
  const notesContract = new Notes();
  await notesContract.init(web3);
  const setOwner = document.getElementById('setOwner');
  const addNote = document.getElementById('addNote');
  setOwner.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formName = e.target.elements[0].value;
    await notesContract.setName(formName);
  })
  addNote.addEventListener('submit', async (e) => {
    e.preventDefault();
    const note = e.target.elements[0].value;
    await notesContract.addNote(note);
  })
  notesContract.loadName();
  notesContract.getNotes();
  
});

const initWeb3 = () => {
  return new Promise(async (res, rej) => {
    //is metamask available?
    if(typeof window.ethereum !== 'undefined'){
      try{
        await window.ethereum.enable()
        return res(new Web3(window.ethereum));
      } catch (err) {
        rej(err);
      }
    }else {
      res(new Web3('http://localhost:9545'));
    }
  })
}

