angular.module('cricNotify.home',['ngRoute','firebase'])

.config(['$routeProvider', function($routeProvider){
  $routeProvider.when('/',{
    templateUrl: '/home.html',
    controller: 'homeCtrl'
  });
}])

.controller('homeCtrl', function($scope, $firebaseArray){
  console.log("using home COntroller");
  var ref = firebase.database().ref("/over_example/data_2");
  // download the data into a local object
  $scope.syncObject =  $firebaseArray(ref);
  window.w = $scope.syncObject;
  console.log($scope.syncObject);
//  console.log($scope.syncObject.text);
});
