var next = document.getElementsByClassName("last-row");
var prev = document.getElementsByClassName("first-row");

var li = document.querySelectorAll(".sliders li");
var numberImg = 0;

li[numberImg].classList.add('visible');

for(var i = 0 ; i < next.length ; i++){
    next[i].addEventListener("click", function (i) {   
    
        li[numberImg].classList.remove("visible");
        
        numberImg++;
        if (numberImg >= li.length) {
            numberImg = 0;
        }
       li[numberImg].classList.add('visible');
    
    
    })
    
}
for(var i = 0 ; i < next.length ; i++){
    prev[i].addEventListener("click", function (i) {
        li[numberImg].classList.remove("visible");
        numberImg--;
        if (numberImg < 0) {
            numberImg = li.length -1 ;
        }
        li[numberImg].classList.add('visible');
    })
    
}
