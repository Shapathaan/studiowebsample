const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");

function resize(){
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
}

resize();
window.addEventListener("resize",resize);

let particles=[];

for(let i=0;i<90;i++){

particles.push({
x:Math.random()*canvas.width,
y:Math.random()*canvas.height,
size:Math.random()*2+0.5,
speed:Math.random()*0.4+0.1
})

}

function animate(){

ctx.clearRect(0,0,canvas.width,canvas.height);

ctx.fillStyle="#c9a24a";

particles.forEach(p=>{

p.y -= p.speed;

if(p.y < 0){
p.y = canvas.height;
p.x = Math.random()*canvas.width;
}

ctx.beginPath();
ctx.arc(p.x,p.y,p.size,0,Math.PI*2);
ctx.fill();

});

requestAnimationFrame(animate);

}

animate();
