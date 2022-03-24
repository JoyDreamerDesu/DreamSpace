'use strict';

const navbarToggle = () => {
const nav = document.querySelector('.mainnav');
nav.classList.toggle('toggleShow');
}
document.querySelector('.fa-bars').addEventListener('click', navbarToggle);


// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

//Ikke udfyldte fælter i form//
function validateForm() {
    var x = document.forms["myForm"]["name"].value;
    if (x == "" || x == null) {
      alert("Hov! Du mangler at udfylde et eller flere felter.");
      return false;
    }
    var x = document.forms["myForm"]["email"].value;
    if (x == "" || x == null) {
      alert("Hov! Du mangler at udfylde et eller flere felter.");
      return false;
    }
    var x = document.forms["myForm"]["message"].value;
    if (x == "" || x == null) {
      alert("Hov! Du mangler at udfylde et eller flere felter.");
      return false;
    }
}