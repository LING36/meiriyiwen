//路由的模块，记得引入ui.router模块
var routers = angular.module('routers', ['ui.router']);
routers.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
	$stateProvider.state('index', { //首页
		//state函数第一个参数，是表达路由关系，嵌套关系，如果有多层就用点连接
		//url:锚点后面要加的路由名字
		url: '/index',
		controller: 'indexCtrl',
		templateUrl: 'template/index.html'
	}).state('voice', {//声音
		url: '/voice',
		controller: 'voiceCtrl',
		templateUrl: 'template/voice.html'
	}).state('show', { 
		url: '/show/:vid',
		controller: 'showCtrl',
		templateUrl: 'template/show.html'
	}).state('about', { 
		url: '/about',
		controller: 'aboutCtrl',
		templateUrl: 'template/about.html'
	})

	//默认进入的路由页面
	$urlRouterProvider.when('', '/index')
}])