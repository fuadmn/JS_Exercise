

function changeImage(){

     const image = document.querySelector('#image');

     const url = prompt("Please enter your image URL:");
     const borderColor = prompt("Please enter your desired border color:");
     const width = prompt("Please enter the width of the image (in pixels");
     const height = prompt("Please enter the height of the image (in pixels):");
     const borderRadius = prompt("Please enter the border radius (in pixels):");


     image.setAttribute('src',url);
     image.style.border = `22px solid ${borderColor}`;
     image.style.width = `${width}px`;
     image.style.height = `${height}`;
     image.style.borderRadius = `${borderRadius}px`;
     image.style.padding = "10px";
     image.style.backgroundColor = `#cfc2dc`

}