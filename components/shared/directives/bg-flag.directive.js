// (function () {
//     'use strict';

//     angular
//         .module ('core')
//         .directive ('bg-flag', bgFlag);

//     bgFlag.$inject = ['$window'];

//     function bgFlag($window) {
//         // Usage:
//         //     <directive></directive>
//         // Creates:
//         //
//         var directive = {
//             link: link,
//             restrict: 'EA'
//         };
//         return directive;

//         function link(scope, element, attrs) {
//             var url = attrs.bgFlag;
//             element.css({
//                 'background-image':'url(' + url + ')'
//             });
//         };
//     };

// })();