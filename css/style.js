
//ハンバーガーメニュー
$(".hmb_btn").click(function () {//ボタンがクリックされたら
	$(this).toggleClass('active');//ボタン自身に activeクラスを付与し
    $("#hmb_menu").toggleClass('panelactive');//ナビゲーションにpanelactiveクラスを付与
});

$("#hmb_menu a").click(function () {//ナビゲーションのリンクがクリックされたら
    $(".hmb_btn").removeClass('active');//ボタンの activeクラスを除去し
    $("#hmb_menu").removeClass('panelactive');//ナビゲーションのpanelactiveクラスも除去
});


//トップ画像フワッとスライド
function slideSwitch() {
   var $active = $('#slideshow img.active');

   if ( $active.length == 0 ) $active = $('#slideshow img:last');

   var $next =  $active.next().length ? $active.next()
      : $('#slideshow img:first');

   $active.addClass('last-active');

   $next.css({opacity: 0.0})
      .addClass('active')
      .animate({opacity: 1.0}, 1000, function() {
           $active.removeClass('active last-active');
      });
}

$(function() {
   setInterval( "slideSwitch()", 5000 );
});


//スクロールしたらフワッと表示
   jQuery(window).scroll(function (){
    jQuery(".fade").each(function(){
      var winheight = jQuery(window).height();
      var posi = jQuery(this).offset().top;
      var scroll = jQuery(window).scrollTop();
      if (scroll + winheight > posi){
        jQuery(this).addClass("fadein");
      } else {
        jQuery(this).removeClass("fadein");
      }
    });
   });
 