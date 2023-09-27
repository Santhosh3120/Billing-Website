


/*new add icon click open and close line 451*//*
function myfun(){
  var divs =document.querySelector(".new-add");
  divs.classList.toggle("show")
}
window.onclick=function(event){
  if(!event.target.matches("#clicks"))
  {
    var removeshow =document.querySelector(".new-add");
    if(removeshow.classList.contains("show"))
    {
      removeshow.classList.remove("show");
    }
  }
};



function myfun2(){
  var divs2 =document.querySelector(".new-add-2");
  divs2.classList.toggle("show-2")
}
window.onclick=function(event){
  if(!event.target.matches("#clicks-2"))
  {
    var removeshow2 =document.querySelector(".new-add-2");
    if(removeshow2.classList.contains("show-2"))
    {
      removeshow2.classList.remove("show-2");
    }
  }
};



function myfun3(){
  var divs3 =document.querySelector(".new-add-3");
  divs3.classList.toggle("show-3")
}
window.onclick=function(event){
  if(!event.target.matches("#clicks-3"))
  {
    var removeshow3 =document.querySelector(".new-add-3");
    if(removeshow3.classList.contains("show-3"))
    {
      removeshow3.classList.remove("show-3");
    }
  }
};




/*search nav bar *//*

function myfun4(){
  var divs4 =document.querySelector(".search-down");
  divs4.classList.toggle("show-4")
}
window.onclick=function(event){
  if(!event.target.matches("#clicks-4"))
  {
    var removeshow4 =document.querySelector(".search-down");
   /* var i;
    for (i = 0; i < dropdowns.length; i++){
      var removeshow4 = dropdowns[i];*//*
    if(removeshow4.classList.contains("show-4"))
    {
      removeshow4.classList.remove("show-4");
   /* }*//*
  }}
};








function myfun5(){
  var divs5 =document.querySelector(".new-add-4");
  divs5.classList.toggle("show-5")
}
window.onclick=function(event){
  if(!event.target.matches("#clicks-5"))
  {
    var removeshow5 =document.querySelector(".new-add-4");
    if(removeshow5.classList.contains("show-5"))
    {
      removeshow5.classList.remove("show-5");
    }
  }
};


/* add dropdown bar*//*
function myfun7(){
  var divs7 =document.querySelector(".dropDown-content");
  divs7.classList.toggle("show-7")
}
window.onclick=function(event){
  if(!event.target.matches("#clicks-7"))
  {
    var removeshow7 =document.querySelector(".dropDown-content");
    if(removeshow7.classList.contains("show-7"))
    {
      removeshow7.classList.remove("show-7");
    }
  }
};



/*line590 sec_six *//*
$(document).ready(function(){
  $(".ch-six2").click(function(){
    $(".ch-six1").css({"background-color":"rgb(231, 231, 231)" , "border-bottom" : "none" }).show();
   
  });
  $(".ch-six1").click(function(){
    $(".ch-six2").css({"background-color":"rgb(231, 231, 231)" , "border-bottom" : "none" }).show();
  });

});





/*line 363 top reminder icon*//*
$(".remind").on("click",function(){
  $(".notify_background").toggleClass("active");
  return false
});
$(".remind-off").on("click",function(){
  $(".notify_background").removeClass("active");
})
$("body").click( function(){
  $(".notify_background").removeClass("active");
});
*/

/*-----------------------------------------------*/





/*line 141 top profile icon*//*
$(".myacc").on("click",function(){
  $(".set").toggleClass("active2");
  return false
});
$(".set-off").on("click",function(){
  $(".set").removeClass("active2")
});
$("body").click( function(){
  $(".set").removeClass("active2");
})*/
;




/*line 141 top settings icon*//*
$(".sett").on("click",function(){
  $(".set").toggleClass("active1");
  return false
});
$(".set-off").on("click",function(){
  $(".set").removeClass("active1")
});
$("body").click( function(){
  $(".set").removeClass("active1");
})
;*/
/*
const remin =document.querySelector(".remind");
const body =document.body;

remin.addEventListener("click",() => {
  body.classList.toggle("notify_background");
});
*/



/*nav bar click open and close

 function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
  document.body.style.backgroundColor = "rgba(0,0,0,0.6)";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
  document.body.style.backgroundColor = "white";
}*/