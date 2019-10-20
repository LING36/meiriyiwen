//定义angular程序的主模块，第一个参数是主模块的名字，跟ng-app绑定，第二个参数是引入其他子模块
var app = angular.module('yiwenApp', ['ng.post', 'routers', 'directives', 'controllers', 'services']);

//定义过滤器解析html标签
app.filter('to_html', ['$sce', function($sce) {
	return function(text) {
		return $sce.trustAsHtml(text);
	};
}])