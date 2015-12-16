var f = angular.module('factories', []);
f.factory('profilesFactory',['$http', function ($http){
	var baseUrl = 'http://localhost:8888'
	return{
		get_all_profiles : function (){
			return $http.get(baseUrl+'/api/v1/profiles');
		},
		get_profile : function (id){
			return $http.get(baseUrl+'/api/v1/profile/',
			{ 
				params:{profileId:id}
			});
		},
		post_profile : function (profile){
			return $http({
				method: 'POST',
				url : baseUrl+'/api/v1/profiles',
				data:profile,
				headers : { 'Content-Type': 'application/json' }
			});
		},
		put_profile : function (profile){
			return $http({
				method: 'PUT',
				url : baseUrl+'/api/v1/profile',
				data:profile,
				headers : { 'Content-Type': 'application/json' }
			});
		},
		remove_profile : function (profileId){
			return $http.delete(baseUrl+'/api/v1/profile',
			{ 
				params:{profileId:profileId}
			});
		},
	}
}]);
