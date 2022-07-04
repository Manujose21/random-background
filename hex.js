const hex = ["1","2","3","4","5","6","7","8","9", "A", "B", "C","D","E","F"];

const btn = document.getElementById("btn");
const color = document.getElementById("color");
const btnAppend = document.getElementById("btn-append");
const input = document.getElementById("input");

btn.addEventListener("click", ()=>{

    let randomColor = "#";

    for(let i = 0; i < 6; i++){
        randomColor += hex[getRandomNumber()]; 
    }   
    
    document.body.style.background = randomColor;

    color.textContent = randomColor;

    input.value = randomColor;
})

btnAppend.addEventListener("click", ()=>{
    document.body.style.background = input.value;
})

const getRandomNumber = () =>{
    return Math.floor(Math.random() * hex.length);
}