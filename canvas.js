const canvas = document.querySelector("canvas");
const body = document.querySelector("body");
const object = canvas.getContext("2d")
const span  = document.querySelector("span");

canvas.width =  400;
canvas.height = 400;

console.log(canvas.width)
console.log(canvas.height)

let x = 10;
let y = 10;
const tile = 20;
const tileSize = canvas.width/tile ;
let fruit_y = 5;
let fruit_x = 5;

let random = Math.floor(Math.random()*tile)

let yVelocity = 0;
let xVelocity = 0;

const Snake = () => {
    object.fillStyle = 'black'
    object.fillRect(x*tile,y*tile,tileSize,tileSize);

}

const Fruit = () => {
    object.fillStyle = 'red';
    object.fillRect(fruit_x*tile,fruit_y*tile,tileSize,tileSize);
}


const snakeMotion = () => {
    x = x + xVelocity;
    y = y + yVelocity;
}

const clearScreen = () => {
    object.fillStyle = 'white'
    object.fillRect(0,0,canvas.width,canvas.height)
}
let score = 0;
const collide = ()=> {
     
    if(fruit_x === x && fruit_y === y)
    {   
        console.log("collided")
        fruit_x = Math.floor(Math.random()*tile)
        fruit_y = Math.floor(Math.random()*tile)
        score++
        span.innerHTML = score;
    }

    if(x*tile >canvas.width)
    {
        x = 0;
    }
    if(x*tile < 0)
    {
        x = canvas.width/tile;   
    }
    if(y*tile < 0)
    {
        y = canvas.height/tile;   
    }
    if(y*tile > canvas.height)
    {
        y = 0;   
    }


}

const ArrowButtons = (e) =>{
    
    if(e.key === 'ArrowUp')
    {
        xVelocity = 0;
        yVelocity = -1;
    }
    if(e.key === 'ArrowDown')
    {
        xVelocity = 0;
        yVelocity = 1;
    }
    if(e.key === 'ArrowRight')
    {
        xVelocity = 1;
        yVelocity = 0;
    }
    if(e.key === 'ArrowLeft')
    {
        xVelocity = -1;
        yVelocity = 0;
    }
}

const startGame = () => {
    
    clearScreen()
    snakeMotion()
    collide()
    Snake()
    Fruit()
    setTimeout(startGame, 1000/6)

}

document.body.addEventListener('keydown', ArrowButtons)


startGame();
