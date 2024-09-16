let input = document.getElementById("inputBox");
let buttons = document.querySelectorAll("button");
expression = '';
let arr = Array.from(buttons);

arr.forEach(button => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML === '=') expression = eval(expression);
        else if (e.target.innerHTML === 'AC') expression = '';
        else if (e.target.innerHTML === 'DEL') expression = expression.slice(0, expression.length - 1);
        else expression += e.target.innerHTML;
        input.value = expression;
    })
})

window.addEventListener("keydown", e => {
    if (e.key == 'Enter' || e.key == "=") expression = eval(expression)
    else if (e.key == 'Backspace') expression = expression.slice(0, expression.length - 1);
    else if (arr.some(btn => btn.innerText === e.key)) expression += e.key;
    input.value = expression
})