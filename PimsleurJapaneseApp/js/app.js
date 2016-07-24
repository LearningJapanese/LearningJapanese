(function () {
    var app = angular.module("pimsleur", ["ngRoute"]);
    app.config(function ($routeProvider) {
        $routeProvider
            .when("/list", {
                templateUrl: "views/unitList.html",
                controller: "UnitListController"
            })
            .when("/level/:lid/:lsn", {
                templateUrl: "views/lesson.html",
                controller: "LessonController"
            })
            .otherwise({ redirectTo: "/list" });
    });
} ());