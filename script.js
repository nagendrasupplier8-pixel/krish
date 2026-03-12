// mobile menu

const menu = document.getElementById("menu");
const nav = document.getElementById("nav");

menu.onclick = () => {
nav.classList.toggle("active");
};


// typing animation

const text = "Web Developer • Designer • Creator";

let i = 0;

function typing(){

if(i < text.length){

document.getElementById("typing").innerHTML += text.charAt(i);

i++;

setTimeout(typing,60);

}

}

typing();


// scroll button

function scrollContact(){

document.getElementById("contact").scrollIntoView({
behavior:"smooth"
});

}


// contact form

const form = document.getElementById("form");

form.addEventListener("submit",function(e){

e.preventDefault();

alert("Message sent successfully!");

});
