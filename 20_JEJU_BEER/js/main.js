Splitting();

$(function () {
    $(window).scroll(function () { //화면 스크롤시 아래코드 실행.. 
        var num = $(this).scrollTop(); // 스크롤값을 가져온다. 
        if (num > 100) {
            $(".top").css("opacity", "1"); // 자연스럽게 색이 적용되는 방법으로 opacity 사용이 가능하다.

        } else {
            $(".top").css("opacity", "0");
        }
    });
});

$(document).ready(function () {
    $("html").niceScroll({
        cursorcolor: "#39bcca",
        scrollspeed: "100"
    });
});

$(function () {
    $(window).scroll(function () { //화면 스크롤시 아래코드 실행.. 
        var num = $(this).scrollTop(); // 스크롤값을 가져온다. 
        if (num > 200) {
            $("#header").css("background", "rgba(57,188,202,0.8)"); //스크롤200이상일 때 보여줌
        } else {
            $("#header").css("background", "rgba(91,119,131,0)"); //스크롤 200이하일 때 숨김.
        }
    });

    $(".info_1").on("click", function () {
        $(".info").slideToggle("fast");
    });

    $(".gnb>li>a").on("mouseover", function () {
        $(".gnb ul:visible").slideUp("fast"); // 서브메뉴 보여주기
        $(this).next().stop().slideDown("fast");
    });

    $(".gnb").on("mouseleave", function () { //마우스 접어주고나서  gnb만 해당합니다.
        $(".gnb ul:visible").slideUp("fast");
    });
    $(function () {
        var mySlider = $("#cont2 ul").bxSlider({
            mode: "horizontal",
            speed: 500,
            pager: false,
            moveSlides: 1,
            slideWidth: 260,
            minSlides: 3,
            maxSlides: 3,
            slideMargin: 35,
            auto: true,
            autoHover: true,
            controls: false
        });

        $(".prev_btn").on("click", function () {
            mySlider.goToPrevSlide();
            return false;
        });

        $(".next_btn").on("click", function () {
            mySlider.goToNextSlide();
            return false;
        });
    });
});

//top
$(document).ready(function () {
    $('.top').click(function (e) {
        $.scrollTo(this.hash || 0, 300);
        e.preventDefault();
    });
});

//popup
$(document).ready(function () {
    function setCookie(name, value, expiredays) {
        var todayDate = new Date();
        todayDate.setDate(todayDate.getDate() + expiredays);
        document.cookie = name + '=' + escape(value) + '; path=/; expires=' + todayDate.toGMTString() + ';'
    };

    $('.popup a').click(function () {
        var chk = $('#chkBox').prop('checked');
        if (chk) {
            setCookie('maindiv', 'done', 1);
        }
        $('.popup').slideUp(0);
    });

    cookiedata = document.cookie;
    if (cookiedata.indexOf('maindiv=done') < 0) {
        $('.popup').css('display', 'block');
    } else {
        $('.popup').css('display', 'none');
    }
});

//osulloc news 
var sample = new Swiper("#news .sample", {
    effect: "fade",
    fadeEffect: {
        crossFade: true
    }
});

// second
new Swiper("#news .mask", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    speed: 2000,
    centeredSlides: true,
    navigation: {
        prevEl: '#news .btnPrev',
        nextEl: '#news .btnNext'
    },
    pagination: {
        el: "#news .pagination",
        type: "fraction"
    },
    on: {
        transitionEnd: function () {
            console.log(this.realIndex);
            sample.slideToLoop(this.realIndex);
        }
    }
});

/* brand text */
$(document).ready(function () {
    $(window).scroll(function () {
        var imgTop = $('.textImg').offset().top - 300;
        var top = $(window).scrollTop();

        $('.textImg').css('left', (imgTop - top) * 2);
    });
});

/* brand text : 오른쪽으로 가게 만들기 */
$(document).ready(function () {
    $(window).scroll(function () {
        var imgTop = $('.textImg2').offset().top - 300;
        var top = $(window).scrollTop();

        $('.textImg2').css('left', (imgTop - top) * 2);
    });
});


var slogan = gsap.timeline();

slogan.from("#visual_top .slogan .main .char", {
    y:-100,
    alpha:0,
    ease: "back.out",
    duration:1,
    stagger:0.1
})

.from("#visual_top .slogan .sub .word", {
    x:100,
    autoAlpha:0,
    ease: "back.out",
    duration:1,
    stagger:0.1
})

