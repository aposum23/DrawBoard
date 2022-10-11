let isDrawing = false;
let isLine = false;
let lineWeight = 5;
let color = 'black';
let x = 0;
let y = 0;

const drawTool = document.getElementById('Capa1');
const lineTool = document.getElementById('Capa2');
const myPics = document.getElementById('myPics');
const context = myPics.getContext('2d');
console.log(myPics);

drawTool.addEventListener('click', (e) => {
    isLine = false;
    isDrawing = false;
});

lineTool.addEventListener('click', (e) => {
    isLine = true;
    isDrawing = false;
});

myPics.addEventListener('mousedown', (e) => {
    console.log(1);
    x = e.offsetX;
    y = e.offsetY;
    if (!isLine){
        isDrawing = true;
    }
});

myPics.addEventListener('mousemove', (e) => {
    console.log(2);
    if (isDrawing) {
        drawLine(context, x, y, e.offsetX, e.offsetY);
        x = e.offsetX;
        y = e.offsetY;
    }
});

myPics.addEventListener('mouseup', (e) => {
    console.log(3);
    if (isDrawing) {
        drawLine(context, x, y, e.offsetX, e.offsetY);
        x = 0;
        y = 0;
        isDrawing = false;
    }
    if (isLine) {
        drawLine(context, x, y, e.offsetX, e.offsetY);
        x = 0;
        y = 0;
        isDrawing = false;
    }
});

function drawLine(context, x1, y1, x2, y2) {
    context.beginPath();
    context.strokeStyle = color;
    context.lineWidth = lineWeight;
    context.lineCap = 'round';
    context.moveTo(x1, y1);
    context.lineTo(x2, y2);
    context.stroke();
    context.closePath();
};

function getLineWeight(){
    const selectOption = document.getElementById('Select');
    console.log(selectOption);
    console.log(typeof(selectOption));
    lineWeight = selectOption.value;
}

function setColor(){
    const selectOption = document.getElementById('SelectColor');
    console.log(selectOption);
    console.log(typeof(selectOption));
    color = selectOption.value;
}