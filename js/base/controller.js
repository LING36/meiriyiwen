//控制器模块
var controllers = angular.module('controllers', []);

controllers.controller('indexCtrl', ['$scope', '$http', '$window', '$location', '$timeout', function($scope, $http, $window, $location, $timeout) {
	
	//请求数据方法
	$scope.data;
	$scope.getData = function() {
		//每日一文
		$http.get('https://interface.meiriyiwen.com/article/today?dev=1', {
			params: {}
		}).success(function(data) {
			console.log(data)
			$scope.data = data.data;
		})
	}
	$scope.getData();

	//随机一文
	$scope.randomTxt = function(){
		console.log("随机一文")
		//随机一文
		$http.get('https://interface.meiriyiwen.com/article/random?dev=1', {
			params: {}
		}).success(function(data) {
			console.log(data)
			$scope.data = data.data;
			window.scrollTo(0,0);
		})
	}
}]).controller('voiceCtrl', ['$scope', '$http', '$window', '$location', '$timeout', function($scope, $http, $window, $location, $timeout) {
	
	//请求数据方法
	$scope.dataList;
	$scope.getData = function() {
		//每日一文
		$http.get('json/voice.json', {
			params: {}
		}).success(function(data) {
			console.log(data)
			$scope.dataList = data
		})
	}
	$scope.getData();

}]).controller('showCtrl', ['$scope', '$http', '$window', '$location', '$timeout','$state','$sce', function($scope, $http, $window, $location, $timeout,$state,$sce) {
	var id = $state.params.vid
	console.log(id)
	//请求数据方法
	$scope.show;
	$scope.link;
	$scope.getData = function() {
		//每日一文
		$http.get('json/voice.json', {
			params: {}
		}).success(function(data) {
			console.log(data)
			$scope.show = data[id];
			$scope.link = $sce.trustAsResourceUrl($scope.show.link)
			console.log($scope.show);
		})
	}
	$scope.getData();

}])


