angular.module('devmtnTravel').controller('mainCtrl', function($scope, $state, mainSrv) {
  $scope.travelInfo = mainSrv.travelInfo;
  console.log($scope.travelInfo);
})
