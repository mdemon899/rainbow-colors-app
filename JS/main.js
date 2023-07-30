//* Creating Rainbow Colors Array

let colors = ['red','orange','yellow','green','blue','indigo','violet'];

//* Selecting Element's

const container = document.querySelector('#container');

const h2 = document.querySelector('h2');
 
const selectedColor = document.querySelector('#selectedColor');

//* Creating Loop

for (color of colors) {
  let box = document.createElement('div')
  box.classList.add('box')
  container.appendChild(box)
  box.style.backgroundColor = color;
  
  //* Creating Event Listner
  box.addEventListener('click', ()=>{
    h2.innerText = 'You have Selected: '
    selectedColor.innerText = box.style.backgroundColor;
    selectedColor.style.backgroundColor = box.style.backgroundColor;
  });
}