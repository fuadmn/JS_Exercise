const username = document.querySelector("#username");
const password = document.querySelector("#password");

const form = document.querySelector("#form");

form.addEventListener("submit",(e) => {
    e.preventDefault();

    const user = {
        username: username.value,
        password: password.value,
    };

    const users = JSON.parse(localStorage.getItem("users")) || [];
    
    const existingUser = users.find((user) => username.value === username.value);

    if(existingUser){
        alert(`User ${username.value} alteady exists`);
        
    }
    users.push(user); 
    localStorage.setItem("users",JSON.stringify(users));   
    
    window.location.href="../html/login.html";
});


