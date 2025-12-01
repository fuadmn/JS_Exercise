
async function userData() {
  try{
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  if(!response.ok){
    throw new Error (`HTTP error! Status: ${response.status}`)

  }
  const data = await response.json();
  console.log("List of user:", data);
  
} catch (error){
   console.log("Error Ferching users", error);
   
}
}

userData()