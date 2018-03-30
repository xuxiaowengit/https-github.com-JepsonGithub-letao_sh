/**
 * Created by Jepson on 2018/3/30.
 */

$(function() {

  // 发送 ajax 请求, 获取用户数据, 渲染到页面中
  var page = 1;
  var pageSize = 5;

  $.ajax({
    type: "get",
    url: "/user/queryUser",
    data: {
      page: page,
      pageSize: pageSize
    },
    success: function ( data ) {
      console.log( data );
      // template( "模板id", "数据对象" );
      // 在模板中可以直接使用数据对象中的所有属性
      var htmlStr = template("userTpl", data);
      $('.main_body tbody').html( htmlStr );
    }
  })
  
});
