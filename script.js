const canvas=document.getElementById("bg");
const ctx=canvas.getContext("2d");

canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

let p=[];
for(let i=0;i<60;i++){
p.push({x:Math.random()*canvas.width,y:Math.random()*canvas.height,dx:(Math.random()-0.5),dy:(Math.random()-0.5)});
}

function draw(){
ctx.clearRect(0,0,canvas.width,canvas.height);
p.forEach(a=>{
a.x+=a.dx;
a.y+=a.dy;

ctx.beginPath();
ctx.arc(a.x,a.y,2,0,6.28);
ctx.fillStyle="#0284c7";
ctx.fill();

p.forEach(b=>{
let d=Math.hypot(a.x-b.x,a.y-b.y);
if(d<100){
ctx.beginPath();
ctx.moveTo(a.x,a.y);
ctx.lineTo(b.x,b.y);
ctx.strokeStyle="rgba(2,132,199,0.15)";
ctx.stroke();
}
});
});
requestAnimationFrame(draw);
}
draw();