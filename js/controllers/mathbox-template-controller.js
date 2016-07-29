var app = angular.module('assetApp');

app.controller('MatboxTemplateController', function($scope,$rootScope) {
  //Mathbox Special Template
  $rootScope.first_number = [{
    value: '$45,000'
  }];
  $rootScope.second_number = [{
		value: '$5,000'
	}];
	$rootScope.txt_next_first_num = [{
		value: 'MSRP'
	}];
	$rootScope.txt_next_sec_num = [{
		value: 'Dealer Discount'
	}];
	$rootScope.sale_price_num = [{
		value: '$40,000'
	}];
  $rootScope.sale_txt_num = [{
    value: 'Sale'
  }];
  $rootScope.price_txt_num = [{
    value: 'Price'
  }];
	

});

app.directive('mathboxTemplateDirective', function() {
  return {
    restrict: 'E',
     replace: true, // Replace with the template below
	    transclude: true, // we want to insert custom content inside the directive
      
    template: '<div class="mathDiscount" ng-controller="MatboxTemplateController">\
                <div class="mathfirstsec">\
                  <h1 ng-repeat="cc in first_number"><span>{{cc.value}}</span></h1>\
                   <h1 ng-repeat="cc in second_number"><span>{{cc.value}}</span></h1>\
                </div>\
                <div class="mathsecondSec">\
                  <h1 ng-repeat="cc in txt_next_first_num" class="mathDealerDiscText"><span>{{cc.value}}</span> </h1>\
                  <h1 ng-repeat="cc in txt_next_sec_num" class="mathDealerDiscText"><span>{{cc.value}}</span> </h1>\
                </div>\
                <div class="maththirdsec">\
                  <div class="mathNumber">\
                    <h1 ng-repeat="cc in sale_price_num" id="mathNumberId">{{cc.value}}</h1>\
                  </div>\
                  <div class="mathSaleText">\
                    <h1 ng-repeat="cc in sale_txt_num" class="txtNextToMathSaleTxt"><span>{{cc.value}}</span></h1>\
                    <h1 ng-repeat="cc in price_txt_num" class="txtNextToMathSaleTxt"><span>{{cc.value}}</span></h1>\
                  </div>\
                </div>\
              </div>'
  };
});

app.directive('mathboxInputDirective', function() {
  return {
    restrict: 'E',
     replace: true, // Replace with the template below
      transclude: true, // we want to insert custom content inside the directive
    template: '<div class="center-block">\
    <form ng-controller="MatboxTemplateController">\
          <div class="form-group" ng-repeat="cc in first_number">\
            <div class="input-group">\
              <input class="form-control input" type="text" placeholder="Enter MSRP" ng-model="cc.value">\
            </div>\
          </div>\
          <div class="form-group" ng-repeat="cc in second_number">\
            <div class="input-group">\
              <input class="form-control input" type="text" placeholder="% Sign" ng-model="cc.value">\
            </div>\
          </div>\
          <div class="form-group" ng-repeat="cc in txt_next_first_num">\
            <div class="input-group">\
              <input class="form-control input" type="text" placeholder="Special Details" ng-model="cc.value">\
            </div>\
          </div>\
          <div class="form-group" ng-repeat="cc in txt_next_sec_num">\
            <div class="input-group">\
              <input class="form-control input" type="text" placeholder="First Explanation Line" ng-model="cc.value">\
            </div>\
          </div>\
          <div class="form-group" ng-repeat="cc in sale_price_num">\
            <div class="input-group">\
              <input class="form-control input" type="text" placeholder="Second Explanation Line" ng-model="cc.value">\
            </div>\
          </div>\
          <div class="form-group" ng-repeat="cc in sale_txt_num">\
            <div class="input-group">\
              <input class="form-control input" type="text" placeholder="Second Explanation Line" ng-model="cc.value">\
            </div>\
          </div>\
          <div class="form-group" ng-repeat="cc in price_txt_num">\
            <div class="input-group">\
              <input class="form-control input" type="text" placeholder="Second Explanation Line" ng-model="cc.value">\
            </div>\
          </div>\
        </form>\
        </div>'
  };
});