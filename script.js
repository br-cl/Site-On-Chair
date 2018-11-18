var next = document.getElementById("nextPicture");
var prev = document.getElementById("prevPicture");

var li = document.querySelectorAll(".slider li");
var numberImg = 0;

li[numberImg].className = 'visible';


next.addEventListener("click", function (i) {
   
    
    li[numberImg].classList.remove("visible");
    
    numberImg++;
    if (numberImg >= li.length) {
        numberImg = 0;
    }
   li[numberImg].classList.add('visible');


})

prev.addEventListener("click", function (i) {
    li[numberImg].classList.remove("visible");
    numberImg--;
    if (numberImg < 0) {
        numberImg = li.length -1 ;
    }
    li[numberImg].classList.add('visible');
})
