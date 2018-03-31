/**
 * Created by Jepson on 2018/3/31.
 */

$(function() {

  var currentPage = 1;
  var pageSize = 2;
  var imgArr = [];
  
  render();
  function render() {
    $.ajax({
      type: "get",
      url: "/product/queryProductDetailList",
      data: {
        page: currentPage,
        pageSize: pageSize
      },
      success: function( data ) {
        console.log(data);
        var htmlStr = template( "productTpl", data );
        $('.main_body tbody').html( htmlStr );
        
        // 分页初始化
        $('#paginator').bootstrapPaginator({
          bootstrapMajorVersion: 3,
          currentPage: data.page,
          totalPages: Math.ceil( data.total / data.size ),
          onPageClicked: function( a, b, c, page ) {
            currentPage = page;
            render();
          },
          // 配置分页item的文本
          itemTexts: function( type, page, current ) {
            switch ( type ) {
              case "next":
                return "下一页";
              case "prev":
                return "上一页";
              case "last":
                return "尾页";
              case "first":
                return "首页";
              default:
                return page;
            }
          },
          // 配置提示框信息
          tooltipTitles: function( type, page, current ) {
            switch ( type ) {
              case "next":
                return "下一页";
              case "prev":
                return "上一页";
              case "last":
                return "尾页";
              case "first":
                return "首页";
              default:
                return "前往第" + page + "页";
            }
          },
          useBootstrapTooltip: true
        })
      }
    });
  };
  
  
  
  // 1. 点击按钮显示模态框
  $('#addBtn').click(function() {
    // 显示模态框
    $('#addProductModal').modal();
    
    // 请求二级分类
    $.ajax({
      type: "get",
      url: "/category/querySecondCategoryPaging",
      data: {
        page: 1,
        pageSize: 1000
      },
      success: function( data ) {
        console.log( data )
        var htmlStr = template( "dropdownTpl", data );
        $('#dropdownMenu').html( htmlStr );
      }
    });
  });
  
  
  // 2. 通过委托给 a 设置点击事件
  $('#dropdownMenu').on("click", "a", function() {
    // 获取 id
    var id = $(this).data("id");
    var selectText = $(this).text();
    // 设置内容
    $("#dropdownText").text( selectText );
    // 设置 id 给隐藏域
    $('[name="brandId"]').val(id);
  });
  
  // 3. 图片上传
  $('#fileUpload').fileupload({
    dataType: "json",
    done: function( e, data ) {
      console.log( data.result );
      // 由于上传图片接口, 需要 picName1 图片名称 picAddr1 图片地址...
      var imgObj = data.result;
      
      // 请求, 必须上传 3 张图片
      if ( imgArr.length >= 3 ) {
        // 删除最老的
        imgArr.shift();
        // 删除最老的图片, 找到最后一个 img 元素, 自杀
        $('#imgBox img:last-of-type').remove();
      }
      
      // 将上传的图片, 渲染到页面中
      $("#imgBox").prepend('<img src="' + imgObj.picAddr + '" width="100" height="100" alt="">')
      imgArr.push( imgObj );
  
      console.log(imgArr);
    }
  })
  
})
