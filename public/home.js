angular.module('cricNotify.home',['ngRoute'])

.config(['$routeProvider', function($routeProvider){
  $routeProvider.when('/',{
    templateUrl: '/home.html',
    controller: 'homeCtrl'
  });
}])

.controller('homeCtrl', [function(){
  console.log("using home COntroller");
}]);
