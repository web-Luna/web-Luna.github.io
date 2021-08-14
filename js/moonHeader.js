let moon = document.getElementById("moon");
var time = 0;
moon.style.display=
setInterval(function(){
    time++;
    moon.style.top= 46+"px";
    moon.style.left =((window.innerWidth/2)-200+time+"px");
    if(time==340){
        time = 0;
    }
},100);