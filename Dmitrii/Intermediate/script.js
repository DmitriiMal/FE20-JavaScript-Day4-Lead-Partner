// ///////////////////////////// //
// ///// Intermediate Ex 1 ///// //
// ///////////////////////////// //

let santaCl = document.getElementsByClassName('santa');

for (let i = 0; i < santaCl.length; i++){
  santaCl[i].addEventListener('click', delSanta)
}

function delSanta() {
  this.style.opacity = '0';
  this.style.transition = 'all 1s';
  setTimeout(()=>{this.remove();}, 1000)
}
