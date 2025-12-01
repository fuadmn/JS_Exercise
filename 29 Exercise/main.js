 
 async function reedAddress() {
    console.log("reead Addrress");
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json('https://jsonplaceholder.typicode.com/posts')
    console.log("response:", data);
    
 }

 reedAddress();
 