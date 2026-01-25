
const username = document.querySelector("#username");
const password = document.querySelector("#password");

const form = document.querySelector("#form");

form.addEventListener("submit",(e) => {
   e.preventDefault();
  
   const users = JSON.parse(localStorage.getItem('users')) || [];

   const user = users.find((usr) => usr.username === username.value && usr.password === password.value);

   if(!user){
    alert("invalid credentuals");
    return;
   }

   localStorage.setItem("currentUser", JSON.stringify(user));

   window.location.href= '../html/examRegister.html';
});