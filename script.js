let btnCount = -1;
//select elements that can't be changed with css overide
const styleSheet = document.querySelectorAll('link[rel="stylesheet"]')[1];

const [icon1, icon2, icon3, paragraph, button] = 
    ['icon1','icon2','icon3','para','overlay-btn'].map(id => document.getElementById(id));

const [cover, h1, pic1, pic2] = 
    ['img[src="img/cover-neutral.avif"]',
    'h1','img[src="img/pic1-neutral.avif"]',
    'img[src="img/pic2-neutral.jpg"]'].map(select => document.querySelector(select));
const neutral = {
    styleSheet: [styleSheet,["href", "style.css"]], 
    cover: [cover,["src", "img/cover-neutral.avif"]], 
    pic1: [pic1,["src", "img/pic1-neutral.avif"]], 
    pic2: [pic2,["src", "img/pic2-neutral.jpg"]], 
    icon1: [icon1,["src","img/icon1-neutral.png"]], 
    icon2: [icon2,["src","img/icon2-neutral.png"]], 
    icon3: [icon3,["src","img/icon3-neutral.png"]],
    textContent: ["Neutral","Aesthetic Shift is a dynamic and interactive website that allows users to instantly change its entire visual style with the click of a button. Whether you're in the mood for a sleek modern look, a cozy vintage vibe, or a playful pastel theme, Aesthetic Shift seamlessly transforms its design to match."]  
}    
const vintage = {
    styleSheet: [styleSheet,["href", "vintage.css"]], 
    cover: [cover,["src", "img/cover-vintage.jpg"]], 
    pic1: [pic1,["src", "img/pic1-vintage.jpeg"]], 
    pic2: [pic2,["src", "img/pic2-vintage.jpeg"]], 
    icon1: [icon1,["src","img/icon1-vintage.png"]], 
    icon2: [icon2,["src","img/icon2-vintage.png"]], 
    icon3: [icon3,["src","img/icon3-vintage.png"]],
    textContent: ["Vintage","The vintage aesthetic is inspired by styles from past decades—usually anywhere from the 1920s to the 1980s. It’s all about bringing a nostalgic feel through muted colors, retro patterns, and old-school design elements like classic fonts, worn textures, and antique-inspired details. This style often feels warm and familiar. It captures the charm of the past and gives it a soft, stylish twist for today."]
}
const y2k = {
    styleSheet: [styleSheet,["href", "y2k.css"]], 
    cover: [cover,["src", "img/cover-y2k.avif"]], 
    pic1: [pic1,["src", "img/pic1-y2k.jpg"]], 
    pic2: [pic2,["src", "img/pic2-y2k.jpg"]], 
    icon1: [icon1,["src","img/icon1-y2k.png"]], 
    icon2: [icon2,["src","img/icon2-y2k.png"]], 
    icon3: [icon3,["src","img/icon3-y2k.png"]],    
    textContent: ["Y2K","The Y2K aesthetic is a style based on how people imagined the future around the year 2000. It blends early internet culture, pop trends, and futuristic fashion from the late ‘90s to early 2000s. You’ll see shiny materials, bold colors, chunky tech, and playful design—like metallics, glossy surfaces, and funky fonts."]  
}

const aestheticArry = [vintage, y2k, neutral];

//Select an aesthetic from the aestheticArry
const aesthetics = () => {
    if(btnCount === aestheticArry.length) {
        btnCount = -1;
    } else {
        btnCount+=1;
        return aestheticArry[btnCount];
    }
}

const aestheticShift = () => {
    let currentAesthetic = aesthetics();
    for (const tag in currentAesthetic) {
            if(tag !== 'textContent') {
                currentAesthetic[tag][0].setAttribute(currentAesthetic[tag][1][0], currentAesthetic[tag][1][1]);
            } else {
                h1.textContent = currentAesthetic[tag][0];
                paragraph.textContent = currentAesthetic[tag][1];
            }
    }
}

button.addEventListener("click", aestheticShift);







