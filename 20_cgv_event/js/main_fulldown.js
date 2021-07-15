// tab 사용
// $("#gnb .list > li").on("mouseenter focusin", function(){
//     $("#header").addClass("on");
// });

// $("#gnb .list > li").on("mouseleave focusout", function(){
//     $("#header").removeClass("on");
// });


$("#gnb .list > li").on("mouseenter", function(){
    $("#header").addClass("on");
});

$("#gnb .list > li").on("mouseleave", function(){
    $("#header").removeClass("on");
});

