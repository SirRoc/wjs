'usb strict';
$(function() {
  function resize() {
    var windowWidth = $(window).width();
    var smallScreen = windowWidth < 768;
    var $item = $('#home_slide .item-image');
    $item.each(function(i, item) {
      var $item = $(item);
      var imgSrc = $item.data(smallScreen ? 'img-small' : 'img-large');
      var imgAlt = $item.data('img-alt');
      $item.html('<img src="' + imgSrc + '" alt="' + imgAlt + '"/>')
      $item.css('backgroundImage', 'url(' + imgSrc + ')');
    })
  }
  $(window).on('resize', resize).trigger('resize');
  // 注册tooltip
  $('[data-toggle="tooltip"]').tooltip();
  
  // // tab栏宽度适应
  // 1.获取li的宽度和
  // 2.设置溢出隐藏
  var $tab = $('.nav-tabs');
  var $tabs = $tab.children();
  var screenWidth = $(window).width();
  var width = 20;
  // 获取li的宽度和
  $tabs.each(function(i,tabs){
    width += $(tabs).width();
  })
  if(width > screenWidth){
    $tab.css('width',width);
    $tab.parent().css('overflow-x','scroll');
  }
  else{
    $tab.css('width','auto');
    $tab.parent().css('overflow-x','hidden');
  }

  //设置titile
  //1.点击图标时，把data-title的值给Get
  $('#aa').children('a').on('click',function(){
    // 获取当前的data-title属性
    var title = $(this).data('title');
    $('#Get').text(title);

  })

  
  var OFFSET = 100;
  // 1.监听左滑动操作
  $('.carousel').each(function(i,item){
  var startX,move;
  item.addEventListener('touchstart',function(e){
  startX = e.touches[0].clientX;
  e.preventDefault();
    // console.log(start)
    // return start;
  });
  item.addEventListener('touchmove',function(e){
    move = e.touches[0].clientX;
    // console.log(move);
    e.preventDefault();
  })
  item.addEventListener('touchend',function(e){
    var Threshole = move-startX;
    // console.log(Threshole);
    if(Threshole > OFFSET){
        // 上一张
        $(this).carousel('prev');
      } else if (Threshole < -OFFSET) {
        // 上一张
        $(this).carousel('next');
      }
      e.preventDefault();
    })
  })
 
  // // 2.滑动后操作
  //   // e.preventDefault();
  //   // console.log(end)
  // })
  // console.log(start);
  // 
  // console.log(a);
  // if(Threshole > width1){
  //   end>start?"you":"zuo";
  // }
  // 2.滑动后操作
  


})
