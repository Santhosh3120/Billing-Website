
/**************************customers js************************************ */



var dropdownBtncus = document.getElementById('dropdownBtncus');
var dropdownContentcus = document.getElementById('dropdownContentcus');
var dropdownBtn1cus = document.getElementById('dropdownBtn1cus');
var dropdownContcus = document.getElementById('dropdownContcus');



dropdownBtncus.addEventListener('click', function() {
  if (dropdownContentcus.style.display === 'none') {
    dropdownContentcus.style.display = 'block';
    dropdownContentcus.style.display = 'grid';
    
   
    
    
}
else {
    dropdownContentcus.style.display = 'none';
    
}
});
window.addEventListener('click', function(event) {
    if (!dropdownBtncus.contains(event.target) && !dropdownContentcus.contains(event.target)) {
      dropdownContentcus.style.display = 'none';
     
    }
  });

/*********************************************************************** */


dropdownBtn1cus.addEventListener('click', function() {
    if (dropdownContcus.style.display === 'none') {
        dropdownContcus.style.display = 'block';
        dropdownContcus.style.display = 'grid';
      
    }
    else {

      dropdownContcus.style.display = 'none';
    }
  });

window.addEventListener('click', function(event) {
  if (!dropdownBtn1cus.contains(event.target) && !dropdownContcus.contains(event.target)) {
   
    dropdownContcus.style.display = 'none';
  }
});




