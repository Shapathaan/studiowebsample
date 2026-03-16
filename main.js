const intro = document.getElementById("intro");
const main = document.getElementById("main");
const video = document.getElementById("introVideo");

function revealSite(){

if(intro){
intro.classList.add("hideIntro");
}

setTimeout(()=>{
if(main){
main.style.opacity="1";
}
},700);

setTimeout(()=>{
if(intro){
intro.remove();
}
},2000);

}

if(video){
video.onended=revealSite;
}

setTimeout(revealSite,6000);


/* SCROLL REVEAL */

const observer = new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){
entry.target.style.transform="translateY(0)";
entry.target.style.opacity="1";
}

});

});

document.querySelectorAll(".filmCard,.service,.poster").forEach(el=>{

el.style.transform="translateY(40px)";
el.style.opacity="0";
el.style.transition="all 0.8s";

observer.observe(el);

});
/* ======================= */
/* MOBILE MENU */
/* ======================= */

const toggle = document.getElementById("menuToggle")
const menu = document.getElementById("navMenu")

if(toggle){

toggle.addEventListener("click",()=>{

menu.classList.toggle("showMenu")

})

}
