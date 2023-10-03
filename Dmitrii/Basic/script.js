// ////////////////////// //
// ///// Basic Ex 1 ///// //
// ////////////////////// //

let submitBtn = document.querySelector('#submit');
let foolName = document.querySelector('#fool_name');
// let puserProf = document.querySelector('#profession').value;


function displayName(e) {
  e.preventDefault();

  let firstName = document.querySelector('#firstname').value;
  let lastName = document.querySelector('#lastname').value;
  let userAge = document.querySelector('#age').value;

  foolName.innerHTML = `${firstName} ${lastName} ${userAge} years old`;

  if (firstName.length == 0) {
    foolName.innerHTML = `Enter your firstname`;
  } else if (lastName.length == 0){
    foolName.innerHTML = `Enter your lastname`;
  } else if (firstName.length + firstName.length > 5) {
      foolName.style.color = 'green';
  } else {
    foolName.style.color = 'red';
  }
  changeColor()
}

submitBtn.addEventListener('click', displayName)

// ////////////////////// //
// ///// Basic Ex 2 ///// //
// ////////////////////// //

function changeColor() {
  let puserProf = document.querySelector('#profession').value;
  if (puserProf == 'it') {
    foolName.style.backgroundColor = 'purple';
  } else if (puserProf == 'hospitality') {
    foolName.style.backgroundColor = 'yellow';
  } else if (puserProf == 'gastronomy') {
    foolName.style.backgroundColor = 'blue';
  } 
}