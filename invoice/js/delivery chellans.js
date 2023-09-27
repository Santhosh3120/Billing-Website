

/**************************delivery challan js************************************ */


var dropdownBtndeli = document.getElementById('dropdownBtndeli');
var dropdownBtn1deli = document.getElementById('dropdownBtn1deli');
var dropdownContentdeli = document.getElementById('dropdownContentdeli');
var dropdownContdeli = document.getElementById('dropdownContdeli');

dropdownBtndeli.addEventListener('click', function() {
  if (dropdownContentdeli.style.display === 'none') {
    dropdownContentdeli.style.display = 'block';
    dropdownContentdeli.style.display = 'grid';
    
    
}
else {
    dropdownContentdeli.style.display = 'none';
    
}
});
window.addEventListener('click', function(event) {
    if (!dropdownBtndeli.contains(event.target) && !dropdownContentdeli.contains(event.target)) {
      dropdownContentdeli.style.display = 'none';
     
    }
  });
/*********************************************************************** */
dropdownBtn1deli.addEventListener('click', function() {
    if (dropdownContdeli.style.display === 'none') {
        dropdownContdeli.style.display = 'block';
        dropdownContdeli.style.display = 'grid';
    }
    else {

      dropdownContdeli.style.display = 'none';
    }
  });

window.addEventListener('click', function(event) {
  if (!dropdownBtn1deli.contains(event.target) && !dropdownContdeli.contains(event.target)) {
   
    dropdownContdeli.style.display = 'none';
  }
});




  












