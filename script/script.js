$(function (){
    skrollr.init();

    // 햄버거 메뉴
    $(".hamNav").click(function (){
        $(this).toggleClass("active");
        $("#nav").toggleClass("active");
        $(".menu").stop().slideToggle(300);
    });

    // 윈도우 리사이즈
    $(window).resize(function (){
        var width = $(this).width();
        // var height = $(document).height();
        $("#nav .hamNav").removeClass('active');
        $("#nav").removeClass('active');
        // console.log(height);
        // console.log(width);

        if(width > 960){
            $('#nav .menu').css({"display":"flex"});
            $('#nav .menu li a').css({"color":"#a577c7"});
        } else {
            $('#nav .menu').css({"display":"block"});
            $('#nav .menu li a').css({"color":"#fff"});
            $('#nav .menu').hide();
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

    // $("#nav").mouseover(function(){
    //     $(this).addClass('active');
    // });

    // $("#nav").mouseout(function(){
    //     $(this).removeClass('active');
    // });
  
    
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
        var s1 = $("#section1").offset().top - 400;
        var s2 = $("#section2").offset().top - 400;
        var s3 = $("#section3").offset().top - 400;
        var s4 = $("#section4").offset().top - 400;
        var s5 = $("#section5").offset().top - 400;

        // 각 section 애니메이션 구현
        if(wScroll > s1){
            $(".scrollTop").addClass("active");
        }
        if(wScroll > s2){
            $("#section2 > .inner").animate({"left":'0'},1500);
        }
        if(wScroll > s3){
            $(".skill_box > div").addClass("active");
            $("#section3 > .inner").animate({"opacity":"1"});
        }
        if(wScroll > s4){
            $(".itemBox").addClass("active");
            $(".product .itemBox").stop().animate({"opacity":"0"});
        }
        if(wScroll > s5){
            $("#section5 > .inner").animate({"left":'0'},1500);
        }
        if(wScroll > 2400){
            $(".starBox").addClass("active");
            $(".meteor").addClass("active");
        } else {
            $(".starBox").removeClass("active");
            $(".meteor").removeClass("active");
            $(".scrollTop").removeClass("active");
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
    
    // 별 나타내기
    // let len = $(".starBox .star").length;
    for(let k=0;k<20;k++){
        let ramWH = randomNum(20,45);
        $(".starBox").append("<span class='star' data-0='top:100%;'></span>");
        $(".starBox .star").eq(k).css({"transform":"translate(" + randomNum(-950,950) + "px, " + randomNum(-60,-450) + "px)"});
        $(".starBox .star").eq(k).css({"width": + ramWH + "px","height" : + ramWH + "px"});
        // $(".starBox .star").eq(k).css({"animation" : "bling 1s " + a +"s infinite forwards"});
    }

    // 스크롤 탑 버튼
    $(".scrollTop").click(function (){
        console.log(top);
        $("html,body").animate({scrollTop:0}, 1000);
    });
});

// preload
// window.addEventListener('load', function(){
//     const preload = document.querySelector('.preload');
//     preload.classList.add('preload-finish');
// });

function randomNum(min, max){ 
    var randNum = Math.floor(Math.random()*(max-min+1)) + min; 
    return randNum; 
}

