$(function (){
    skrollr.init();

    // 햄버거 메뉴
    $(".hamNav").click(function (){
        $(this).toggleClass("active");
        $(".menu").stop().slideToggle(300);
    });

    // 윈도우 리사이즈
    $(window).resize(function (){
        var width = $(this).width();
        // console.log(width);

        if(width > 960){
            $('.menu').css({"display":"flex"});
        } else {
            $('.menu').css({"display":"block"});
            $('.menu').hide();
        }
    });

    // 네비게이션
    $("#nav").each(function (){
        var header = $(this);
        var headerOffset = header.offset().top;
        
        $(window).scroll(function (){
            var wScroll = $(this).scrollTop();

            if(wScroll >= headerOffset){
                $("#nav").addClass("on");
            } else {
                $("#nav").removeClass("on");
            }
        });
    });
  
    
    var nav = $(".menu li");
    var cont = $("#contents > div");

    nav.click(function(e){
        e.preventDefault();
        var target = $(this);
        var index = target.index();
        // alert(index);
        var section = cont.eq(index);
        var offset = section.offset().top;
        $("html,body").animate({ scrollTop:offset },600);
    });

    $(window).scroll(function(){
        var wScroll = $(this).scrollTop();
        // console.log(wScroll);
        var section2 = $("#section2").offset().top - 400;
        console.log(section2);

        if(wScroll > section2){

        }
        // for(var i=0;i<6;i++){
        //     if( wScroll >= cont.eq(i).offset().top ){
        //         nav.removeClass("active");
        //         nav.eq(i).addClass("active");
        //     }
        // }
    });

    // $(window).resize(function (){
    //     var winH = $(window).height();
    //     var a = $("#contents > div");
    //     a.css({height:winH});
    //     // console.log(a);
    //     // console.log(winH);
    // });

    // $(window).trigger("resize");


    //  section4 탭 메뉴
    $('.list').click(function (){
        var filter = $(this).attr('data-filter');
        if(filter == 'all') {
            $('.itemBox').stop().show(300);
        } else {
            $('.itemBox').not('.' + filter).stop().hide(300);
            $('.itemBox').filter('.' + filter).stop().show(300);
        }

        $(this).addClass('active');
        $(this).siblings().removeClass('active');
    });
});

// preload
// window.addEventListener('load', function(){
//     const preload = document.querySelector('.preload');
//     preload.classList.add('preload-finish');
// });