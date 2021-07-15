// var= 표현식 | 선언식일 때 사용 순서사용 중요
// 밑에 쓰지않고 위에 써야하지만 그냥 되버림. 자바스크립트가 알아서 위로 올림
// let imgSearch = function() => {} < 이렇게 쓰고 위로 올려라 그게 베스트
// function 함수선언식 아래쪽에 있어도 상관없지만

//page 선언
let page = 1;

function imgSearch() {
    //$("#thumbs ul li").remove; 같음
    //검색 변수처리 val 하나만쓰면 받아옴
    //&size=10 추가 10개만 보여줘라
    //&sort=recency 추가 최신순으로 보여줘라
    let searchWorld = $("#imgSearch").val();
    $.ajax({
            url: `https://dapi.kakao.com/v2/search/image?query=${searchWorld}&size=40&page=${page}`,
            headers: {
                "Authorization": "KakaoAK a79811acade3754199617e345d82022f"
            }
        })
        .done(function (res) {
            console.log("res", res);
            var imgList = res.documents;
            let total = imgList.length;
            //console.log("total", total);
            //jquery 배열의 반복문을 제공 = $.each()
            //imgList 반복하고 콜백함수로 인덱스,아이템 찾아라
            $.each(imgList, function (index, item) {
                // 사진
                let thumbnail = item.thumbnail_url;
                // 사진 let thumbnail = item.thumbnail_url;
                //   let tag = <li><a href=""><img src="'+thumbnail+'" alt=""></a></li>
                // 사진 let big = item.image_url; 
                let big = item.image_url;
                let tag = `<li class="page${page} result${index}"><a data-fancybox="gallery" href="${big}"><img src="${thumbnail}" alt=""></a></li>`;
                $("#thumbs ul").append(tag);
            });

            gsap.from(`#thumbs ul li.page${page}`, {
                opacity: 0,
                stagger: 0.1
            });

            // 사진검색 후 보여주기
            //$("#thumbs .btnMore").show();
            // 계속 더 보기가 나타남
            //$("#thumbs").append(`<div class="btns"><button class="btnMore">더보기 <i class="xi-long-arrow-down"></i></button></div>`);

            //if($("thumbs .btnMore").length<1){
            //$("#thumbs").append(`<div class="btns"><button class="btnMore">더보기 <i class="xi-long-arrow-down"></i></button></div>`);
            //}
        });
}

// 검색 btn
$(".searchBox .btn").on("click", function () {
    $("#thumbs ul").html("");
    imgSearch();
});

//mouseenter
//어떤걸눌러야하는지 알아야되니까 e 추가
$("#imgSearch").on("keyup", function (e) {
    $("#thumbs ul").html("");
    if (e.keyCode === 13) {
        imgSearch();
    }
});
  
//더보기 버튼 바디에 넣기 + selector + event 위임 
$("body").on("click", "#thumbs .btnMore", function () {
    page++;
    imgSearch();
    console.log("click")
});

// 윈도우 높이값이 문제?
$(window).on("scroll", function () {
    if ($(window).scrollTop() + $(window).height() >= $(document).height()) {
        page++;
        console.log("page", page)
        imgSearch();
    };
});

//스크롤 강제로 막기
// $('html, body').css({'overflow': 'hidden', 'height': '100%'});
// $('#element').on('scroll touchmove mousewheel', function(event) {
//   event.preventDefault();
//   event.stopPropagation();
//   return false;
// });

//스크롤 해제하기
//$('#element').off('scroll touchmove mousewheel');