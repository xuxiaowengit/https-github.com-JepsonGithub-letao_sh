/**
 * Created by Jepson on 2018/3/29.
 */

// 1. 等待页面加载完成
// 2. 防止全局变量污染
$(function() {
  
  /*
   * 1. 校验表单
   * 要求:
   *   1. 用户名不能为空, 且长度 2-6 位
   *   2. 密码不能为空, 密码的长度为 6-12 位
   * */
  $("form").bootstrapValidator({
    
    // 配置校验字段
    fields: {
      // 校验用户名
      username: {
        // 校验规则
        validators: {
          
          // 非空校验
          notEmpty: {
            message: "用户名不能为空"
          },
          // 长度校验
          stringLength: {
            min: 2,
            max: 6,
            message: "用户名长度必须是2-6位"
          }
          
        }
      },
      // 校验密码
      password: {
        validators: {
          
          notEmpty: {
            message: "用户名不能为空"
          },
          stringLength: {
            min: 6,
            max: 12,
            message: "密码长度必须是6-12位"
          }
          
        }
      }
    },
    
    // 配置小图标
    feedbackIcons: {
      valid: 'glyphicon glyphicon-ok',
      invalid: 'glyphicon glyphicon-remove',
      validating: 'glyphicon glyphicon-refresh'
    }
    
  });

});
