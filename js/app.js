(function(angular, global){

	var app = angular.module('assetApp', ["directives"]);

	app.controller('MainController', ['$scope', '$http', function($scope, $http){

	$http.get('vehicle_data.json').then(function(vehicleData){ //Import JSON file
			$scope.vehicleselections = vehicleData.data;
			$scope.alldata = $scope.vehicleselections.length;
		});

	/*Vehicles for Slide */

	$scope.type_options = ['Select Type', 'Car', 'SUV', 'Truck'];
	$scope.make_options = ['Select Make', 'All GM', 'Chevrolet','Buick','GMC','Cadillac'];
	$scope.model_options = ['Select Model', 'Silverado', 'Silverado 2500','Buick','GMC','Cadillac'];
	$scope.trim_options = ['Select Trim', 'Crew Cab', 'Long Cab','Buick','GMC','Cadillac'];

	$scope.premade_make_options = ['Select Background', 'Chevrolet','Buick','GMC','Cadillac'];


	$scope.vehicle_type = $scope.type_options[0]; //Starting value of vehicle brand
	$scope.vehicle_make = $scope.make_options[0]; //Starting value of vehicle make
	$scope.vehicle_model = $scope.model_options[0]; //Starting value of vehicle model
	$scope.vehicle_trim = $scope.trim_options[0]; //Starting value of vehicle trim

	$scope.premade_vehicle_make = $scope.premade_make_options; //Starting value of vehicle premade background chev

	/*Font Colors */

}]);

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

})(angular, this);

window.onload = function(){
	/*Textbox Input */
	var sixtycount = 1;
	var thirtysixcount = 1;
	var twentyfourcount = 1;
	var fourteencount = 1;
	var twelvecount = 1;

	document.getElementById('addTextBoxButton60').onclick = function() {
		var div = document.getElementById("60textDrag");
		var input = document.createElement("input");

		input.type= "text";
		input.style.fontSize = "60px";
		input.id="addTextBoxInputId60";
		input.name="addTextBoxInputName60" + (sixtycount++);
		div.appendChild(input);
	};

	document.getElementById('addTextBoxButton36').onclick = function() {
		var div = document.getElementById("36textDrag");
		var input = document.createElement("input");

		input.type= "text";
		input.style.fontSize = "36px";
		input.id="addTextBoxInputId36";
		input.name="addTextBoxInputName36" + (thirtysixcount++);
		div.appendChild(document.createElement("br"));
		div.appendChild(input);
	};

	document.getElementById('addTextBoxButton24').onclick = function() {
		var div = document.getElementById("24textDrag");
		var input = document.createElement("input");

		input.type= "text";
		input.style.fontSize = "24px";
		input.id="addTextBoxInputId24";
		input.name="addTextBoxInputName24" + (twentyfourcount++);
		div.appendChild(document.createElement("br"));
		div.appendChild(input);
	};

	document.getElementById('addTextBoxButton14').onclick = function() {
		var div = document.getElementById("14textDrag");
		var input = document.createElement("input");

		input.type= "text";
		input.style.fontSize = "14px";
		input.id="addTextBoxInputId14";
		input.name="addTextBoxInputName14" + (fourteencount++);
		div.appendChild(document.createElement("br"));
		div.appendChild(input);
	};
	document.getElementById('addTextBoxButton12').onclick = function() {
		var div = document.getElementById("12textDrag");
		var input = document.createElement("input");

		input.type= "text";
		input.style.fontSize = "12px";
		input.id="addTextBoxInputId12";
		input.name="addTextBoxInputName12" + (twelvecount++);
		div.appendChild(document.createElement("br"));
		div.appendChild(input);
	};

	/* /TextBox Input */

	}

$(document).ready(function() {

	//Change color of input text from select 
	$('#selectColor60px').change(function(){
		$('#addTextBoxInputId60').css('color', $(this).val());	
	});

	$('#selectColor36px').change(function(){
		$('#addTextBoxInputId36').css('color', $(this).val());
	});

	$(function textUi(){
		$("#60textDrag, #36textDrag, #24textDrag, #14textDrag, #12textDrag").draggable();
		$("#60textDrag, #36textDrag, #24textDrag, #14textDrag, #12textDrag").resizable({
          containment: "#large-hero",
          start: function(event, ui) { //Other images/divs when resized do not affect overall flow
            ui.element.css('position', 'absolute');
          }
        });       
	});

	$(function vehicleImgUi(){
		$('#brandDrag').change(function(){
			$(".draggableImg").resizable({
	          containment: "#large-hero",
	          start: function(event, ui) { //Other images/divs when resized do not affect overall flow
	            ui.element.css('position', 'absolute');
	          }
	        });
			$(".draggableDiv").draggable();
		});
	});

});