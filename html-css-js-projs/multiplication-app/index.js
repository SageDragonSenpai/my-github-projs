const num1 = Math.ceil(Math.random() * 10)
const num2 = Math.ceil(Math.random() * 10)

/*let questionEl = "";
if (typeof document !== "undefined") {
  question = document.question;
}
console.log(questionEl); // '' if in a Node.js environment */
const questionEl = document.getElementById("question");

/*let input = "";
if (typeof document !== "undefined") {
  input = document.input;
}
console.log(input); // '' if in a Node.js environment*/
const inputEl = document.getElementById("input");


/*let formEl = "";
if (typeof document !== "undefined") {
  form = document.form;
}
console.log(formEl); // '' if in a Node.js environment*/
const formEl = document.getElementById("form");

const scoreEl = document.getElementById("score");



let score = JSON.parse(localStorage.getItem("score"));

if(!score){
  score = 0;
}

scoreEl.innerText = `score: ${score}`;

questionEl.innerText = `What is ${num1} muliply by ${num2}?`;

const correctAns = num1 * num2;

formEl.addEventListener("submit", ()=>{
    const userAns = +inputEl.value;
    if(userAns === correctAns){
        score++;
        updateLocalStorage()
    }else{
        score--;
        updateLocalStorage()
    }
});

function updateLocalStorage(){
    localStorage.setItem("score", JSON.stringify(score));
}


