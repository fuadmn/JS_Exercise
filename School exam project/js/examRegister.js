

const studentName = document.querySelector("#studentName");
const image = document.querySelector("#image");
const math = document.querySelector("#math");
const arabic = document.querySelector("#arabic");
const chemistry = document.querySelector("#chemistry");
const history = document.querySelector("#history");
const biology = document.querySelector("#biology");
const physcis = document.querySelector("#physcis");
const somalia = document.querySelector("#somalia");
const geography = document.querySelector("#geography");
const islamicStudies = document.querySelector("#islamicStudies");
const ictComputer = document.querySelector("#ictComputer");
const tbody = document.querySelector("#trRead");
const thead = document.querySelector("#thead");
const table = document.querySelector("#table");

let currentUser = JSON.parse(localStorage.getItem("currentUser"));

document.querySelector("#user").textContent = currentUser.username;
let editMode = false;
let editExamId = null;
const examForm = document.querySelector("#examForm");

document.addEventListener("DOMContentLoaded",loadExam);
examForm.addEventListener("submit",(e) => {
    e.preventDefault();
   console.log(editMode,editExamId)
    const exam = {
        id: editExamId || Date.now().toString(),
        studentName: studentName.value,
        image: image.value,
        math: math.value,
        arabic: arabic.value,
        chemistry: chemistry.value,
        history: history.value,
        biology: biology.value,
        physcis: physcis.value,
        somalia: somalia.value,
        geography: geography.value,
        islamicStudies: islamicStudies.value,
        ictComputer: ictComputer.value,
        user: currentUser.username,
    };
    if(editMode){
     updateExam(exam);
    }else{
     createExam(exam);
    }
    loadExam();
    examForm.reset();
   
});

 function jsHtml(exam){

    const cardExam = document.createElement('tr');
    
   const id = document.createElement('td');
   id.textContent = exam.id;
   cardExam.appendChild(id);
   
    const studentName = document.createElement('td');
    studentName.textContent = exam.studentName;
    cardExam.appendChild(studentName);


    const image = document.createElement('td');
    
    const imageSrc = document.createElement('img');
    imageSrc.src = exam.image;
    imageSrc.alt = "Image Exam";
    image.appendChild(imageSrc);
    image.classList = "image";

    cardExam.appendChild(image);
    
    const math = document.createElement('td');
    math.textContent = exam.math;
    cardExam.appendChild(math);

    const arabic = document.createElement('td');
    arabic.textContent = exam.arabic;
    cardExam.appendChild(arabic);

    const chemistry = document.createElement('td');
    chemistry.textContent = exam.chemistry;
    cardExam.appendChild(chemistry);

    const history = document.createElement('td');
    history.textContent = exam.history;
    cardExam.appendChild(history);

    const biology = document.createElement('td');
    biology.textContent = exam.biology;
    cardExam.appendChild(biology);

    const physcis = document.createElement('td');
    physcis.textContent = exam.physcis;
    cardExam.appendChild(physcis);

    const somalia = document.createElement('td');
    somalia.textContent = exam.somalia;
    cardExam.appendChild(somalia);

    const geography = document.createElement('td');
    geography.textContent = exam.geography;
    cardExam.appendChild(geography);

    
    const islamicStudies = document.createElement('td');
    islamicStudies.textContent = exam.islamicStudies;
    cardExam.appendChild(islamicStudies);

    const ictComputer = document.createElement('td');
    ictComputer.textContent = exam.ictComputer;
    cardExam.appendChild(ictComputer);

  
   const totalTd = document.createElement('td');
   totalTd.textContent = total(exam);
   totalTd.classList = "grede";
   cardExam.appendChild(totalTd);
   

   const  minTd = document.createElement('td');
   minTd.textContent = min(exam);
   minTd.classList = "grede";
   cardExam.appendChild(minTd);
   
    const maxTd = document.createElement('td');
    maxTd.textContent = max(exam);
    maxTd.classList = "grede";
    cardExam.appendChild(maxTd);
    
    const averageTd = document.createElement('td');
    averageTd.textContent = average(exam);
    averageTd.classList = "grede";
    cardExam.appendChild(averageTd);
    
   
   const gradeTd = document.createElement('td');
   gradeTd.textContent = gradeFromExam(exam);
   gradeTd.classList = "grede";
   cardExam.appendChild(gradeTd);



    const action = document.createElement('td');
    
    const edit = document.createElement('button');
edit.textContent = currentUser.username === exam.user ? "Edit" : "none";

    edit.onclick = () => editExam(exam.id)
    edit.classList.add("editBtn");
    edit.classList.add("but");
    action.appendChild(edit);

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("deleteBtn");
    deleteBtn.onclick = () => deleteExam(exam.id);
    deleteBtn.classList.add("but");
    action.appendChild(deleteBtn);
    
    cardExam.appendChild(action);

    
    
    

    return cardExam;
 }
 
  

 function total(exam){

  let stubject = [
    "math",
    "arabic",
    "chemistry",
    "history",
    "biology",
    "physcis",
    "somalia",
    "geography",
    "islamicStudies",
    "ictComputer"
  ];

  return stubject.reduce((sum, stubject) => sum + Number(exam[stubject]) ,0);
 };


 function min(exam){
 const stubject = [
    "math",
    "arabic",
    "chemistry",
    "history",
    "biology",
    "physcis",
    "somalia",
    "geography",
    "islamicStudies",
    "ictComputer"
 ].map(stubject => Number(exam[stubject]));
 
  return Math.min(...stubject);
}

