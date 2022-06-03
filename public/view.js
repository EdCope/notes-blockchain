document.addEventListener('DOMContentLoaded', async () => {
  await initWeb3();
  const setName = document.getElementById('setOwner');
  setName.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formName = e.target.elements[0].value;
    await setOwner(formName);
  })
  loadName();
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

const getOwner = async () => {
  const res = await fetch('http://localhost:3000/owner')
  return await res.json()
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
  loadName();
}

const loadName = async () => {
  const name = document.getElementById('owner');
  const owner = await getOwner();
  name.innerHTML = owner.name;
}
