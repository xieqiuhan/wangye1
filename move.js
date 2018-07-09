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
function startMove(obj,arrt,iTarget,fnEnd)
{
    clearInterval(obj.timer);


    obj.timer=setInterval(function()
    {
        var cur=0;
        if(arrt=='opacity')
        {
            cur=Math.round(parseFloat(getStyle(obj,arrt))*100);

        }
        else
        {
            cur=parseInt(getStyle(obj,arrt));
        }

        var speed=(iTarget-cur)/6;
        speed=speed>0?Math.ceil(speed):Math.floor(speed);
        if(cur==iTarget)
        {
            clearInterval(obj.timer);
            if(fnEnd)fnEnd();
        }
        else
        {
            if(arrt=='opacity')

            {
                obj.style.filter='alpha(opacity:'+(cur+speed)+')';
                obj.style.opacity=(cur+speed)/100;
            }
            obj.style[arrt]=cur+speed+'px';
        }

    },30);
}
