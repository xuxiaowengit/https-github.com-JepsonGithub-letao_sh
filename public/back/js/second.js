/**
 * Created by Jepson on 2018/3/31.
 */

$(function() {

  var currentPage = 1;
  var pageSize = 5;
  
  // 一进入页面就进行渲染二级分类
  render();
  function render() {
    $.ajax({
      type: "get",
      url: "/category/querySecondCategoryPaging",
      data: {
        page: currentPage,
        pageSize: pageSize
      },
      success: function( data ) {
        console.log( data )
        var htmlStr = template( "tpl", data );
        $('.main_body tbody').html( htmlStr );
        
        // 分页初始化
        $('#paginator').bootstrapPaginator({
          bootstrapMajorVersion: 3,
          currentPage: data.page,
          totalPages: Math.ceil( data.total / data.size ),
          onPageClicked: function( a, b, c, page ) {
            currentPage = page;
            render();
          }
        })
      }
    })
  }

});
