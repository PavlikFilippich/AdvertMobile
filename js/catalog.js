let $f="";
let $titles="";
const $btnCat= document.querySelector('#header-left');
const $btnExit= document.querySelector('#header-right');


$(function() {
    $.getJSON('catalog.json', function(data) {
      $.each(data.catalog, function(i, category) {
        let $tblRow = $(
          "<div class=block><img src="+category.img+"><p>"+category.title+"</p><div>"
        );
  
        $tblRow.on('click', function(e){
            $f=category;
            window.location ='furniture.html?param='+category.title;    
        });
        $tblRow.appendTo("#catalog");
      });
    });
  });

  $(function() {  
        $("#header-right").on('click', function(e){
            window.location ='index.html';    
        });
        $("#header-left").on('click', function(e){
          window.location ='catalog.html';    
      });
  });

  $(function() {
    $.getJSON('catalog.json', function(data) {
      $.each(data.catalog, function(i, category) {
      const get = window.location.search;
      test=decodeURI(get.substr(7));
        if (test==category.title){ 
        const detail= category.details;  
        const image =detail.images;      
        const $furnitures = $(
          "<h2>"+category.title+"</h2><p class=row>Тип:"+detail.type +
          "</p><p class=row>Категория:"+category.category +
          "</p><p class=row>Производитель:"+detail.create +
          "</p><p class=row>Страна:"+detail.country +
          "</p><p class=row>Материал:"+detail.material +
          "</p><p class=row> Длинна:"+detail.length +
          "</p> <p class=row>Ширина:"+detail.width +
          "</p><p class=price>Цена:"+category.price+"</p>"
        );
        const $slidere=$(
          "<li><img src="+image.one+"></li><li><img src="+image.two+"></li><li><img src="+image.three+"></li><li><img src="+image.four+"></li>"
        )
        $furnitures.appendTo("#right");
        $slidere.appendTo("#sliders");


        }
      });
      $(function() {
         var slideCount =  $(".slider ul li").length;
         var slideWidth =  $(".slider ul li").width();
         var slideHeight =  $(".slider ul li").height();
         var slideUlWidth =  slideCount * slideWidth;
         
         $(".slider").css({"max-width":slideWidth, "height": slideHeight});
         $(".slider ul").css({"width":slideUlWidth, "margin-left": - slideWidth });
         $(".slider ul li:last-child").prependTo($(".slider ul"));
         
         function moveLeft() {
           $(".slider ul").stop().animate({
             left: + slideWidth
           },700, function() {
             $(".slider ul li:last-child").prependTo($(".slider ul"));
             $(".slider ul").css("left","");
           });
         }
         
         function moveRight() {
           $(".slider ul").stop().animate({
             left: - slideWidth
           },700, function() {
             $(".slider ul li:first-child").appendTo($(".slider ul"));
             $(".slider ul").css("left","");
           });
         }
         
         
         $(".next").on("click",function(){
           moveRight();
         });
         
         $(".prev").on("click",function(){
           moveLeft();
         });
         
         
         
       });
    });
    
  });

