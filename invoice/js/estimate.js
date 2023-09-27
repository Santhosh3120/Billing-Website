

/**************************estimate js************************************ */

var dropdownBtnesti = document.getElementById('dropdownBtnesti');
var dropdownBtn1esti = document.getElementById('dropdownBtn1esti');
var dropdownBtn2esti = document.getElementById('dropdownBtn2esti');
var dropdownContentesti = document.getElementById('dropdownContentesti');
var dropdownContesti = document.getElementById('dropdownContesti');
var dropdownCont2esti = document.getElementById('dropdownCont2esti');

dropdownBtnesti.addEventListener('click', function() {
  if (dropdownContentesti.style.display === 'none') {
    dropdownContentesti.style.display = 'block';
    dropdownContentesti.style.display = 'grid';
    
    
}
else {
    dropdownContentesti.style.display = 'none';
    
}
});
window.addEventListener('click', function(event) {
    if (!dropdownBtnesti.contains(event.target) && !dropdownContentesti.contains(event.target)) {
      dropdownContentesti.style.display = 'none';
     
    }
  });
/*********************************************************************** */
dropdownBtn1esti.addEventListener('click', function() {
    if (dropdownContesti.style.display === 'none') {
        dropdownContesti.style.display = 'block';
        dropdownContesti.style.display = 'grid';
    }
    else {

      dropdownContesti.style.display = 'none';
    }
  });

window.addEventListener('click', function(event) {
  if (!dropdownBtn1esti.contains(event.target) && !dropdownContesti.contains(event.target)) {
   
    dropdownContesti.style.display = 'none';
  }
});
/*************************************************************** */
dropdownBtn2esti.addEventListener('click', function() {
    if (dropdownCont2esti.style.display === 'none') {
        dropdownCont2esti.style.display = 'block';
        dropdownCont2esti.style.display = 'grid';
    }
    else {

      dropdownCont2esti.style.display = 'none';
    }
  });

window.addEventListener('click', function(event) {
  if (!dropdownBtn2esti.contains(event.target) && !dropdownCont2esti.contains(event.target)) {
   
    dropdownCont2esti.style.display = 'none';
  }
});



  





