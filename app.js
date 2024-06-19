(function () {
    'use strict';

    angular.module('LunchCheck', [])
        .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];
    function LunchCheckController($scope) {
        $scope.list = "";
        $scope.msg = "";

        $scope.check = function () {
            if ($scope.list.trim() === "") {
                $scope.msg = "Please enter data first";
                return;
            }

            var items = $scope.list.split(',').filter(function (item) {
                return item.trim() !== "";
            });

            if (items.length <= 3) {
                $scope.msg = "Enjoy!";
            } else {
                $scope.msg = "Too much!";
            }
        };
    }
})();
