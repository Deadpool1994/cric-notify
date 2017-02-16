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
  firebase.database().ref("/over_example").on('child_added', function(snapshot) {
   // all records after the last continue to invoke this function
   console.log(snapshot.val());
   var notification = new Notification(snapshot.val(), {
     body: snapshot.val(),
     icon: 'https://lh3.googleusercontent.com/-rmTI5PWyjkA/AAAAAAAAAAI/AAAAAAAAABc/yXkZnCGdnHk/s120-c/photo.jpg' // optional
   });
});
});
