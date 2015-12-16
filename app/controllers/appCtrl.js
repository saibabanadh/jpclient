
var app = angular.module('jobportal', ['ngRoute', 'factories']);

app.controller('indexCtrl', ['$scope', 'profilesFactory', function($scope, profilesFactory) {
	angular.element(document).ready(function(){
		get_profiles();
	});
	function get_profiles(){
		profilesFactory.get_all_profiles()
			.success(function(profiles){
				$scope.profiles = profiles;
			})
			.error(function(error){
				$scope.error = error;
			});
	}

}]);
app.config(function($routeProvider) {
	$routeProvider
	.when('/', {
		controller: 'indexCtrl',
		templateUrl: '/app/views/_index.html'
	})
	.otherwise({
		redirectTo:'/'
	});
});


