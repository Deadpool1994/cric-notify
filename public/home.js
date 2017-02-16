angular.module('cricNotify.home',['ngRoute','firebase'])

.config(['$routeProvider', function($routeProvider){
  $routeProvider.when('/',{
    templateUrl: '/home.html',
    controller: 'homeCtrl'
  });
}])

.controller('homeCtrl', function($scope, $firebaseObject){
  console.log("using home COntroller");
  var ref = firebase.database().ref("/over_example/data_3");
  // download the data into a local object
  var obj = $firebaseObject(ref);
  obj.$loaded(function(obj) {
  $scope.syncObject = JSON.parse(obj.$value);
  window.w = $scope.syncObject;
  });
});
