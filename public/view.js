document.addEventListener('DOMContentLoaded', async () => {
  const name = document.getElementById('owner');
  const owner = await getOwner();
  name.innerHTML =  owner.name;
})

const getOwner = async () => {
  const res = await fetch('http://localhost:3000/owner')
  return await res.json()
}
