/************************************timesheet all************************************ */






var dropdownBtntymall = document.getElementById('dropdownBtntymall');
var dropdownContenttymall = document.getElementById('dropdownContenttymall');
var dropdownBtn1tymall = document.getElementById('dropdownBtn1tymall');
var dropdownConttymall = document.getElementById('dropdownConttymall');
var dropdownBtn2tymall = document.getElementById('dropdownBtn2tymall');
var dropdownCont2tymall = document.getElementById('dropdownCont2tymall');


dropdownBtntymall.addEventListener('click', function() {
  if (dropdownContenttymall.style.display === 'none') {
    dropdownContenttymall.style.display = 'block';
    dropdownContenttymall.style.display = 'grid';  
}
else {
    dropdownContenttymall.style.display = 'none';
   
    
}
});
window.addEventListener('click', function(event) {
    if (!dropdownBtntymall.contains(event.target) && !dropdownContenttymall.contains(event.target)) {
      dropdownContenttymall.style.display = 'none';
     
     
    }
  });

  
/*********************************************************************** */
dropdownBtn1tymall.addEventListener('click', function() {
    if (dropdownConttymall.style.display === 'none') {
        dropdownConttymall.style.display = 'block';
        dropdownConttymall.style.display = 'grid';
    }
    else {

      dropdownConttymall.style.display = 'none';
    }
  });

window.addEventListener('click', function(event) {
  if (!dropdownBtn1tymall.contains(event.target) && !dropdownConttymall.contains(event.target)) {
   
    dropdownConttymall.style.display = 'none';
  }
});


/*********************************************************************** */
dropdownBtn2tymall.addEventListener('click', function() {
    if (dropdownCont2tymall.style.display === 'none') {
        dropdownCont2tymall.style.display = 'block';
        dropdownCont2tymall.style.display = 'grid';
    }
    else {

      dropdownCont2tymall.style.display = 'none';
    }
  });

window.addEventListener('click', function(event) {
  if (!dropdownBtn2tymall.contains(event.target) && !dropdownCont2tymall.contains(event.target)) {
   
    dropdownCont2tymall.style.display = 'none';
  }
});