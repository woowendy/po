Splitting();

$.ajax({
        url: "typo-list.json"
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
                   <a href="${item.eventsrc}" target="${item.target}">
                    <div class="desc">
                        <h2>${item.title}</h2>
                        <p>${item.desc}</p>
                    </div>
                   </a> 
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
                var filterArray=["item", "2018","2019","2020"];
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
                time.from("h1 .char",{
                    x:100,
                    opacity:0,
                    duration:1,
                    ease:"back.out",
                    stagger:0.1,
                })
                .from("h3 .char",{
                    x:100,
                    opacity:0,
                    duration:2,
                    ease:"back.out",
                    stagger:0.1,
                })                
                .from(".filter li",{
                    x:100,
                    opacity:0,
                    duration:3,
                    ease:"back.out",
                    stagger:0.1,
                })
                .to("#main li",{
                    autoAlpha:1,
                    stagger:0.1
                });            
            });            
    });
    
$(window).on("mousemove", function(e){
console.log("e", e)
    gsap.to(".cursor",{
        x:e.clientX,
        y:e.clientY,
        duration:0.25,
        ease:"power4"
    });
    gsap.to(".cursorFollower",{
        x:e.clientX,
        y:e.clientY,
        duration:1,
        ease:"power4"
    });
});

