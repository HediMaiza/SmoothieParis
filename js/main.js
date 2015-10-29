/*function loadScript() {
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp&' +
      'callback=initialize';
  document.body.appendChild(script);
}
window.onload = loadScript;
*/

// DONNEES DEFFERENTES BOUTIQUES
function DataController($scope){
  $scope.users = [
    {
      "_id": "549316b2cce04b2e8d25bb5a",
      "picture": "http://lorempixel.com/200/140/food/1",
      "company": "SmoothieBar",
      "email": "simpsonwinters@overfork.com",
      "phone": "+33 (909) 526-3717",
      "address": "115 Maple Street, Elizaville, Massachusetts, 2985",
      "website":"/monbarajus",
      "latitude": 7.257847,
      "longitude": -95.80209
    },
    {
      "_id": "549316b2adbb4e3f14d2f9fa",
      "picture": "http://lorempixel.com/200/130/food/5",
      "company": "FruitsandJuice",
      "email": "simpsonwinters@xymonk.com",
      "phone": "+33 (876) 510-2395",
      "address": "973 Lenox Road, Windsor, Kansas, 2595",
      "website":"/mesfruitsetlegumes",
      "latitude": -10.684314,
      "longitude": 60.003851
    },
    {
      "_id": "549316b235fc3e4004f4dde9",
      "picture": "http://lorempixel.com/200/130/food/3",
      "company": "Juice's Bar",
      "email": "simpsonwinters@assistia.com",
      "phone": "+33 (900) 523-2467",
      "address": "716 Goodwin Place, Kiskimere, Louisiana, 1680",
      "website":"/nosbonjus",
      "latitude": -45.675735,
      "longitude": -26.991614
    },
    {
      "_id": "549316b2644f92a578655837",
      "picture": "http://lorempixel.com/200/130/food/4",
      "company": "DeliZ",
      "email": "simpsonwinters@senmao.com",
      "phone": "+33 (995) 440-3555",
      "address": "971 Beaver Street, Gloucester, Hawaii, 8995",
      "website":"/delizdetail",
      "latitude": -14.71025,
      "longitude": -46.81277
    },
    {
      "_id": "549316b23a87d2c23c7dc91b",
      "picture": "img/boutiques/wanna.jpg",
      "company": "Wanna Juice",
      "email": "simpsonwinters@cytrex.com",
      "phone": "0698009140",
      "address": "39 boulevard Auguste, Paris",
      "website":"http://wannajuice.com",
      "latitude": 55.469874,
      "longitude": 42.43605
    }
  ];

}