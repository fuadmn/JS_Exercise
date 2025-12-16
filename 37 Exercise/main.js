
const form = document.querySelector("#form");
const postTitle = document.querySelector("#postTitle");
const imageUrl = document.querySelector("#imageUrl");
const WriteYour = document.querySelector("#WriteYour");
const Write_your = document.querySelector("#Write_your");
const postUl = document.querySelector("#postUl");

form.addEventListener("submit",function(event){

    event.preventDefault();

   const postTitleText = postTitle.value.trim();
   

   
   if(postTitleText !== ""){
      const post = {
        id : Date.now(),
        text : postTitleText,
        completed : false,
      }
       addPostTextDOM(post)

       postTitle.value = "";
   }
  
})

function addPostTextDOM(post){
  const li = document.createElement("li");
  li.classList = `form`;
  li.dataset.id = post.id;

  li.innerHTML = ` <span class="task">${post.text}</span>  
                     <div class="edit-delete"> 
                      <button class="edit-btn">Edit</button>
                     <button class="delete-btn">Delete</button>
                      </div>
                    `;


                     postUl.appendChild(li)
}
