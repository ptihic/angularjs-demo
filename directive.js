angular.module('demo', [])
.controller('DemoController', function($scope) {
    $scope.ctrlFlavor = 0;      
})

.directive('rnStepper', function() {
    return {
        restrict: 'AE',
        require: 'ngModel',
        scope: { flavor:'='},
        template: '<button ng-click="decrement()">-</button>' +
                  '<div>{{ value }}</div>' +
                  '<button ng-click="increment()">+</button>',
        link: function(scope, iElement, iAttrs, ngModelController) {
            ngModelController.$render = function() {
                iElement.find('div').text(ngModelController.$viewValue);
            };

           function updateModel(offset) {
                ngModelController.$setViewValue(ngModelController.$viewValue + offset);
                ngModelController.$render();
            }
           scope.decrement = function() {
                updateModel(-1);
            };
            scope.increment = function() {
                updateModel(+1);
            };
        }
    };
});