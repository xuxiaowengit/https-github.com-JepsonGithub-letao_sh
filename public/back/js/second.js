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
  };
  
  
  // 添加分类功能
  // 1. 点击添加分类按钮, 显示模态框
  $('#addBtn').click(function() {
    $('#addSecondModal').modal();
    
    // 2. 请求一级分类列表数据
    $.ajax({
      type: "get",
      url: "/category/queryTopCategoryPaging",
      data: {
        page: 1,
        pageSize: 1000
      },
      success: function( data ) {
        console.log(data);
        var htmlStr = template( "dropdownTpl", data );
        $('#dropdownMenu').html( htmlStr );
      }
    })
  });
  
  
  
  // 3. 注册一级分类列表点击事件
  $('#dropdownMenu').on("click", "a", function() {
    var selectText = $(this).text();
    var id = $(this).data("id");
    // 设置文本内容
    $('#dropdownText').text( selectText );
    // 设置选择的一级分类id
    $('[name="categoryId"]').val( id );
  });
  
  
  // 4. 文件上传控件初始化
  $('#fileUpload').fileupload({
    dataType: "json",
    // 上传图片的回调函数
    done: function( e, data ) {
      var picUrl = data.result.picAddr;
      // 设置下面的图片路径, 让图片可以显示
      $('#imgBox img').attr("src", picUrl);
      // 设置 picUrl 给隐藏域, 用于表单提交
      $('[name="brandLogo"]').val(picUrl);
    }
  });
  
  
  // 5. 表单校验功能
  // $('#form')

});
