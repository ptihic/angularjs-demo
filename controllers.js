var phonecatApp = angular.module('phonecatApp', []);
phonecatApp.controller('PhoneListCtrl', function($scope) {
	$scope.phones = [{
		'name':'Nexus S',
		'snippet':'Fast just got faster with Nexus S.'
	},
	{
		'name':'Motoroal XOOM with Wi-Fi',
		'snippet':'The Next,Next Generation tablet.'
	},
	{
		'name':'Motoroal XOOM ',
		 'snippet':'The Next,Next Generation tablet.'
	}];
});
