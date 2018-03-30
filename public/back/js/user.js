/**
 * Created by Jepson on 2018/3/30.
 */

$(function() {

  // 发送 ajax 请求, 获取用户数据, 渲染到页面中
  var currentPage = 1;
  var pageSize = 5;
  
  // 页面一加载, 就渲染一次
  render();
  function render() {
    $.ajax({
      type: "get",
      url: "/user/queryUser",
      data: {
        page: currentPage,
        pageSize: pageSize
      },
      success: function ( data ) {
        console.log( data );
        // template( "模板id", "数据对象" );
        // 在模板中可以直接使用数据对象中的所有属性
        var htmlStr = template("userTpl", data);
        $('.main_body tbody').html( htmlStr );
      
      
        // 渲染分页
        $('#paginator').bootstrapPaginator({
          // bootstrap使用的版本
          bootstrapMajorVersion: 3,
          currentPage: data.page, //当前页
          totalPages: Math.ceil( data.total / data.size ), //总页数
          size: "small",
          onPageClicked:function(a, b, c, page){
            currentPage = page;
            render();
          }
        })
      }
    });
  }

  
});
