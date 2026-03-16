const intro = document.getElementById("intro");
const main = document.getElementById("main");
const video = document.getElementById("introVideo");

function revealSite(){

if(intro){
intro.classList.add("hideIntro");
}

setTimeout(()=>{

if(main){
main.style.opacity = "1";
}

},800);


// remove intro layer completely
setTimeout(()=>{
if(intro){
intro.remove();
}
},2000);

}


if(video){
video.onended = revealSite;
}


// fallback if video fails
setTimeout(revealSite,6000);
