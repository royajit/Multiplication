const num1 = Math.ceil(Math.random()*10)
const num2 = Math.ceil(Math.random()*10)
const scroeE1 = document.getElementById("h4")
const questionE1 = document.getElementById("question")
const formE1 =document.getElementById("form")
let score = JSON.parse(localStorage.getItem("score"));
if(!score){
    score=0;
}
scroeE1.innerText= `score:${score}`
const inputE1 = document.getElementById("input")


// console.log('====================================');
// console.log(num1);
// console.log('====================================');
questionE1.innerText = `What is ${num1} multiply by ${num2}?`
const correnctAns = num1*num2
formE1.addEventListener("submit",()=>{
 const userans= +inputE1.value
 if (userans=== correnctAns){
    score++
    Updatelocalstorage()
}else{
    score--
    Updatelocalstorage()
}
});
function Updatelocalstorage(){
    localStorage.setItem("score", JSON.stringify(score))
}
