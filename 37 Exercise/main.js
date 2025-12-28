


const form = document.querySelector("#form");
const postTitle = document.querySelector("#postTitle");
const imageUrl = document.querySelector("#imageUrl");
const WriteYour = document.querySelector("#WriteYour");
const Write_your = document.querySelector("#Write_your");
const postUl = document.querySelector("#postUl");

document.addEventListener("DOMContentLoaded", loadPost);

function loadPost() {

  const posts = getPost();

  posts.forEach(post => {
    addPostTextDOM(post);

  });


}

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const postTitleText = postTitle.value.trim();
  const postImage = imageUrl.value;
  const WritePost = WriteYour.value;

  if (postTitleText !== "") {
    const post = {
      id: Date.now(),
      text: postTitleText,
      image: postImage,
      textPost: WritePost,
      completed: false,
    };

    addPostTextDOM(post);
    savePost(post);


    postTitle.value = "";
    imageUrl.value = "";
    WriteYour.value = "";
  }
});

function addPostTextDOM(post) {
  const li = document.createElement("li");
  li.classList = `form`;
  li.dataset.id = post.id;

  li.innerHTML = ` <span class="post">${post.text}</span>  
  <img class="postImage" src="${post.image}" alt="todo image"/>
  <img class="postImage" src="${post.image}" alt=" image"/>
>>>>>>> 134718c (37)
        <span class="postText">${post.textPost}</span> 
                     <div class="edit-delete"> 
                      <button class="edit-btn">Edit</button>
                     <button class="delete-btn">Delete</button>
                      </div>
                    `;

  postUl.appendChild(li);

  deltePost(li, post);

}

function deltePost(li, post) {

  const delleteBtn = li.querySelector(".delete-btn");
  const editBtn = li.querySelector(".edit-btn");

  delleteBtn.addEventListener("click", function () {
    delteHanle(post.id, li)
  });

  editBtn.addEventListener("click", function () {
    handleEdit(post.id, li)
  })


}

function handleEdit(taskId, li) {

  const taskSpan = li.querySelector(".post");
  console.log(taskSpan.textContent)

  const newPostTxt = prompt("Edit your task:", taskSpan.textContent)

  if (newPostTxt !== null && newPostTxt.trim() !== "") {

    taskSpan.textContent = newPostTxt;
  }

  const postImage = li.querySelector(".postImage");
  console.log("image element ", postImage)

  console.log(postImage.src)

  const newImage = prompt("Edit your Image:", postImage.textContent)

  if (newImage !== null && newImage.trim() !== "") {

    // postImage.textContent = newImage;
    postImage.src = newImage;

  }
  

}function handleEdit(postId, li) {
  let posts = getPost();
  const post = posts.find(p => p.id === postId);
  if (!post) return;

  // TITLE
  const titleSpan = li.querySelector(".post");
  const newTitle = prompt("Edit title:", titleSpan.textContent);
  if (newTitle && newTitle.trim() !== "") {
    titleSpan.textContent = newTitle;
    post.text = newTitle;
  }

  // IMAGE
  const img = li.querySelector(".postImage");
  const newImage = prompt("Edit image URL:", img.src);
  if (newImage && newImage.trim() !== "") {
    img.src = newImage;
    post.image = newImage;
  }

  // TEXT
  const textSpan = li.querySelector(".postText");
  const newText = prompt("Edit post text:", textSpan.textContent);
  if (newText && newText.trim() !== "") {
    textSpan.textContent = newText;
    post.textPost = newText;
  }

  // SAVE UPDATED DATA
  localStorage.setItem("posts", JSON.stringify(posts));
}

>>>>>>> 134718c (37)


  const postText = li.querySelector(".postText");
  console.log(postText.textContent)

  const newTxt = prompt("Edit your newTxt:", postText.textContent)
  console.log(newImage, postText)
  if (newTxt !== null && newTxt.trim() !== "") {

    postText.textContent = newTxt;

  }
<<<<<<< HEAD
  console.log(postImage, newPostTxt,)
}
=======
  console.log(postImage, newPostTxt)


>>>>>>> 134718c (37)


function delteHanle(id, li) {

  let posts = getPost();

  posts = posts.filter(post => post.id != id);

  localStorage.setItem("posts", JSON.stringify(posts));

  li.remove();

}

function savePost(post) {


  const allPost = getPost();

  allPost.push(post)

  localStorage.setItem("posts", JSON.stringify(allPost));

}

function getPost() {
  const allPost = JSON.parse(localStorage.getItem("posts")) || [];
  return allPost;

}