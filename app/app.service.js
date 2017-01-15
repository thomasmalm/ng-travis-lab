(function() {
    'use strict';

    angular
        .module('app')
        .factory('AppService', AppService);

    function AppService() {
        return {
            calcCircleArea: calcCircleArea
        };

        function calcCircleArea(radius) {
            return Math.round(radius * radius * Math.PI);
        }
    }
})();
