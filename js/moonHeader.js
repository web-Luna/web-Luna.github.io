let moon = document.getElementById("moon");
var time = 0;
moon.style.display=
setInterval(function(){
    time++;
    moon.style.top= 45-Math.sqrt(time*2)+"px";
    moon.style.left =((window.innerWidth/2)-200+time+"px");
    if(time==340){
        time = 0;
    }
},50);