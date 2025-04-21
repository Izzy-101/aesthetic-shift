
//select elements that can't be changed with css overide
const styleSheet = document.querySelectorAll('link[rel="stylesheet"]')[1];

const [icon1, icon2, icon3, paragraph, button] = 
    ['icon1','icon2','icon3','para','overlay-btn'].map(id => document.getElementById(id));

const [cover, h1, pic1, pic2] = 
    ['img[src="img/cover-neutral.avif"]',
    'h1','img[src="img/pic1-neutral.avif"]',
    'img[src="img/pic2-neutral.jpg"]'].map(select => document.querySelector(select));

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







