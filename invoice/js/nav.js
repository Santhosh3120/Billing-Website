
var dropdownBtn3 = document.getElementById('dropdownBtn3');
var dropdownCont3 = document.getElementById('dropdownCont3');
var dropdownBtn4 = document.getElementById('dropdownBtn4');
var dropdownCont4 = document.getElementById('dropdownCont4');
var dropdownBtn5 = document.getElementById('dropdownBtn5');
var dropdownCont5 = document.getElementById('dropdownCont5');





/***************************time clock************************************ */

dropdownBtn3.addEventListener('click', function() {
    if (dropdownCont3.style.display === 'none') {
        dropdownCont3.style.display = 'block';
        dropdownCont3.style.display = 'flex';
      
    }
    else {

        dropdownCont3.style.display = 'none';
    }
});

window.addEventListener('click', function(event) {
    if (!dropdownBtn3.contains(event.target) && !dropdownCont3.contains(event.target)) {
        
        dropdownCont3.style.display = 'none';
    }
});

/************************input search button***************************** */

dropdownBtn4.addEventListener('click', function() {
    if (dropdownCont4.style.display === 'none') {
        dropdownCont4.style.display = 'block';
        
        
    }
    else {
        
        dropdownCont4.style.display = 'none';
    }
});

window.addEventListener('click', function(event) {
    if (!dropdownBtn4.contains(event.target) && !dropdownCont4.contains(event.target)) {
        
        dropdownCont4.style.display = 'none';
    }
});


/************************Top add icon button***************************** */

dropdownBtn5.addEventListener('click', function() {
    if (dropdownCont5.style.display === 'none') {
        dropdownCont5.style.display = 'block';
        
        
    }
    else {
        
        dropdownCont5.style.display = 'none';
    }
});

window.addEventListener('click', function(event) {
    if (!dropdownBtn5.contains(event.target) && !dropdownCont5.contains(event.target)) {
        
        dropdownCont5.style.display = 'none';
    }
});



/************************Top reminder icon button***************************** */





const dropdownBtn6 = document.getElementById('dropdownBtn6');
const notify_background = document.getElementById('notify_background');
const closeBtnn = document.getElementById('closeBtnn');
const overlay = document.getElementById('overlay');

dropdownBtn6.addEventListener('click', function(e) {
  e.stopPropagation();
  notify_background.classList.add('active');
  overlay.style.display = 'block';
});

closeBtnn.addEventListener('click', function(e) {
  e.stopPropagation();
  notify_background.classList.remove('active');
  overlay.style.display = 'none';
});

window.addEventListener('click', function() {
notify_background.classList.remove('active');
  overlay.style.display = 'none';
});

/************************Top reminder icon button***************************** */



const dropdownBtn7 = document.getElementById('dropdownBtn7');
const set = document.getElementById('set');


dropdownBtn7.addEventListener('click', function(e) {
  e.stopPropagation();
  set.classList.add('active');
  overlay.style.display = 'block';
});

closeBtnn.addEventListener('click', function(e) {
  e.stopPropagation();
  set.classList.remove('active');
  overlay.style.display = 'none';
});

window.addEventListener('click', function() {
set.classList.remove('active');
  overlay.style.display = 'none';
});



/************************Top reminder icon button***************************** */



const dropdownBtn8 = document.getElementById('dropdownBtn8');
const my_account = document.getElementById('my_account');


dropdownBtn8.addEventListener('click', function(e) {
  e.stopPropagation();
  my_account.classList.add('active');
  overlay.style.display = 'block';
});

closeBtnn.addEventListener('click', function(e) {
  e.stopPropagation();
  my_account.classList.remove('active');
  overlay.style.display = 'none';
});

window.addEventListener('click', function() {
my_account.classList.remove('active');
  overlay.style.display = 'none';
});



/************************Top reminder icon button***************************** */



const dropdownBtn9 = document.getElementById('dropdownBtn9');
const account_right_all = document.getElementById('account_right_all');


dropdownBtn9.addEventListener('click', function(e) {
  e.stopPropagation();
  account_right_all.classList.add('active');
  overlay.style.display = 'block';
});

closeBtnn.addEventListener('click', function(e) {
  e.stopPropagation();
  account_right_all.classList.remove('active');
  overlay.style.display = 'none';
});

window.addEventListener('click', function() {
account_right_all.classList.remove('active');
  overlay.style.display = 'none';
});



/************************Top search input hover then down bar also hover***************************** */
/*
const hover1 = document.getElementById('hover1');
const hover2 = document.getElementById('hover2');

hover1.addEventListener('mouseenter', function() {
  hover2.classList.add('hover-effect');
});

hover1.addEventListener('mouseleave', function() {
  hover2.classList.remove('hover-effect');
});*/


