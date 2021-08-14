let moon = document.getElementById("moon");
var time = 0;
setInterval(function(){
    time++;
    moon.style.left =((window.innerWidth/2)-200+time+"px");
    if(time==340){
        time = 0;
    }
},100);