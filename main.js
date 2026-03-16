const intro = document.getElementById("intro");
const main = document.getElementById("main");
const video = document.getElementById("introVideo");

if(video){

video.onended = () => {

intro.classList.add("hideIntro");

setTimeout(()=>{
main.classList.add("showMain");
},700);

}

}
