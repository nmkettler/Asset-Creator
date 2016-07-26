var app = angular.module('assetApp');

app.controller('ImageUploadController', ['$scope', function($scope){

	$scope.stepsModel = [];

	$scope.imageUpload = function(event){
		var files = event.target.files; //FilesList object

		for(var i = 0;i < files.length; i++){
			var file = files[i];
			var reader = new FileReader();
			reader.onload = $scope.imageIsLoaded;
			reader.readAsDataURL(file);
		}
	}

	$scope.imageIsLoaded = function(e){
		$scope.$apply(function(){
			$scope.stepsModel.push(e.target.result);
		});
	}

}]);

//resize uploaded image
app.directive('resizable', function(){
	return {
		restrict: 'A',
		scope: {
			callback: '&onResize'
		},
		link: function postLink(scope, elem, attrs) {
			elem.resizable();
			elem.on('resizestop', function(evt, ui) {
				if(scope.callback) {scope.callback(); }
			})
		}
	}
});