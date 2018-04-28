(function() {
    'use strict';

    angular.module('LunchCheck', [])
    .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];
    function LunchCheckController($scope) {
        $scope.lunchList = '';
        $scope.result = '';

        $scope.checkLunch = function() {
            if ($scope.lunchList === '') {
                $scope.result = 'Please enter data first';
                return;
            }
            var lunchItems = $scope.lunchList.split(',');
            // empty strings are considered a lunch item
            $scope.result = lunchItems.length <= 3 ? 'Enjoy' : 'Too much!';
        };
    }
})();