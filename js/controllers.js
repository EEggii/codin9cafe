angular.module('codin9cafe.controllers', [])
.controller('mainCtrl', function($scope, $state){
	console.log('main init')
	$scope.main = true;
})

.controller('homeCtrl', function($scope, $stateParams){
	console.log("home init!", $stateParams.main)
	$scope.main = $stateParams.main;
	console.log($scope.main)
	// $scope.main = false;
})