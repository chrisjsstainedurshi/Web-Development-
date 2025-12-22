/* Challenge 2: Create a function for each image that display a description of the picture into the div with an id of highlight*/
document.querySelectorAll('.gallery img').forEach((image) => {
  image.addEventListener('click', () => {
    document.getElementById('highlight').innerText = image.alt;
 });
});

const images = document.querySelectorAll('.gallery img');

function handleMouseOver(image) {
    image.style.border = "3px solid blue"

