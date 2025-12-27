
function fetchUser(){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            const seccuss = true;
            if(seccuss){
                resolve({id: 1, name: "xasan"});
            }else{
                reject("Error the Promise");
            }
            
        },3000)
    })
}

//  console.log(fetchUserData())
 
 fetchUser()
 
 .then((data) => console.log('data', data))
 .catch((err) => console.log(err));