

/**************************index js************************************ */

var dropdownBtn = document.getElementById('dropdownBtn');
var dropdownContent = document.getElementById('dropdownContent');
var dropdownBtn1 = document.getElementById('dropdownBtn1');
var dropdownCont = document.getElementById('dropdownCont');
var dropdownBtn2 = document.getElementById('dropdownBtn2');
var dropdownCont2 = document.getElementById('dropdownCont2');


/************************fiscal year 1st******************** */
dropdownBtn.addEventListener('click', function() {
  if (dropdownContent.style.display === 'none') {
    dropdownContent.style.display = 'block';
    dropdownContent.style.display = 'flex';
   
    
    
}
else {
    dropdownContent.style.display = 'none';
    
}
});
window.addEventListener('click', function(event) {
    if (!dropdownBtn.contains(event.target) && !dropdownContent.contains(event.target)) {
      dropdownContent.style.display = 'none';
     
    }
  });

/*****************************fiscal year 2nd****************************************** */


dropdownBtn1.addEventListener('click', function() {
    if (dropdownCont.style.display === 'none') {
        dropdownCont.style.display = 'block';
        dropdownCont.style.display = 'flex';
      
    }
    else {

      dropdownCont.style.display = 'none';
    }
  });

window.addEventListener('click', function(event) {
  if (!dropdownBtn1.contains(event.target) && !dropdownCont.contains(event.target)) {
   
    dropdownCont.style.display = 'none';
  }
});


/**************************New************************************* */



dropdownBtn2.addEventListener('click', function() {
    if (dropdownCont2.style.display === 'none') {
        dropdownCont2.style.display = 'block';
        dropdownCont2.style.display = 'flex';
      
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




/************************project unbilled expenses and projects***************************** */


const xBox = document.getElementById('x');
const yBox = document.getElementById('y');



xBox.addEventListener('click', function() {
  yBox.classList.add('trychange');
  xBox.classList.remove('trychange');
});

yBox.addEventListener('click', function() {
  xBox.classList.add('trychange');
  yBox.classList.remove('trychange');
  yBox.classList.remove('y1');

});


