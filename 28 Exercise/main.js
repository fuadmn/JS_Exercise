 
function fetchPromise(){
    return new Promise((resolve,recject) => {
        setTimeout(() => {
            const success = true;
            if(success){
                resolve({id: 3, name: "cumar"})
            }else{
                recject("Error the Promise")
            }
        }, 3000);
    })
}

async function displayPromise() {
    try{
        const user = await fetchPromise();
        console.log(user);
    } catch(err){
    console.log(err);
    }
}

displayPromise()