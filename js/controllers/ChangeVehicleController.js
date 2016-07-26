var app = angular.module('assetApp');

	
//Dropdown Vehicle Change
	app.controller('ChangeVehicleController', ['$scope', '$http', function($scope, $http){

	$http.get('vehicle_data.json').then(function(vehicleData){ //Import JSON file
			$scope.vehicleselections = vehicleData.data;
			$scope.alldata = $scope.vehicleselections.length;
		});

	/*Vehicles for Slide */

	$scope.type_options = ['Select Type ', 'Car', 'SUV', 'Truck'];
	$scope.make_options = ['Select Make', 'All GM', 'Chevrolet','Buick','GMC','Cadillac'];
	$scope.model_options = ['Select Model', 'Silverado', 'Silverado 2500','Buick','GMC','Cadillac'];
	$scope.trim_options = ['Select Trim', 'Crew Cab', 'Long Cab','Buick','GMC','Cadillac'];

	$scope.premade_make_options = ['Select Background', '------Chevrolet------', 'Chevrolet Cruze', 'Malibu',
						'------Buick------', 'Encore','Buick Envision',
						'------GMC------','GMC Yukon XL','Terrain', 'Canyon', 'Sierra 1500', 'Acadia'
						];
	

	$scope.vehicle_type = $scope.type_options[0]; //Starting value of vehicle brand
	$scope.vehicle_make = $scope.make_options[0]; //Starting value of vehicle make
	$scope.vehicle_model = $scope.model_options[0]; //Starting value of vehicle model
	$scope.vehicle_trim = $scope.trim_options[0]; //Starting value of vehicle trim

	$scope.premade_vehicle_make = $scope.premade_make_options[0]; //Starting value of vehicle premade background chev
		

}]);

			  	

	/*Font Colors */

	angular.module("directives", [])
    .directive('fontColor', function() {
      return {
        transclude: true,
        scope: {
          style: "=fontColor"
        },
        link: function(scope, element, attrs) {        
          scope.getFontColor = function(){
            return {color: scope.style};
          };
        },
        template: '<input id="60pxTxt" ng-transclude ng-style="getFontColor()">' +
        			'<input id="36pxTxt" ng-transclude ng-style="getFontColor()">'

    };
  });

