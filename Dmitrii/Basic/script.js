// ////////////////////// //
// ///// Basic Ex 1 ///// //
// ////////////////////// //

let submitBtn = document.querySelector('#submit');
let foolName = document.querySelector('#fool_name');


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
  } else if (firstName.length > 5) {
      foolName.style.color = 'green';
  } else {
    foolName.style.color = 'red';
  }
}

submitBtn.addEventListener('click', displayName)


