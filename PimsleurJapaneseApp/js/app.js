(function () {
    var app = angular.module("pimsleur", ["ngRoute"]);
    app.config(function ($routeProvider) {
        $routeProvider
            .when("/level/:lid", {
                templateUrl: "views/unitList.html",
                controller: "UnitListController"
            })
            .otherwise({ redirectTo: "/level/1" });
    });
} ());