.from("#visual_top .slogan .sub2 .word", {
    x:function(){
      return Math.random()*200-100},
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

// slick cont2
$(document).ready(function(){
    $('.con02 a').hover(function(){
        $(this).find('img:eq(1)').stop().addClass('on');
    },function(){
        $(this).find('img:eq(1)').stop().removeClass('on');

    });
});

$(document).ready(function(){
    $('.con02Wrap').slick({
        
    });
});

  jQuery(function(){
  jQuery(".gnb a").click(function(event){
    event.preventDefault();
    jQuery('html,body').animate({scrollTop:jQuery(this.hash).offset().top - 150}, 700);
  });
});

/* pick */
$(document).ready(function(){
    $('.pickWrap ul .pickfirst a, .pickWrap ul .picksecond a').click(function(){
        var txt = $(this).text();
        var select = $('<span></span>');
        var pick = $('.selectText span').size();
        var select01 = $('.selectText span:nth-child(1)');
        var select02 = $('.selectText span:nth-child(2)');
        var select03 = $('.selectText span:nth-child(3)');
        var select04 = $('.selectText span:nth-child(4)');
        
        if(pick<=3){
                select.append(txt);
                $('.selectText').append(select);
                $(this).addClass('on');
        }else{
            alert('4개까지 선택 가능합니다.')
        }
        $(this).off('click');
    });
});

// wait until DOM is ready
document.addEventListener("DOMContentLoaded", function(event) {

  function ground() {

    var tl = new TimelineMax({
      repeat: -1
    });

    tl.to("#ground", 20, {
        backgroundPosition: "1301px 0px",
        force3D:true,
        rotation:0.01,
        z:0.01,
        autoRound:false,
        ease: Linear.easeNone
      });

    return tl;
  }

  function clouds() {

    var tl = new TimelineMax({
      repeat: -1
    });

    tl.to("#clouds", 52, {
      backgroundPosition: "-2247px bottom",
      force3D:true,
      rotation:0.01,
      z:0.01,
      //autoRound:false,
      ease: Linear.easeNone
    });
    
    return tl;
  }

  var masterTL = new TimelineMax({
    repeat: -1
  });
 
window.onload = function() {
  masterTL
  .add(ground(),0)
  .add(clouds(),0)
  .timeScale(0.7)
  .progress(1).progress(0)
  .play();

};
});

// 인스타
 var swiper = new Swiper('.instaWrap .mask', {
        pagination: '.swiper-pagination',
        slidesPerView: 1,
        paginationClickable: true,
        spaceBetween: 10,
        centeredSlides: true,
        loop:true,
        navigation: {
        prevEl: '.instaWrap .btnPrev',
        nextEl: '.instaWrap .btnNext'
    }
    });

//contents3
$.ajax({
        url: "event-list.json"
    })
    .done(function (res) {
        var typoList = res.list;
        console.log(typoList[0].imgsrc);
        $.each(typoList, function (idx, item) {
            var html =
                `<li class="item ${item.type}" style="opacity:0">
                  <a href="${item.imgsrc}" data-fancybox="${item.type}">
                   <div class="imgBox">
                    <img src="${item.imgsrc}" alt="">
                   </div>
                   <div class="desc">
                    <h2>${item.title}</h2>
                    <p>${item.desc}</p>
                   </div>
                </a>
            </li>`;
            $("#main ul").append(html);
        });

        $("#main").imagesLoaded()
            .always(function (instance) {
                var grid = $("#main .list").isotope({
                    itemSelector: ".item",
                    layoutMode: "masonry"
                });
                var filterArray=["item", "typography","digital","paint"];
                $(".filter li").on("click",function(){
                    $(this).addClass("on");
                    $(this).siblings().removeClass("on");
                    var filterTxt = $(this).data("filter");
                    grid.isotope({filter:`.${filterTxt}`})
                });  
                $("#main li").on("mouseenter", function(){
                    $(".cursor").addClass("on");
                    gsap.to(".cursor",{
                        scale:5,
                        ease:"elastic",
                        duration:1
                    })
                });
                $("#main").on("mouseleave", function(){
                    $(".cursor").removeClass("on");
                    gsap.to(".cursor",{
                        scale:1,
                        ease:"elastic",
                        duration:1
                    })
                });   
                var time = gsap.timeline();
                time.from(".filter li",{
                    x:100,
                    opacity:0,
                    duration:2,
                    ease:"back.out",
                    stagger:0.1,
                })
                .to("#main li",{
                    autoAlpha:1,
                    stagger:0.1
                });            
            });            
    });

//popup
gsap.fromTo("#popup",
    {top:-400},
    {
    top:100,
    ease:"back",
    duration:1,
    delay:1
})
$("#popup .btnClose").on("click",function(){
    gsap.to("#popup",{
        top:-400,
        duration:1,
        ease:"back.in",
        onComplete:function(){
            $("#popup").remove();
        }
    })
});

$("#popup .btnOneday").on("click",function(){
    Cookies.set("oneday", "one", { expires: 1 });
    gsap.to("#popup",{
        top:-400,
        duration:1,
        ease:"back.in",
        onComplete:function(){
            $("#popup").remove();
        }
    })
});

if(Cookies.get("oneday")==="one") {
    $("#popup").remove();
} else {
    $("#popup").show();
}
$("#footer .tel").on("click",function(){
    Cookies.remove("oneday");
})
