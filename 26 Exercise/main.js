

function delaySimulated(callback){
    setTimeout(() => {
        console.log("delay,true..");
        const user = "waa lasoo dahay camal";
         callback(user)
    },2000)
}

delaySimulated(function(user){
    console.log(user);
})

