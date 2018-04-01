/**
 * Created by Jepson on 2018/4/2.
 */
require.config({
  baseUrl: "/back",
  paths: {
    "jquery": "lib/jquery/jquery.min",
    "bootstrap": "lib/bootstrap/js/bootstrap.min",
    "bootstrapValidator": "lib/bootstrap-validator/js/bootstrapValidator.min",
    "nprogress": "lib/nprogress/nprogress",
    "template": "lib/artTemplate/template-web",
    "bootstrap-paginator": "lib/bootstrap-paginator/bootstrap-paginator.min",
    "echarts": "lib/echarts/echarts.min",
    "jquery.ui.widget": "./lib/jquery-fileupload/jquery.ui.widget",
    "jquery.fileupload": "./lib/jquery-fileupload/jquery.fileupload"
  },
  shim: {
    // 配置 bootstrap
    "bootstrap": {
      // 配置依赖项 jquery
      deps: ["jquery"]
    },
    // 配置 bootstrapValidator
    "bootstrapValidator": {
      deps: ["bootstrap"]
    },
    "bootstrap-paginator": {
      deps: ["bootstrap"]
    },
    "jquery.fileupload": {
      deps: ["jquery"]
    },
    // 配置导出项
    "nprogress": {
      exports: "NProgress"
    }
  }
});
