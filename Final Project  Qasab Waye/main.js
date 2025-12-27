const username = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#Password");
const confemPassword = document.querySelector("#confemPassword");
const form = document.querySelector("#form");

const showError = (input, message) => {

   let parentElement = input.parentElement;
   parentElement.classList = 'form-control error';
   const small = parentElement.querySelector("small");
   const successIcon = parentElement.querySelectorAll("i")[0];
   const errorIcon = parentElement.querySelectorAll("i")[1];
   errorIcon.style.visibility = 'visible';
   successIcon.style.visibility = 'hidden';
   small.innerText = message;

}

const showSuccess = (input) => {

   let parentElement = input.parentElement;
   parentElement.classList = 'form-control success';
   const successIcon = parentElement.querySelectorAll("i")[0];
   const errorIcon = parentElement.querySelectorAll("i")[1];
   errorIcon.style.visibility = 'hidden';
   successIcon.style.visibility = 'visible';

}

const checkEmail = (email) => {
   const reg = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

   if (reg.test(email.value)) {
      showSuccess(email);
   } else {
      showError(email, 'Invalid Email');
   }
}

const checkPasswordLength = (input, min, max) => {

   if (input.value.length < min) {
      showError(input, `password atleast ${min} Chartcater `);
   } else if (input.value.length > max) {
      showError(input, `password maximun charactor is ${max}`);
   } else {
      showSuccess(input);
   }

}

const checkEmailConfirmPassword = (password, confemPassword) => {

   if (password.value !== confemPassword.value) {
      showError(confemPassword, 'password is Not Match');
   }
}

form.addEventListener("submit", (event) => {

   const checkEmpty = (elements) => {

      elements.forEach((element) => {
         if (element.value === '') {
            showError(element, 'Input required');
         } else {
            showSuccess(element);
         }
      });
   }
   event.preventDefault();

   checkEmpty([username, email, password, confemPassword]);
   checkEmail(email);

   checkPasswordLength(password, 6, 100);
   checkPasswordLength(confemPassword, 6, 100);

   checkEmailConfirmPassword(password, confemPassword);

});


//  form End



const toggleButton = document.querySelector("#dark-mode");

toggleButton.addEventListener("click", switchDark);

function switchDark() {
   document.body.classList.toggle("dark-mode");
   toggleButton.classList.toggle("dark-mode");

   if (document.body.classList.contains("dark-mode")) {
      toggleButton.innerHTML = `<i class="fa-regular fa-sun"></i>`;
      localStorage.setItem("mode", "dark");
   } else {
      toggleButton.innerHTML = `<i class="fa-solid fa-moon"></i>`;
      localStorage.setItem("mode", "light"); //setItem localStorage waxa lagu kedinaayo 
   }
}


window.addEventListener("DOMContentLoaded", function () {
   const saveMode = this.localStorage.getItem("mode"); // getItem localStorage waxa laga soo aqrinaayo
   if (saveMode === "dark") {
      this.document.body.classList.add("dark-mode");
      toggleButton.classList.add("dark-mode");
      toggleButton.innerHTML = `<i class="fa-regular fa-sun"></i>`;
   } else {
      toggleButton.innerHTML = `<i class="fa-solid fa-moon"></i>`;
   }
})

//Dark Mode End

const formRegister = document.querySelector("#form");
const usernameRegister = document.querySelector("#username");
const emailRegister = document.querySelector("#email");
const passwordRegister = document.querySelector("#Password");
const confemPasswordRegister = document.querySelector("#confemPassword");
const tbody = document.querySelector("#tbody");


document.addEventListener("DOMContentLoaded", loadReads);

function loadReads() {
   const reads = getlocalStoragesave();
   reads.forEach(addReadDOM);
}

formRegister.addEventListener("submit", function (event) {

   event.preventDefault();

   const readForm = usernameRegister.value.trim();
   const emailRead = emailRegister.value.trim();
   const passwordRegisterRead = passwordRegister.value.trim();
   const confemPasswordRegisterRead = confemPasswordRegister.value.trim();
  
   document.addEventListener("DOMContentLoaded",loadReads);

      function loadReads(){

         const reads = getlocalStoragesave();

         console.log(reads)
         
         
      }
   

   if (readForm !== "") {
      const read = {
         id: Date.now(),
         text: readForm,
         textEmail: emailRead,
         textpassword: passwordRegisterRead,
         textConfemPassword: confemPasswordRegisterRead,
         
      }
      addReadDOM(read);
      savelocalStorage(read)
      usernameRegister.value = "";
      emailRegister.value = "";
      passwordRegister.value = "";
      confemPassword.value = "";
   }
})

