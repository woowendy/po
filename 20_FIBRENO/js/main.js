Splitting();

var happenMotion = gsap.timeline({delay:1});
var businessMotion = gsap.timeline({paused:true,delay:1});
var portfolioMotion = gsap.timeline({paused:true,delay:1});
var communityMotion = gsap.timeline({paused:true,delay:1});
var effect01 = {
    x:100,
    autoAlpha:0,
    ease:"back",
    duration:1,
    stagger:0.05
}

var effect02 = {
    x:100,
    autoAlpha:0,
    ease:"back",
    duration:1,
    stagger:0.02
}

var effect03 = {
    x:100,
    autoAlpha:0,
    ease:"back",
    duration:1,
    stagger:0.01
}

happenMotion
.from("#happen .titleBox h2 .char", effect01)
.from("#happen .titleBox p .char", effect02)
.from("#happen .iconList li", effect03);

businessMotion
.from("#business .titleBox h2 .char", effect01)
.from("#business .titleBox p .char", effect02)
.from("#business .iconList li", effect03);

portfolioMotion
.from("#portfolio .titleBox h2 .char", effect01)
.from("#portfolio .titleBox p .char", effect02)
.from("#portfolio .portfolioList li", effect03);

communityMotion
.from("#community .titleBox h2 .char", effect01)
.from("#community .titleBox p .char", effect02)
.from("#community .anchorList li", effect03);


//array 방법
var motionArray=[happenMotion,businessMotion,portfolioMotion,communityMotion]
var total=$(".section").length;
//fullpage
new fullpage("#main",{
    navigation:true,
    navigationTooltips: ["ABOUT", "SHOP", "DESIGN ARCHIVE","COMMUNITY"],
	showActiveTooltip: true,
    onLeave: function(origin, destination, direction){
    console.log("destination", destination.index)
     var idx= destination.index;
     if(idx!==total-1 && origin.index!==total-1){
        var targetMotion = motionArray[idx];
        targetMotion.restart(true);
     }
}
});

//focusout, focusin = 웹접근성 고려
var list = $("#gnb .gnbList > li");
var header = $("#header");
list.on("mouseenter focusin", function(){
    header.addClass("on");
})
list.on("mouseleave focusout", function(){
    header.removeClass("on");
});

gsap.fromTo("#popup",
    {top:-400},
    {
    top:100,
    ease:"back",
    duration:1,
    delay:1,
})

$("#popup .btnClose").on("click", function(){
    gsap.to("#popup",{
        top:-400,
        duration:1,
        ease:"back.in",
        onComplete: function(){
            $("#popup").remove();
        }
    });
});

// 하루만 보는 쿠키삽입
$("#popup .btnOneday").on("click", function(){
    Cookies.set('oneday', 'one', {expires:1});
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



