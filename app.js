const app = angular.module('app', [])
app.factory('jQuery', function ($window) {
    return $window.jQuery
})
app.factory('jQueryTips', function (jQuery) {
    return jQuery.tips
})

app.directive('tips', function (jQuery, jQueryTips) {
    return {
        restrict: 'A',
        link: function ($scope, $element, $attrs) {
            jQueryTips({
                element: jQuery($element[0])
            })
        }
    }
})