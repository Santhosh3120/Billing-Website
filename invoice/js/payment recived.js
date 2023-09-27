

/**************************payment recived js************************************ */


var dropdownBtnpay = document.getElementById('dropdownBtnpay');
var dropdownBtn1pay = document.getElementById('dropdownBtn1pay');
var dropdownContentpay = document.getElementById('dropdownContentpay');
var dropdownContpay = document.getElementById('dropdownContpay');


dropdownBtnpay.addEventListener('click', function() {
  if (dropdownContentpay.style.display === 'none') {
    dropdownContentpay.style.display = 'block';
    dropdownContentpay.style.display = 'grid';
  
    
    
}
else {
    dropdownContentpay.style.display = 'none';

    
}
});
window.addEventListener('click', function(event) {
    if (!dropdownBtnpay.contains(event.target) && !dropdownContentpay.contains(event.target)) {
      dropdownContentpay.style.display = 'none';
     
     
    }
  });
/*********************************************************************** */
dropdownBtn1pay.addEventListener('click', function() {
    if (dropdownContpay.style.display === 'none') {
        dropdownContpay.style.display = 'block';
        dropdownContpay.style.display = 'grid';
    }
    else {

      dropdownContpay.style.display = 'none';
    }
  });

window.addEventListener('click', function(event) {
  if (!dropdownBtn1pay.contains(event.target) && !dropdownContpay.contains(event.target)) {
   
    dropdownContpay.style.display = 'none';
  }
});





