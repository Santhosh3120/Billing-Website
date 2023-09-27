
/**************************items js************************************ */


var dropdownBtnitem = document.getElementById('dropdownBtnitem');
var dropdownBtn1item = document.getElementById('dropdownBtn1item');
var dropdownContentitem = document.getElementById('dropdownContentitem');
var dropdownContitem = document.getElementById('dropdownContitem');

dropdownBtnitem.addEventListener('click', function() {
  if (dropdownContentitem.style.display === 'none') {
    dropdownContentitem.style.display = 'block';
    dropdownContentitem.style.display = 'grid';
    
    
}
else {
    dropdownContentitem.style.display = 'none';
    
}
});
window.addEventListener('click', function(event) {
    if (!dropdownBtnitem.contains(event.target) && !dropdownContentitem.contains(event.target)) {
      dropdownContentitem.style.display = 'none';
     
    }
  });

dropdownBtn1item.addEventListener('click', function() {
    if (dropdownContitem.style.display === 'none') {
        dropdownContitem.style.display = 'block';
        dropdownContitem.style.display = 'grid';
    }
    else {

      dropdownContitem.style.display = 'none';
    }
  });

window.addEventListener('click', function(event) {
  if (!dropdownBtn1item.contains(event.target) && !dropdownContitem.contains(event.target)) {
   
    dropdownContitem.style.display = 'none';
  }
});





  






