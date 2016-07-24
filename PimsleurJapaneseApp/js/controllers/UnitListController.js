(function() {
    
    var app = angular.module("pimsleur");

    var UnitListController = function($scope, $interval, $location, $http, $routeParams) {

        $scope.lid = $routeParams.lid;
        console.log($scope.lid);
        
        // $http.get( "js/data/lvl"+$scope.lid+"_data.json").success(function(data) {
        //     $scope.levelData = data;
        // });
    };
    
    app.controller("UnitListController", UnitListController);

})();