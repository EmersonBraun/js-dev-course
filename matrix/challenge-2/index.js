const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;
const FONT_SIZE = 16;
const COLUMNS = canvas.width / FONT_SIZE;

function getText() {
    const TEXTS = [0,1,2,3,4,5,6,7,8,9]
    return TEXTS[Math.floor(Math.random()*TEXTS.length)];
}

function getInitialColor() {
    return 'rgba(0,0,0,0.05)'
}

function getFinalColor() {
    return '#0F0'
}

function getFont() {
    return FONT_SIZE + 'px arial'
}

const drops = [];
for(let x =0; x < COLUMNS; x++){
    drops[x] = '';
}

function draw(){
    ctx.fillStyle = getInitialColor();
    ctx.fillRect(0,0,canvas.width,canvas.height);
    ctx.fillStyle = getFinalColor();
    ctx.font = getFont();
    
    for(let index=0; index < drops.length; index++){
        const text = getText()
        
        ctx.fillText(text,index*FONT_SIZE,drops[index]*FONT_SIZE);

        if(drops[index] * FONT_SIZE > canvas.height || Math.random() > 0.97){
            drops[index] = 0;
        }

        drops[index]++;
    }
}

setInterval(draw,33);