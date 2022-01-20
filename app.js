const canvas = document.querySelector('#jsCanvas');
const ctx = canvas.getContext("2d");

ctx.strokeStyle = "#2c2c2c"
let painting = false;

canvas.width =600;
canvas.heigt =600;

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


function onMouseDown(event) {
  painting = ture;
}


if (canvas) {
  canvas.addEventListener('mousemove', onMouseMove);
  canvas.addEventListener('mousedown', startPainting);
  canvas.addEventListener('mouseup', stopPainting);
  canvas.addEventListener('mouseleave', stopPainting);
}