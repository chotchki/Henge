"use strict";
define(['angular', 'service/albumInfo'], function(angular){
  var mod = { moduleName: 'directive/albumLoader' };
  
  angular.module(mod.moduleName, ['service/albumInfo'])
  
  .controller('albumLoaderController', ['$scope', '$rootScope', 'AlbumInfo', function($scope, $rootScope, AlbumInfo){
	//$scope.albums = [];
	
	$scope.loading = false;
	
	$scope.rs = $rootScope;
	
	$scope.loadNextAlbum = function(){
		var a = AlbumInfo;
		var s = $scope;
		
		if(s.loading == true){
			return;
		}
		
		s.loading = true;
		
		if(s.rs.albums.length == 0){
			a.getFirst(function(album){
				var s2 = s;
	            
	            s2.rs.albums = s2.rs.albums.concat(album);
	            s2.loading = false;
	            s2.loadNextAlbum(); //Since one album is not enough!
			});
		} else {
		  a.getNext({album: s.rs.albums[s.rs.albums.length - 1].name}, function(album){
			var s2 = s;
            
            s2.rs.albums = s2.rs.albums.concat(album);
            s2.loading = false;
		  });
		}
	}
	
    if($rootScope.streamYOffset == 0){
    	$scope.loadNextAlbum();	
    }
  }])

  .directive('albumLoader', ['$window', '$rootScope', '$timeout', 'AlbumInfo', function($window, $rootScope, $timeout, AlbumInfo){
    return {
      restrict: 'A',
      controller: 'albumLoaderController',
      replace: true,
      link: function (scope, elem, attrs) {
    	var rs = $rootScope;
        var windowEl = angular.element($window);
        var rawElement = elem[0];
        
        var loadNew = function () {
            var a = AlbumInfo;
            var s = scope;
            var rs2 = rs;
            
            var scrollTop = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
            var scrolledToBottom = (scrollTop + window.innerHeight) >= ((document.documentElement && document.documentElement.scrollHeight) || document.body.scrollHeight);
            if(scrolledToBottom){
              s.loadNextAlbum();
            }
     
            rs2.streamYOffset = scrollTop;
          }
        
        windowEl.bind('scroll', loadNew);
        
        elem.on('$destroy', function(){
        	var w = windowEl;
        	var l = loadNew;
        	w.unbind('scroll', l);
        });
        
        $timeout(function(){
        	var rs2 = rs;
        	window.scroll(0, rs2.streamYOffset);	
        }, 0); 	
      }
    };
  }]);
  return mod;
});