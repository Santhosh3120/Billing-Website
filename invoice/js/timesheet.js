
/************************************timesheet project************************************ */


var dropdownBtntympro = document.getElementById('dropdownBtntympro');
var dropdownContenttympro = document.getElementById('dropdownContenttympro');
var dropdownBtn1tympro = document.getElementById('dropdownBtn1tympro');
var dropdownConttympro = document.getElementById('dropdownConttympro');
var dropdownBtn2tympro = document.getElementById('dropdownBtn2tympro');
var dropdownCont2tympro = document.getElementById('dropdownCont2tympro');


dropdownBtntympro.addEventListener('click', function() {
  if (dropdownContenttympro.style.display === 'none') {
    dropdownContenttympro.style.display = 'block';
    dropdownContenttympro.style.display = 'grid';  
}
else {
    dropdownContenttympro.style.display = 'none';
   
    
}
});
window.addEventListener('click', function(event) {
    if (!dropdownBtntympro.contains(event.target) && !dropdownContenttympro.contains(event.target)) {
      dropdownContenttympro.style.display = 'none';
     
     
    }
  });
/*********************************************************************** */
dropdownBtn1tympro.addEventListener('click', function() {
    if (dropdownConttympro.style.display === 'none') {
        dropdownConttympro.style.display = 'block';
        dropdownConttympro.style.display = 'grid';
    }
    else {

      dropdownConttympro.style.display = 'none';
    }
  });

window.addEventListener('click', function(event) {
  if (!dropdownBtn1tympro.contains(event.target) && !dropdownConttympro.contains(event.target)) {
   
    dropdownConttympro.style.display = 'none';
  }
});


/*********************************************************************** */
dropdownBtn2tympro.addEventListener('click', function() {
    if (dropdownCont2tympro.style.display === 'none') {
        dropdownCont2tympro.style.display = 'block';
        dropdownCont2tympro.style.display = 'grid';
    }
    else {

      dropdownCont2tympro.style.display = 'none';
    }
  });

window.addEventListener('click', function(event) {
  if (!dropdownBtn2tympro.contains(event.target) && !dropdownCont2tympro.contains(event.target)) {
   
    dropdownCont2tympro.style.display = 'none';
  }
});





