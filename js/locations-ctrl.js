angular.module('devmtnTravel').controller('locationsCtrl', function($scope, $state, mainSrv) {
  $scope.locations = mainSrv.travelInfo;
});
