const colors = ["lightred", "cyan", "lightblue","pink", "tomato", "lightgreen","lightcoral", "lightgray", "lightseagreen", "limegreen", "crimson", "beige", "brown", "bisque", "aqua", "chartreuse", "deepskyblue", "gold", "hotpink", "indgo", "dodgerblue"];

const btn = document.getElementById("btn");
const color = document.getElementById("color");
const btnAppend = document.getElementById("btn-append");
const input = document.getElementById("input");
btn.addEventListener("click", ()=>{

    let randomNumber = getRandomNumber();
    document.body.style.background = colors[randomNumber];
    color.textContent = colors[randomNumber];
    
    // console.log(colors[randomNumber]);
})
btnAppend.addEventListener("click", ()=>{
    document.body.style.background = input.value;
})
const getRandomNumber = () =>{
    return Math.floor(Math.random()*colors.length)
}