(function () {
    var app = angular.module("pimsleur", ["ngRoute"]);
    app.config(function ($routeProvider) {
        $routeProvider
            .when("/level/:lid", {
                templateUrl: "views/unitList.html",
                controller: "UnitListController"
            })
            .when("/level/:lid/:lsn", {
                templateUrl: "views/lesson.html",
                controller: "LessonController"
            })
            .otherwise({ redirectTo: "/level/1" });
    });
} ());