function max(exam){
  const stubject = [
     "math",
    "arabic",
    "chemistry",
    "history",
    "biology",
    "physcis",
    "somalia",
    "geography",
    "islamicStudies",
    "ictComputer"
  ].map(stubject => Number(exam[stubject]));

  return Math.max(...stubject);
};

 function average(exam){
  const stubject = [
     "math",
    "arabic",
    "chemistry",
    "history",
    "biology",
    "physcis",
    "somalia",
    "geography",
    "islamicStudies",
    "ictComputer"
  ].map(stubject => Number(exam[stubject]));
  
  const sum = stubject.reduce((total, num) => total + num, 0);

  return (sum / stubject.length).toFixed(2);
 };

function average(exam) {
  const subjects = [
    "math",
    "arabic",
    "chemistry",
    "history",
    "biology",
    "physcis",
    "somalia",
    "geography",
    "islamicStudies",
    "ictComputer"
  ].map(sub => Number(exam[sub]));

  const sum = subjects.reduce((t, s) => t + s, 0);
  return sum / subjects.length;
}

function gradeFromExam(exam) {
  const avg = average(exam);
  return grade(avg);
}

function grade(score) {
  if (score >= 90) return "A +";
  else if (score >= 80) return "A";
  else if (score >= 70) return "B +";
  else if (score >= 60) return "C +";
  else if (score >= 50) return "C";
  else if (score >= 40) return "D +";
  else if (score >= 30) return "D";
  else return "F";
}

  function loadExam(){
    const exams = JSON.parse(localStorage.getItem("exams")) || [];
    
    tbody.innerHTML = "";
    exams.map((exam) => tbody.appendChild(jsHtml(exam)));
  }

  function editExam(examId){
    const exams = JSON.parse(localStorage.getItem("exams")) || [];

    const exam = exams.find((exam) => exam.id === examId);

    studentName.value = exam.studentName;
    image.value = exam.image,
    math.value = exam.math,
    arabic.value = exam.arabic;
    chemistry.value = exam.chemistry;
    history.value = exam.history;
    biology.value = exam.biology;
    physcis.value = exam.physcis;
    somalia.value = exam.somalia;
    geography.value = exam.geography;
    islamicStudies.value = exam.islamicStudies;
    ictComputer.value = exam.ictComputer;
    document.getElementById("btn").textContent = "Update Save";
    editMode = true;
    editExamId = examId;

  };



  function createExam(exam){
     const exams = JSON.parse(localStorage.getItem("exams")) || [];

     exams.push(exam);

     localStorage.setItem("exams",JSON.stringify(exams));
  };

  function updateExam(exam){
     const exams = JSON.parse(localStorage.getItem("exams")) || [];

        const examIndex = exams.findIndex(e => e.id === exam.id);


     exams[examIndex] = exam;

     localStorage.setItem("exams",JSON.stringify(exams));
  };

   function deleteExam(examId){
      const  exams = JSON.parse(localStorage.getItem("exams")) || [];

      const filteredExam = exams.filter((exam) => exam.id !== examId);
      
      localStorage.setItem("exams",JSON.stringify(filteredExam));
      
      tbody.innerHTML = "";
      loadExam();
   };
 




document.getElementById("logout").addEventListener('click', () => {

    localStorage.removeItem('currentUser');

    window.location.href = './login.html';
});