function addReadDOM(read) {
   const tr = document.createElement("tr")
   tr.className = `read`;
   tr.dataset.id = read.id;

   tr.innerHTML = ` <tr>
       <td class="read">${read.text}</td>
       <td class="readB">${read.textEmail}</td>
       <td class="readC">${read.textpassword}</td>
       <td class="readD">${read.textConfemPassword}</td>
                 <td class="edit-delete">     
                  <div class="edit-btn">Edit</div>
                  <div class="delete-btn">Delete</div>
               </td>`;

   tbody.appendChild(tr)
   
   deltePost(tr,read);
   
}

function savelocalStorage(read){

   const readAll = getlocalStoragesave();

  readAll.push(read)

   
   
   localStorage.setItem("reads", JSON.stringify(readAll));

}


function getlocalStoragesave(){

    const readAll = JSON.parse(localStorage.getItem("reads")) || [];
   return readAll;


}

deltePost(tr, read);

function savelocalStorage(read) {
  const readAll = getlocalStoragesave();
  readAll.push(read);
  localStorage.setItem("reads", JSON.stringify(readAll));
}

function getlocalStoragesave() {
  return JSON.parse(localStorage.getItem("reads")) || [];
}

function deltePost(tr, read) {
  const deleteBtn = tr.querySelector(".delete-btn");
  const editBtn = tr.querySelector(".edit-btn");

  deleteBtn.addEventListener("click", function () {
    delteHanle(read.id, tr);
  });

  editBtn.addEventListener("click", function () {
    hanleEdit(read.id, tr);
  });

}

function hanleEdit(readId,tr){

   const readSpen = tr.querySelector(".read");
    // console.log(readSpen.textContent);
   // console.log(readSpen);
   const newRead = prompt("Edit your Read :",readSpen.textContent)
   updateRead(readId,newRead);
   if(newRead != null && newRead.trim()  !== ""){
      readSpen.textContent = newRead;
   }

   const readSpenB = tr.querySelector(".readB");
   const newReadB = prompt("Edit your Read B:",readSpenB.textContent)
   if(newReadB != null && newReadB.trim()  !== ""){
      updateReadB(readId,newReadB);
      readSpenB.textContent = newReadB;
   }
   
   const readSpenC = tr.querySelector(".readC");
   const newReadC = prompt("Edit your Read C:",readSpenC.textContent)
   if(newReadC != null && newReadC.trim()  !== ""){
      updateReadC(readId,newReadC);
      readSpenC.textContent = newReadC;
   }

   const readSpenD = tr.querySelector(".readD");
   const newReadD = prompt("Edit your Read D:",readSpenD.textContent)
   if(newReadD != null && newReadD.trim()  !== ""){
      updateReadC(readId,newReadD);
      readSpenD.textContent = newReadD;
   }
}

function delteHanle(id, tr) {
  let reads = getlocalStoragesave();

  reads = reads.filter(read => read.id !== id);

  localStorage.setItem("reads", JSON.stringify(reads));

  tr.remove();
}

function updateRead(readId,newRead){
  let reads = getlocalStoragesave();
  const read = reads.find(read => read.id == readId);
  if(read){
   read.text = newRead;
   localStorage.setItem('reads',JSON.stringify(reads));
  }
}

function updateReadB(readId,newReadB){
  let reads = getlocalStoragesave();
  const read = reads.find(read => read.id == readId);
  if(read){
   read.textEmail = newReadB;
   localStorage.setItem('reads',JSON.stringify(reads));
  }
}

function updateReadC(readId,newReadC){
  let reads = getlocalStoragesave();
  const read = reads.find(read => read.id == readId);
  if(read){
   read.textpassword = newReadC;
   localStorage.setItem('reads',JSON.stringify(reads));
  }
}

function updateReadC(readId,newReadD){
  let reads = getlocalStoragesave();
  const read = reads.find(read => read.id == readId);
  if(read){
   read.textConfemPassword = newReadD;
   localStorage.setItem('reads',JSON.stringify(reads));
  }
}
