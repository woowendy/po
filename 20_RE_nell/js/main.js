// JavaScript Document

Splitting();

$(function () {
    /*gnb*/
    $(".gnb>li>a").on("mouseover", function () {
        $(".gnb ul:visible").slideUp("fast");
        $(this).next().stop().slideDown("fast");
    });
    $(".gnb").on("mouseleave", function () {
        $(".gnb ul:visible").slideUp("fast");
    });
    //ic_menu
    $(".ic_menu").on("click", function () {
        $("#ic_menu_list").slideToggle("fast");
    });
    
});

$(function () {
//scroll
$(window).scroll(function(){
    var num=$(this).scrollTop();
        if(num>120){
            $("#sns_side").css("left","0px");
        }else{
            $("#sns_side").css("left","-45px");
        };
});
            
// gnb    
  $(".gnb>li>a").on("mouseover",function(){ 
	 $(".gnb>li>a").css("color","#000"); //대메뉴
	 $(".gnb ul:visible").slideUp("fast"); // 서브메뉴 보여주기
	 
	 $(this).css("color","#000"); //대메뉴
	 $(this).next().stop().slideDown("fast"); 
  });

 $(".gnb").on("mouseleave",function(){ //마우스 접어주고나서  gnb만 해당합니다.
  $(".gnb>li>a").css("color","#000");
	 $(".gnb ul:visible").slideUp("fast");
   });
   $("#spinner-form").on("click",function(){
	 $("#m_box").slideToggle("fast");  
   });
            $(document).ready(function() {

                $("html").niceScroll({
                    cursorcolor: "#000",
                    scrollspeed: "100"
                });
            });
            
        });

// sns_side
$(document).ready(function () {
    $('#sns_side li:nth-child(4), .sns li:nth-child(4)').click(function (e) {
        $.scrollTo(this.hash || 0, 300);
        e.preventDefault();
    });
});

var slogan = gsap.timeline();

slogan.from("#chuck .slogan .main .char", {
    y:-100,
    alpha:0,
    ease: "back.out",
    duration:1,
    stagger:0.1
})

.from("#chuck .slogan .sub .word", {
    x:100,
    autoAlpha:0,
    ease: "back.out",
    duration:1,
    stagger:0.1
})

// 팝업 효과
gsap.fromTo("#popup", 
    {top:-400},
    {
    top:100,
    ease:"back",
    duration:1,
    delay:1,
})

// 팝업 닫기
$("#popup .btnClose").on("click", function(){
    gsap.to("#popup",{
        top:-400,
        duration:1,
        ease:"back.in",
        onComplete:function(){
            $("#popup").remove();
        }
    });
});

$("#popup .btnOneday").on("click",function(){
    Cookies.set('oneday', 'one', { expires: 1 });
    gsap.to("#popup",{
        top:-400,
        duration:1,
        ease:"back.in",
        onComplete:function(){
            $("#popup").remove();
        }
    });
});

if (Cookies.get("oneday")==="one"){
    $("#popup").remove();
} else {
    $("#popup").show();
}
