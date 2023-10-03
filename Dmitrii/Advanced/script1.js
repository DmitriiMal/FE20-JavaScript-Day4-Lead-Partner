// //////////////////////////// //
// ///////// Advanced ///////// //
// //////////////////////////// //


let cont = document.querySelector('#container');
let heading = document.querySelector('#heading');
let circ = document.querySelector('#circle');

circ.addEventListener('mouseover', () => {heading.innerHTML = `You are in the circle`})
circ.addEventListener('mouseout', () => {heading.innerHTML = `You are outside of the circle`})
circ.addEventListener('click', () => {circ.style.backgroundColor = '#f4f4f4'})
circ.addEventListener('dblclick', () => {circ.style.backgroundColor = '#6495ED'})