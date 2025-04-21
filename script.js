
//select elements that can't be changed with css overide
const styleSheet = document.querySelectorAll('link[rel="stylesheet"]')[1];
let icon1 = document.getElementById("icon1");
let icon2 = document.getElementById("icon2");
let icon3 = document.getElementById("icon3");
let paragraph = document.getElementById("para");
let button = document.getElementById("overlay-btn");
let cover = document.querySelector('img[src="img/cover-neutral.avif"]');
let h1 = document.querySelector('h1');
let pic1 = document.querySelector('img[src="img/pic1-neutral.avif"]');
let pic2 = document.querySelector('img[src="img/pic2-neutral.jpg"]');

button.addEventListener("click", function ( ) {
    styleSheet.setAttribute("href", "vintage.css");
    cover.setAttribute("src", "img/cover-vintage.jpg");
    h1.textContent = 'Vintage';
    paragraph.textContent = "The vintage aesthetic is inspired by styles from past decades—usually anywhere from the 1920s to the 1980s. It’s all about bringing a nostalgic feel through muted colors, retro patterns, and old-school design elements like classic fonts, worn textures, and antique-inspired details. This style often feels warm and familiar. It captures the charm of the past and gives it a soft, stylish twist for today.";
    pic1.setAttribute("src", "img/pic1-vintage.jpeg");
    pic2.setAttribute("src", "img/pic2-vintage.jpeg");
    icon1.setAttribute("src", "img/icon1-vintage.png");
    icon2.setAttribute("src", "img/icon2-vintage.png");
    icon3.setAttribute("src", "img/icon3-vintage.png");
});







