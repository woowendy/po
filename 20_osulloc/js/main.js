        $(function() {
            $(window).scroll(function() { //화면 스크롤시 아래코드 실행.. 
                var num = $(this).scrollTop(); // 스크롤값을 가져온다. 
                if (num > 100) {
                    $(".top").css("opacity", "1"); // 자연스럽게 색이 적용되는 방법으로 opacity 사용이 가능하다.

                } else {
                    $(".top").css("opacity", "0");
                }
            });
        });
		
		 $(document).ready(function() {
                $("html").niceScroll({
                    cursorcolor: "#526e3b",
                    scrollspeed: "100"
                });
            });

        $(function() {
            $(window).scroll(function() { //화면 스크롤시 아래코드 실행.. 
                var num = $(this).scrollTop(); // 스크롤값을 가져온다. 
                if (num > 200) {
                    $("#header").css("background", "rgba(91,119,131,1)"); //스크롤200이상일 때 보여줌
                } else {
                    $("#header").css("background", "rgba(91,119,131,0)"); //스크롤 200이하일 때 숨김.
                }
            });

            $(".gnb>li>a").on("mouseover", function() {
                $(".gnb ul:visible").slideUp("fast"); // 서브메뉴 보여주기
                $(this).next().stop().slideDown("fast");
            });

            $(".gnb").on("mouseleave", function() { //마우스 접어주고나서 gnb만 해당합니다.
                $(".gnb ul:visible").slideUp("fast");
            });
            $(function() {
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

                $(".prev_btn").on("click", function() {
                    mySlider.goToPrevSlide();
                    return false;
                });

                $(".next_btn").on("click", function() {
                    mySlider.goToNextSlide();
                    return false;
                });
            });
        });

        //top
        $(document).ready(function() {
            $('.top').click(function(e) {
                $.scrollTo(this.hash || 0, 300);
                e.preventDefault();
            });
        });

        //popup
        $(document).ready(function(){
            function setCookie(name, value, expiredays) {  
                var todayDate = new Date();
                todayDate.setDate( todayDate.getDate() + expiredays );
                document.cookie = name + '=' + escape( value ) + '; path=/; expires=' + todayDate.toGMTString() + ';'
            };

            $('.popup a').click(function(){
                var chk = $('#chkBox').prop('checked');
                if(chk){ 
                    setCookie('maindiv','done',1);
                }
                $('.popup').slideUp(0);
            });

            cookiedata = document.cookie;
            if(cookiedata. indexOf('maindiv=done') < 0 ){   
                $('.popup').css('display','block');  
            }else{                                  
                $('.popup').css('display','none');  
            }
        });

        //osulloc news 
        var sample = new Swiper("#news .sample",{
            effect:"fade",
            fadeEffect: {
                crossFade: true
            }
        });

        // second
        new Swiper("#news .mask",{
            slidesPerView :1,
            spaceBetween:20,
            loop:true,
            speed:2000,
            centeredSlides:true,
            navigation: {
                prevEl: '#news .btnPrev',
                nextEl: '#news .btnNext'
            },
            pagination: {
                el: "#news .pagination",
                type: "fraction"
            },
            on: {
                transitionEnd:function(){
                       console.log(this.realIndex);
                       sample.slideToLoop(this.realIndex);
                }
              }    
        });

        /* brand text */
        $(document).ready(function(){
            $(window).scroll(function () {
                var imgTop = $('.textImg').offset().top-300;
                var top = $(window).scrollTop();

                $('.textImg').css('left',(imgTop-top)*2);
            });
        });

        /* brand text : 오른쪽으로 가게 만들기 */
        $(document).ready(function(){
            $(window).scroll(function () {
                var imgTop = $('.textImg2').offset().top-300;
                var top = $(window).scrollTop();

                $('.textImg2').css('left',(imgTop-top)*2);
            });
        });
