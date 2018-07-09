function getStyle(obj,name)
{
    if(obj.currentStyle)
    {
        return obj.currentStyle[name];
    }
    else
    {
        return getComputedStyle(obj,null)[name];
    }
}

function startMove(obj,json,fnEnd)
{
    clearInterval(obj.timer);

    obj.timer = setInterval(function () {
        var bStop=true;//假设所有值都到了
       for(var arrt in json) {
           var cur = 0;
           if (arrt == 'opacity') {
               cur = Math.round(parseFloat(getStyle(obj, arrt)) * 100);

           }
           else {
               cur = parseInt(getStyle(obj, arrt));
           }

           var speed = (json[arrt] - cur) / 6;
           speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
           if(cur !=json[arrt])
               bStop=false;

           if (arrt == 'opacity')
           {
               obj.style.filter = 'alpha(opacity:' + (cur + speed) + ')';
               obj.style.opacity = (cur + speed) / 100;
           }
           else
           {
               obj.style[arrt] = cur + speed + 'px';
           }
       }
       if(bStop)
       {
           clearInterval(obj.timer);
           if(fnEnd)
               fnEnd();
       }

    }, 30);
}