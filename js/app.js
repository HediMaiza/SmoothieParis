'use strict';

var smoothie = angular.module('smoothieApp', ['uiGmapgoogle-maps']);

smoothie.controller('MainController', ['$scope', function ($scope) {
    $scope.titre = 'Smooth à Paris';
    $scope.apropos = 'A Propos';
    $scope.contactR = 'Contacter le responsable :';
    $scope.numeroTel = 'maiza.mohamed[a]gmail.com';
    $scope.chargement = 'Veuillez patienter pendant le chargement de la carte...';
    $scope.rights = 'SmoothieParis - Tous droits réservés - 2015';
}]);

// BTN DANS HEADER
smoothie.directive('customButton', function () {
  return {
    restrict: 'A',
    replace: true,
    transclude: true,
    template: '<a href="#" ng-click="toggle = !toggle" class="fright btn myawesomebutton" ng-transclude>' +
                '</a>',
    link: function (scope, element, attrs) {
    }
  };
});

// GOOGLE MAP
/*
smoothie.controller('MapController', function ($scope) {
        $scope.map = {center: {latitude: 48.86, longitude: 2.35}, zoom: 13 };
        $scope.options = { scrollwheel: false};

        var image = "http://maps.google.com/mapfiles/ms/icons/blue-dot.png";

        $scope.marker = {
            id: 0,
            coords: {latitude:48.86,longitude:2.35},
            show: false,
            //icon: image,
            options: {draggable:false}
        };

        $scope.windowOptions = {
            visible: false
        };

        $scope.onClick = function() {
            $scope.windowOptions.visible = !$scope.windowOptions.visible;
        };
        $scope.closeClick = function() {
            $scope.windowOptions.visible = false;
        };
        
        $scope.title = "La boutique ...";

});
*/

// GOOGLE MAP TEST 2

smoothie.controller('MapController', function ($scope) {
    angular.extend($scope, {
    map: {
        center: {
            latitude: 48.86,
            longitude:2.35
        },
        zoom: 13,
        markersr: [
            {
                id: 100,
                latitude:  48.87,
                longitude:2.3655,
                nameB:"coco1",
            },
            {
                id: 101,
                latitude:  48.832,
                longitude:2.3655,
                nameB:"coco2",
            },    
            {
                id: 102,
                latitude:  48.833,
                longitude:2.39,
                nameB:"coco3",
            }, {
                id: 103,
                latitude:   48.825,
                longitude:2.33,
                nameB:"coco4",
            }, {
                id: 104,
                latitude:  48.887,
                longitude:2.308,
                nameB:"coco5",
            }
        ],
        dynamicMarkers: []
        },
        options: {scrollwheel:false}
        // Pas de scroll souris au survol car il faut pouvoir descendre plus bas, zoom/dezoom sur tools GoogleMap

        });

        $scope.windowOptions = {
            visible: false
        };
        $scope.onClick = function() {
            $scope.windowOptions.visible = !$scope.windowOptions.visible;
        };
        $scope.closeClick = function() {
            $scope.windowOptions.visible = false;
        };
        $scope.title = "Juice";
});