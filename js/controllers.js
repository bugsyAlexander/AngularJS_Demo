// namespace
var myApp = angular.module("myApp", []);

myApp.controller("MyController", function MyController($scope) {
	$scope.author = {
		"name": "Bugsy Alexander",
		"title": "Developer",
		"company": "Rich Media LLC"
	}
});