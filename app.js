const canvas = document.querySelector('#jsCanvas');
const ctx = canvas.getContext("2d");
const colors =document.querySelectorAll(".jsColor");
const pickColor = document.getElementById("jsColors");

ctx.strokeStyle = "#2c2c2c"
ctx.lineWidth = 2.5;
let painting = false;
const arrc =Array.from(colors)
console.log(); 
console.log(pickColor); 

function stopPainting() {
  painting = false;
}

function startPainting() {
  painting = true;
}

function onMouseMove(event) {
  const x = event.offsetX;
  const y = event.offsetY; 
 if(!painting){
   ctx.beginPath();
   ctx.moveTo(x,y);
 } else {
   ctx.lineTo(x,y);
   ctx.stroke();
 }
}
 
if (canvas) {
  canvas.addEventListener('mousemove', onMouseMove);
  canvas.addEventListener('mousedown', startPainting);
  canvas.addEventListener('mouseup', stopPainting);
  canvas.addEventListener('mouseleave', stopPainting);
}
 
function hadleColorClick(event){
const color =event.target.style.backgroundColor;
ctx.strokeStyle = color;
}

Array.from(colors).forEach(color => color.addEventListener("click",hadleColorClick));