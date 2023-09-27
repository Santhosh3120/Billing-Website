
/**************************expenses js************************************ */


var dropdownBtnexp = document.getElementById('dropdownBtnexp');
var dropdownBtn1exp = document.getElementById('dropdownBtn1exp');
var dropdownContentexp = document.getElementById('dropdownContentexp');
var dropdownContexp = document.getElementById('dropdownContexp');


dropdownBtnexp.addEventListener('click', function() {
  if (dropdownContentexp.style.display === 'none') {
    dropdownContentexp.style.display = 'block';
    dropdownContentexp.style.display = 'grid';
 
    
    
}
else {
    dropdownContentexp.style.display = 'none';
   
    
}
});
window.addEventListener('click', function(event) {
    if (!dropdownBtnexp.contains(event.target) && !dropdownContentexp.contains(event.target)) {
      dropdownContentexp.style.display = 'none';
     
     
    }
  });
/*********************************************************************** */
dropdownBtn1exp.addEventListener('click', function() {
    if (dropdownContexp.style.display === 'none') {
        dropdownContexp.style.display = 'block';
        dropdownContexp.style.display = 'grid';
    }
    else {

      dropdownContexp.style.display = 'none';
    }
  });

window.addEventListener('click', function(event) {
  if (!dropdownBtn1exp.contains(event.target) && !dropdownContexp.contains(event.target)) {
   
    dropdownContexp.style.display = 'none';
  }
});





