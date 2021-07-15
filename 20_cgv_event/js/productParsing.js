$.ajax({
    url: "product.json?page1",
})

.done(function(res){
    console.log(res.productList[0].name);
    let product = res.productList;
    $.each(product,function(index,item){
        let name= item.name;
        let price= item.price;
        let stock= item.stock;
        $(".product ul").append(`<li><span class="title">${name}</span><span class="price">${price}</span>
        <span class="stock">${stock}</span></li>`);
    })
});

// 예제
// $.ajax({
//     url:"../html/product.json",
//     dataType:'json',
//     success:function(data){
//         var str = '';
//         for(var name in data){
//             str += '<li>'+data[name]+'</li>';
//         }
//         $('#timezones').html('<ul>'+str+'</ul>');
//     }
// })