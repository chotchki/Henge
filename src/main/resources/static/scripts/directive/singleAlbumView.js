"use strict";
define(['angular', 'ui-router', 'service/albumInfo'], function(angular){
  var mod = { moduleName: 'directive/singleAlbumView' };
  angular.module(mod.moduleName, ['service/albumInfo'])
	  
  .controller('singleAlbumViewController', ['$scope', '$rootScope', '$stateParams', 'AlbumInfo', function($scope, $rootScope, $stateParams, AlbumInfo){
    $scope.album = [];
		
    $scope.loading = true;
  
    AlbumInfo.getFirst({album: $stateParams.album}, function(album){
      var s = $scope;
      s.album = album[0];
      s.loading = false;
	});
    
    console.log("Stream set to " + $rootScope.streamYOffset);
  }])

  .directive('singleAlbumView', function(){
    return {
      restrict: 'A',
      controller: 'singleAlbumViewController',
      replace: true
    };
  });
  return mod;
});