'use strict';

var smoothie = angular.module('smoothieApp', ["google-maps"]);

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

/* GOOGLE MAP 2
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
*/

//function MainController ($scope, $http, $filter) {
    smoothie.controller('MainController', function ($scope, $http, $filter) {
  $http.get('json/map-data.json').success(function(data) {
    $scope.places = data;
    $scope.markersProperty = data;
    $scope.filteredMarkersProperty = $scope.markersProperty;

    var cats = [];
        for (var i = 0; i < data.length; i++){
            cats[i] = data[i].category;
        }
    
    var sorted_cats = cats.sort();
    
    $scope.categories = [];
        for (var i = 0; i < cats.length; i++){
            if (sorted_cats[i+1] != sorted_cats[i]){
                $scope.categories.push(sorted_cats[i]);
            }
        }
    


  }); //End Data Grab
 //Start Extra Functions for Controller 

    $scope.$watch( 'orderProp', function ( val ) {
        $scope.filteredMarkersProperty = $filter('filter')($scope.markersProperty, val);
        $scope.zoomProperty = 11;
        calcFocus();
    });

    $scope.showAll = function($event){
        $scope.orderProp ="0";
        $scope.filteredMarkersProperty = $scope.places;
        $scope.zoomProperty = 11;
        calcFocus();

    }

     $scope.select = function($event){
        var theName = $event.name;
        var lat = $event.latitude;
        var lng = $event.longitude;
        $scope.filteredMarkersProperty = [$event];
        $scope.centerProperty.lat = lat;
        $scope.centerProperty.lng = lng;
        $scope.zoomProperty = 14;
        calcFocus();

     }
    function calcFocus(){
        var lats = [], longs = [], counter = [];

        for(i=0; i<$scope.filteredMarkersProperty.length; i++)
        {
            lats[i] = $scope.filteredMarkersProperty[i].latitude;
            longs[i] = $scope.filteredMarkersProperty[i].longitude;
        }

        var latCount = 0;
        var longCount = 0;

        for (i=0; i<lats.length; i++){
            latCount += lats[i];
            longCount += longs[i];
        }

        latCount = latCount / lats.length;
        longCount = longCount / longs.length;
        $scope.centerProperty.lat = latCount;
        $scope.centerProperty.lng = longCount;
    };


    angular.extend($scope, {

        /** the initial center of the map */
        centerProperty: {
            lat:48.86,
            lng:2.35
        },

        /** the initial zoom level of the map */
        zoomProperty: 12,

        /** list of markers to put in the map */

        markersProperty : [],

        // These 2 properties will be set when clicking on the map - click event
        clickedLatitudeProperty: null,  
        clickedLongitudeProperty: null
    });
    

});