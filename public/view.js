document.addEventListener('DOMContentLoaded', async () => {
  const name = document.getElementById('owner');
  const setName = document.getElementById('setOwner');
  setName.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formName = e.target.elements[0].value;
    await setOwner(formName);
  })
  const owner = await getOwner();
  name.innerHTML = owner.name;
})

const getOwner = async () => {
  const res = await fetch('http://localhost:3000/owner')
  return await res.json()
}

const setOwner = async (formName) => {
  const res = await fetch('http://localhost:3000/setOwner', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name: formName })
  })
  const bla = document.getElementById('owner');
  const newt = await getOwner()
  bla.innerHTML = newt.name;
  
}
