let btn1 = document.getElementById('btn1')
let btn2 = document.getElementById('btn2')
let btn3 = document.getElementById('btn3')
let demo = document.getElementById('demo')
let count=0;
btn1.addEventListener('click',decrease)
function decrease(){
count++;
demo.textContent=count;
}
btn3.addEventListener('click',increase)
function increase(){
count--;
demo.textContent=count;
}
btn2.addEventListener('click',reset)
function reset(){
count=0
demo.textContent=count;
}