var app = angular.module('assetApp', ['ngAnimate', 'ui.bootstrap']);


window.onload = function(){
	/*Textbox Input */
	var sixtycount = 1;
	var thirtysixcount = 1;
	var twentyfourcount = 1;
	var fourteencount = 1;
	var twelvecount = 1;
	var boxCount = 1;
	var secondBoxCount = 1;

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

	/* Create Box */
	document.getElementById('addBoxButton').onclick = function() {
		var div = document.getElementById("createdBoxDrag");
		var box = document.createElement('div');
		var createdBox = document.getElementById("createdBoxDrag");

		box.id="addBoxId";
		box.className="addBoxClass" + (boxCount++);
		box.name="addBoxname";
		div.appendChild(document.createElement("br"));
		div.appendChild(box);
	}
	document.getElementById('addBoxButton1').onclick = function() {
		var div = document.getElementById("createdSecBoxDrag");
		var box = document.createElement('div');

		box.id="addSecondBoxId";
		box.className="addSecondBoxClass" + (secondBoxCount++);
		box.name="addBoxname";
		div.appendChild(document.createElement("br"));
		div.appendChild(box);
	}


	}
$(document).ready(function() {


	//Change color of input text from select 
	$('#selectColor60px').change(function(){
		$('#addTextBoxInputId60').css('color', $(this).val());	
	});
	$('#selectColor36px').change(function(){
		$('#addTextBoxInputId36').css('color', $(this).val());
	});
	$('#selectColor24px').change(function(){
		$('#addTextBoxInputId24').css('color', $(this).val());
	});
	$('#selectColor14px').change(function(){
		$('#addTextBoxInputId14').css('color', $(this).val());
	});
	$('#selectColor12px').change(function(){
		$('#addTextBoxInputId12').css('color', $(this).val());
	});


	$(function turnBordersOff(){
		$('#showBorderCheckBox').click(function(){
    		if (this.checked) {
        		$('#large-hero div input').css("border", "1px solid black"); 
    		}else{
    			$('#large-hero div input').css("border", "none");
    		}
		}) 
	});

	$(function createBoxUi(){

		$('#createdBoxDrag, #createdSecBoxDrag, #dragSlideCreate').draggable();
		$('#createdBoxDrag, #createdSecBoxDrag').resizable({
			autoHide: true,
			handles: {
		        'ne': '#negrip',
		        'se': '#segrip',
		        'sw': '#swgrip',
		        'nw': '#nwgrip'
		    },
			containment: "#large-hero",
			start: function(event, ui){
				ui.element.css('position', 'absolute');
			}
		});

		$("#addBoxButton").click(function(){
			$(".selectBoxColor").toggle("slow", function(){
				//complete
			});
		}); 
		$("#addBoxButton1").click(function(){
				$(".selectBoxColor1").toggle("slow", function(){
					//complete
				});
			}); 

		$('.selectBoxColor').change(function(){
			$('.addBoxClass1, .addBoxClass2, .addBoxClass3, .addBoxClass4').css('background', $(this).val());
		});
		$('.selectBoxColor1').change(function(){
			$('.addSecondBoxClass1, .addSecondBoxClass2').css('background', $(this).val());
		});

		//Change Box Opacity
		$('.slider').slider({ min: 0, max: 1, step: 0.1, value: 1 })
                .bind("slidechange", function() {
                    //get the value of the slider with this call
                    var o = $(this).slider('value');
                    //here I am just specifying the element to change with a "made up" attribute (but don't worry, this is in the HTML specs and supported by all browsers).
                    var e = '#' + $(this).attr('data-wjs-element');
                    $(e).css('opacity', o)
                });

	});
	$(function textUi(){
		$("#60textDrag, #36textDrag, #24textDrag, #14textDrag, #12textDrag, .leasespecial, .dragUploadedImgClass, .mathDiscount").draggable();
		$("#60textDrag, #36textDrag, #24textDrag, #14textDrag, #12textDrag").resizable({
		  autoHide: true,
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

	$(function showSpecials(){
		//show leaseSpecialCreator
		$("#showLeaseSpecialButton").click(function(){
			$(".leaseSpecialCreator").toggle("slow", function(){
				//complete
			});
		}); 


		$("#showLeaseSpecialonHero").click(function(){
			$(".leasespecial").toggle("slow", function(){
				//complete
			});
		}); 		
		
		$('#leaseFontColorSelect').change(function(){
				$('.leasespecial').css('color', $(this).val());
			});
		$("#small").click(function(event){
			event.preventDefault();
			$("#perId").animate({"font-size" : "40px"});
			$(".txtNextToPerId").animate({"font-size" : "15px"});
			$(".belowtxt").animate({"font-size" : "10px"});
		});
		$("#medium").click(function(event){
			event.preventDefault();
			$("#perId").animate({"font-size" : "80px"});
			$(".txtNextToPerId").animate({"font-size" : "30px"});
			$(".belowtxt").animate({"font-size" : "20px"});
		});
		$("#large").click(function(event){
			event.preventDefault();
			$("#perId").animate({"font-size" : "120px"});
			$(".txtNextToPerId").animate({"font-size" : "45px"});
			$(".belowtxt").animate({"font-size" : "30px"});
		});
		$( ".fontAdjustClass" ).click(function() {
		   $(".fontAdjustClass").removeClass("selected");
		  $(this).addClass("selected");
		  
		 });

		//Show Mathbox Special
		$('#showMathboxSpecialonHero').click(function(){
			$('.mathDiscount').toggle("slow", function(){
				//complete
			});
		});

		$('.showMathboxSpecialDiv').click(function(){
			$('.mathboxCreator').toggle("slow", function(){
				//complete
			});
		});
		$('#MathboxFontColorSelect').change(function(){
				$('.mathDiscount').css('color', $(this).val());
			});
		$("#mathboxSmall").click(function(event){
			event.preventDefault();
			$("#mathNumberId").animate({"font-size" : "50px"});
			$(".txtNextToMathSaleTxt, .mathfirstsec h1, .mathsecondSec h1").animate({"font-size" : "20px"});
			$(".mathSaleText").animate({"font-size" : "5px"});
		});
		$("#mathboxMedium").click(function(event){
			event.preventDefault();
			$("#mathNumberId").animate({"font-size" : "100px"});
			$(".txtNextToMathSaleTxt, .mathfirstsec h1, .mathsecondSec h1").animate({"font-size" : "40px"});
			$(".mathSaleText").animate({"font-size" : "10px"});
		});
		$("#mathboxLarge").click(function(event){
			event.preventDefault();
			$("#mathNumberId").animate({"font-size" : "125px"});
			$(".txtNextToMathSaleTxt, .mathfirstsec h1, .mathsecondSec h1").animate({"font-size" : "50px"});
			$(".mathSaleText").animate({"font-size" : "12.5px"});
		});
		$( ".fontAdjustClass" ).click(function() {
		   $(".fontAdjustClass").removeClass("selected");
		  $(this).addClass("selected");
		  
		 });
	});


	$(function dnldDiv() {
    //Append to a canvas in order to download div as an img

    var element = $("#large-hero"); 
    var getCanvas; 

    $("#btn-Preview-Image").on('click', function() {
    	alert('Hero Slide Saved!');
      html2canvas(element, {
        onrendered: function(canvas) {
          $("#previewImage").append(canvas);
          getCanvas = canvas;
        }
      });
    });

    //Download to image
    $("#btn-convert-image").on('click', function() {
      var imgageData = getCanvas.toDataURL("image/png");
      // Now browser starts downloading it instead of just showing it
      var newData = imgageData.replace(/^data:image\/png/, "data:application/octet-stream");
      $("#btn-convert-image").attr("download", "Hero_Slide_Image.png").attr("href", newData);
    });
  });

});

$(function removeDivs(){
	$('#trash').droppable({
        drop: function(event, ui) {
            ui.draggable.remove();
        }
    });
});

