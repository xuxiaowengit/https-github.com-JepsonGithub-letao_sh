/**
 * Created by Jepson on 2018/3/31.
 */
$(function() {
  var currentPage = 1;
  var pageSize = 2;
  
  render();
  function render() {
    $.ajax({
      type: "GET",
      url: "/category/queryTopCategoryPaging",
      data: {
        page: currentPage,
        pageSize: pageSize
      },
      success: function( data ) {
        console.log(data);
        var htmlStr = template( "firstTpl", data );
        $('.main_body tbody').html( htmlStr );
        
        $('#paginator').bootstrapPaginator({
          // 指定版本号
          bootstrapMajorVersion: 3,
          // 当前页
          currentPage: data.page,
          // 总页数
          totalPages: Math.ceil( data.total / data.size ),
          onPageClicked: function( a, b, c, page ) {
            currentPage = page;
            render();
          }
        })
      }
    })
  }
})