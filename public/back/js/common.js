/**
 * Created by Jepson on 2018/3/29.
 */

// 禁用小环环
NProgress.configure({ showSpinner: false });

// ajax 开始
$( document ).ajaxStart(function() {
  // 进度条加载效果
  NProgress.start();
});

// ajax 结束
$( document ).ajaxStop( function() {
  // 模拟网络延迟
  setTimeout(function() {
    // 进度条关闭
    NProgress.done();
  }, 500);
});


// 二级分类显示隐藏效果
$('.aside_category').click(function() {
  $(this).next().stop().slideToggle();
});


// 菜单栏隐藏效果
$('.icon_menu').click(function() {
  $('.aside').toggleClass("menuchange");
  $(".main").toggleClass("menuchange");
});
