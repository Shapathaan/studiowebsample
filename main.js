const intro = document.getElementById("intro");
const main = document.getElementById("main");
const video = document.getElementById("introVideo");

function showSite(){

if(intro){
intro.classList.add("hideIntro");
}

if(main){
setTimeout(()=>{
main.classList.add("showMain");
},500);

}

// remove intro completely after animation
setTimeout(()=>{
if(intro){
intro.style.display="none";
}
},2000);

}


// if video ends normally
if(video){
video.onended = showSite;
}


// fallback: if video doesn't load
setTimeout(showSite,6000);
