import Contract from '../build/contracts/Notes.json';

document.addEventListener('DOMContentLoaded', async () => {
  const web3 = await initWeb3();
  const contract = await notesContract(web3);
  const setName = document.getElementById('setOwner');
  setName.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formName = e.target.elements[0].value;
    await setOwner(formName);
  })
  loadName(contract);
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

const notesContract = (web3) => {
  return new web3.eth.Contract(Contract.abi, Contract.networks['5777'].address)
}

const setOwner = async (formName) => {
  await fetch('http://localhost:3000/setOwner', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name: formName })
  })
  loadName(contract);
}

const loadName = async (contract) => {
  const name = document.getElementById('owner');
  const owner = await contract.methods.getOwner().call();
  name.innerHTML = owner;
}
