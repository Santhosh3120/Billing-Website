

/**************************invoice js************************************ */



var dropdownBtnin = document.getElementById('dropdownBtnin');
var dropdownBtn1in = document.getElementById('dropdownBtn1in');
var dropdownContentin = document.getElementById('dropdownContentin');
var dropdownContin = document.getElementById('dropdownContin');


dropdownBtnin.addEventListener('click', function() {
  if (dropdownContentin.style.display === 'none') {
    dropdownContentin.style.display = 'block';
    dropdownContentin.style.display = 'grid';
    
    
}
else {
    dropdownContentin.style.display = 'none';
    
}
});
window.addEventListener('click', function(event) {
    if (!dropdownBtnin.contains(event.target) && !dropdownContentin.contains(event.target)) {
      dropdownContentin.style.display = 'none';
     
    }
  });
/*********************************************************************** */
dropdownBtn1in.addEventListener('click', function() {
    if (dropdownContin.style.display === 'none') {
        dropdownContin.style.display = 'block';
        dropdownContin.style.display = 'grid';
    }
    else {

      dropdownContin.style.display = 'none';
    }
  });

window.addEventListener('click', function(event) {
  if (!dropdownBtn1in.contains(event.target) && !dropdownContin.contains(event.target)) {
   
    dropdownContin.style.display = 'none';
  }
});
/************************************************************** */
/*
dropdownBtn2.addEventListener('click', function() {
    if (dropdownCont2.style.display === 'none') {
        dropdownCont2.style.display = 'block';
        dropdownCont2.style.display = 'grid';
    }
    else {

      dropdownCont2.style.display = 'none';
    }
  });

window.addEventListener('click', function(event) {
  if (!dropdownBtn2.contains(event.target) && !dropdownCont2.contains(event.target)) {
   
    dropdownCont2.style.display = 'none';
  }
});

  
*/




