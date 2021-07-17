    //nipple
    $(document).ready(function() {
        try {
            $('.drop_box').ripples({
                resolution: 512,
                dropRadius: 20, 
                perturbance: 0.04,
            });
        }
        catch (e) {
            $('.error').show().text(e);
        }
        $('.js-ripples-disable').on('click', function() {
            $('.drop_box').ripples('destroy');
            $(this).hide();
        });
        $('.js-ripples-play').on('click', function() {
            $('.drop_box').ripples('play');
        });
        $('.js-ripples-pause').on('click', function() {
            $('.drop_box').ripples('pause');
        });
    });  


  $(function(){
        //ic_menu
        $(".ic_menu").on("click",function(){
        $("#menu").animate({marginLeft:"100%"},500);
        $(".black_back").css("display","block");
        });
        $(".close, .black_back").on("click",function(){
        $("#menu").animate({marginLeft:"-100%"},500);
        $(".black_back").css("display","none");
        });
		
        //top
		$(window).scroll(function(){ 
        var num=$(this).scrollTop(); 
            if(num>100){
                $(".pc_top") .css("opacity","1"); 
            }else{
                $(".pc_top") .css("opacity","0");
                }
        });
	});

   //nicescroll
   $(document).ready(function() {
            $("html").niceScroll({
                cursorcolor: "#0011ff",
                scrollspeed: "100"
            });
        }
    );

    //slide
    $(document).ready(function(){
        //mainSlide 
        var swiper01 = new Swiper('.mainSlide .swiper-container', {
            loop: true,
            autoplay: {
            delay: 2500,
            disableOnInteraction: false,
            },
            navigation: {
                nextEl: '.mainSlide .swiper-button-next',
                prevEl: '.mainSlide .swiper-button-prev',
            },
        });
        var swiper02 = new Swiper('.event .swiper-container', {
          slidesPerView: 1,
          centeredSlides: true,
          spaceBetween: 0,
            loop: true,
            autoplay:false,
            disableOnInteraction: true,
            navigation: {
                nextEl: '.proSlide .swiper-button-next',
                prevEl: '.proSlide .swiper-button-prev',
            },             
          breakpoints: {
            768: {
                slidesPerView: 3,
                centeredSlides: true,
                spaceBetween: 0, 
            }  
          }           
        });
     });

    //top
    $(document).ready(function(){
          $('.top, .pc_top, #gnb a, .logo, .footer_menu a, .gnb a').click(function(e){
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