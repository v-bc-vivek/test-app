var app = angular.module('testApp',[]);

app.controller('mainController',['$scope','makemodellistService',function($scope,makemodellistService){
	//$scope.name = "vivek";
	
   

}])
app.directive('dropdowns', ["makemodellistService",
 function(makemodellistService){
	return {
         restrict: 'E',
        templateUrl:"select.html",
        link: function ($scope,elm,attrs) {
        	console.log("innn")
        	makemodellistService.getmakemodellist().then(function(res){
		    	$scope.makemodellist = res.data[0].data;
		    })
        	//alert(JSON.stringify(attrs));

		
        }
    }
}]);
app.service('makemodellistService',['$q','$http',
	function($q,$http) {
	this.getmakemodellist = function() {
	    
        var deferred = $q.defer();
        $http({
            method: 'GET',
            url: '/makedataList'
        }).then(function successCallback(response) {
        	console.log('response',response);
            deferred.resolve(response);
        }, function errorCallback(response) {
            deferred.resolve(response);
        });
        return deferred.promise;
	};
	
}])
