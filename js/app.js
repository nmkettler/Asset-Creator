var app = angular.module('assetApp', ['ngAnimate', 'ui.bootstrap']);


window.onload = function(){
	/*Textbox Input */
	var sixtycount = 1;
	var thirtysixcount = 1;
	var twentyfourcount = 1;
	var fourteencount = 1;
	var twelvecount = 1;
	var boxCount = 1;

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
        		$('#addTextBoxInputId60, #addTextBoxInputId36, #addTextBoxInputId24, #addTextBoxInputId14, #addTextBoxInputId12').css("border", "none"); 
    		}
		}) 
	});

	$(function createBoxUi(){
		$('#createdBoxDrag').draggable();
		$('#createdBoxDrag').resizable({
			autoHide: true,
			handles: 'n, e, s, w, ne, se, sw, nw, all',
			containment: "#large-hero",
			start: function(event, ui){
				ui.element.css('position', 'absolute');
			}
		});

		$('#selectBoxColor').change(function(){
			$('.addBoxClass1, .addBoxClass2, .addBoxClass3, .addBoxClass4').css('background', $(this).val());
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

    var element = $("#large-hero"); // global variable
    var getCanvas; // global variable

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
    $("#btn-Convert-Html2Image").on('click', function() {
      var imgageData = getCanvas.toDataURL("image/png");
      // Now browser starts downloading it instead of just showing it
      var newData = imgageData.replace(/^data:image\/png/, "data:application/octet-stream");
      $("#btn-Convert-Html2Image").attr("download", "Hero_Slide_Image.png").attr("href", newData);
    });
  });

});

/*#mathMSRPText, #mathDealerDiscText {
  padding-left: 30px;
}

.mathNumber h1{
  position:relative;
  display:block;
  float:left;
}
#mathNumberId{ 
font-size: 100px; 
padding:0;
margin-bottom:0px;
}
.txtNextToMathSaleTxt{
  font-size:40px;
}
.mathSaleText{
  padding-top:10px;
}*/