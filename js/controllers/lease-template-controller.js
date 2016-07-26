var app = angular.module('assetApp');

app.controller('LeaseTemplateController', function($scope,$rootScope) {
  //Lease Special Template
  $rootScope.percent_id = [{
    value: '20'
  }];
  $rootScope.first_line_percent_txt = [{
		value: '%'
	}];
	$rootScope.second_line_percent_txt = [{
		value: 'OF MSRP CASH BACK'
	}];
	$rootScope.first_line_below_txt = [{
		value: 'ON 2016 SIERRA 1500 SLT CREW CAB, MOST'
	}];
	$rootScope.second_line_below_txt = [{
		value: 'ACADIA AND MOST TERRAIN MODELS'
	}];
	

//Font Color


});

app.directive('leaseTextDirective', function() {
  return {
    restrict: 'E',
     replace: true, // Replace with the template below
	    transclude: true, // we want to insert custom content inside the directive
      
    template: '<div class="leasespecial" ng-controller="LeaseTemplateController">\
				<div class="firstsec">\
		              <div class="percNumber">\
		                <h1 id="perId" ng-repeat="bb in percent_id">{{bb.value}}</h1>\
		              </div>\
		              <div class="percText">\
		                <h1 class="txtNextToPerId" ng-repeat="bb in first_line_percent_txt"><span>{{bb.value}}</span></h1>\
		                <h1 class="txtNextToPerId"ng-repeat="bb in second_line_percent_txt"><span>{{bb.value}}</span></h1>\
		              </div>\
		            </div>\
		            <div class="secondSec">\
		              <h1 class="belowtxt" ng-repeat="bb in first_line_below_txt">{{bb.value}}</h1>\
		              <h1 class="belowtxt" ng-repeat="bb in second_line_below_txt">{{bb.value}}</h1>\
		            </div>\
	            </div>'
  };
});

app.directive('leaseInputDirective', function() {
  return {
    restrict: 'E',
     replace: true, // Replace with the template below
	    transclude: true, // we want to insert custom content inside the directive
    template: '<div>\
    <form ng-controller="LeaseTemplateController">\
          <div class="form-group" ng-repeat="cc in percent_id">\
            <div class="input-group">\
              <input class="form-control input" type="text" placeholder="Enter Percent" ng-model="cc.value">\
            </div>\
          </div>\
          <div class="form-group" ng-repeat="cc in first_line_percent_txt">\
            <div class="input-group">\
              <input class="form-control input" type="text" placeholder="% Sign" ng-model="cc.value">\
            </div>\
          </div>\
          <div class="form-group" ng-repeat="cc in second_line_percent_txt">\
            <div class="input-group">\
              <input class="form-control input" type="text" placeholder="Special Details" ng-model="cc.value">\
            </div>\
          </div>\
          <div class="form-group" ng-repeat="cc in first_line_below_txt">\
            <div class="input-group">\
              <input class="form-control input" type="text" placeholder="First Explanation Line" ng-model="cc.value">\
            </div>\
          </div>\
          <div class="form-group" ng-repeat="cc in second_line_below_txt">\
            <div class="input-group">\
              <input class="form-control input" type="text" placeholder="Second Explanation Line" ng-model="cc.value">\
            </div>\
          </div>\
        </form>\
        </div>'
  };
});