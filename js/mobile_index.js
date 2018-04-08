window.onload = function(){
            // 第一个轮播图
    var swiper1 = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        
        });
        
        // 荣誉的轮播  
        var swiper = new Swiper('.honor', {  
            loop : true,  
            pagination: '.swiper-pagination',  
            effect: 'coverflow',  
            grabCursor: true,  
            centeredSlides: true,  
            nextButton: '.swiper-button-next',  
            prevButton: '.swiper-button-prev',  
            slidesPerView: 'auto',  
            coverflow: {  
                rotate: 0,// 旋转的角度  
                stretch: 100,// 拉伸   图片间左右的间距和密集度  
                depth: 150,// 深度   切换图片间上下的间距和密集度  
                modifier: 3,// 修正值 该值越大前面的效果越明显  
                slideShadows : false// 页面阴影效果  
            }  
        });     



        //    点石农村电商扩展
        var btn=document.querySelector("#click")
        tap(btn,function(){
           $(".none").toggle();
        })
 
        var nav=document.querySelector("#nav")
        tap(nav,function(){
           $(".nav_pop").toggle();
        })
};
