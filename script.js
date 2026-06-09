// JavaScript Document

// FECHA DEL EVENTO

const eventDate =
new Date("August 8, 2026 20:00:00");

const timer =
document.getElementById("timer");

// CUENTA REGRESIVA

setInterval(() => {

const now =
new Date();

const diff =
eventDate - now;

const days =
Math.floor(diff / 1000 / 60 / 60 / 24);

const hours =
Math.floor(diff / 1000 / 60 / 60) % 24;

const minutes =
Math.floor(diff / 1000 / 60) % 60;

timer.innerHTML =
`${days} Días · ${hours} Horas · ${minutes} Min`;

},1000);


// ANIMACIONES AL HACER SCROLL

const reveals =
document.querySelectorAll(".reveal");

window.addEventListener("scroll",()=>{

reveals.forEach(item=>{

const top =
item.getBoundingClientRect().top;

if(top < window.innerHeight - 100){

item.classList.add("active");

}

});

});


// ACTIVAR ELEMENTOS VISIBLES AL CARGAR

window.dispatchEvent(
new Event("scroll")
);