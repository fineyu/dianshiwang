function tap(dom,callBack){  
    //第一不能超过延时时间，第二不能使移动  
    //获取一些必要的值开始时间，延时时间，是否是移动  
        var startTime=0;  
        var delayTime=200;  
        var isMove=false;  
        dom.addEventListener("touchstart",function(event){  
            //记录开始时间  
            startTime=Date.now();  
        });  
        dom.addEventListener("touchmove",function(event){  
            //如果发生了移动就改变isMove的值  
            isMove=true;  
        });  
        dom.addEventListener("touchend",function(event){  
            //如果发生了移动就不执行回调  
            if(isMove) return;  
            //如果大于延时时间就不执行回调函数  
            if(Date.now()-startTime>delayTime) return;  
            callBack(event);  
      
        });  
      
      
    }  