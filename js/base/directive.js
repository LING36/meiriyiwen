//组件的模块//jq代码写在组件里
var directives = angular.module('directives', []);
directives.directive('footer', function() { //首页
	return {
		templateUrl: 'directive/footer.html',
	}
})