const canvas = document.querySelector('#jsCanvas');
const ctx = canvas.getContext("2d");
const colors = document.querySelectorAll(".jsColor");
const pickColor = document.getElementById("jsColors");
const range = document.getElementById('jsRange');
const mode = document.getElementById('jsMode');
const saveBtn = document.getElementById("jsSave");
const deleteBtn = document.getElementById("jsDelete");

const INITIAL_COLOR = "#2c2c2c"
const CANVAS_SIZE = 700;

canvas.width = CANVAS_SIZE;
canvas.height = CANVAS_SIZE;

ctx.fillStyle = "white";
ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
ctx.strokeStyle = INITIAL_COLOR;
ctx.fillStyle = INITIAL_COLOR;
ctx.lineWidth = 2.5;

let painting = false;
let filling = false;

const arrc = Array.from(colors);

function stopPainting() {
  painting = false;
}

function startPainting() {
  painting = true;
}

function onMouseMove(event) {
  const x = event.offsetX;
  const y = event.offsetY;
  if (!painting) {
    ctx.beginPath();
    ctx.moveTo(x, y);
  } else {
    ctx.lineTo(x, y);
    ctx.stroke();
  }
}

function handleCM(event) {
  event.preventDefault();
}

if (canvas) {
  canvas.addEventListener('mousemove', onMouseMove);
  canvas.addEventListener('mousedown', startPainting);
  canvas.addEventListener('mouseup', stopPainting);
  canvas.addEventListener('mouseleave', stopPainting);
  canvas.addEventListener('click', handleCanvasClick);
  canvas.addEventListener('contextmenu', handleCM);
}


function hadleColorClick(event) {
  const color = event.target.style.backgroundColor;
  ctx.strokeStyle = color;
  ctx.fillStyle = color;
}

function hadleRangeChange(event) {
  const size = event.target.value;
  ctx.lineWidth = size;
}

function handleModeClick() {
  if (filling === true) {
    filling = false;
    mode.innerText = "Fill";
  } else {
    filling = true;
    mode.innerText = "Paint";
  }
}

function handleCanvasClick() {
  if (filling) {
    ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
  }
}
function handleSaveClick() {
   const image =canvas.toDataURL("image/png");
   const link = document.createElement("a");
   link.href =image;
   link.download = "PaintJS[EXPORT]";
   link.click();
}

function deleteClick(){
  ctx.clearRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
}

if (colors) {
  Array.from(colors).forEach(color => color.addEventListener("click", hadleColorClick));
}

if (range) {
  range.addEventListener("input", hadleRangeChange);
}

if (mode) {
  mode.addEventListener('click', handleModeClick);
}
if (saveBtn) {
  saveBtn.addEventListener("click", handleSaveClick);
}
if (deleteBtn) {
  deleteBtn.addEventListener("click", deleteClick);
}