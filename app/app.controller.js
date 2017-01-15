(function() {
    'use strict';

    angular
        .module('app')
        .controller('AppController', AppController);

    AppController.$inject = ['AppService'];
    function AppController(AppService) {
        var vm = this;
        vm.calcCircleArea = calcCircleArea;
        vm.radius = 0;
        vm.result = 0;

        function calcCircleArea() {
            vm.result = AppService.calcCircleArea(vm.radius);
        }
    }
})();
