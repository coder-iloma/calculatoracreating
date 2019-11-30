function add(){
		var input1=parseInt(document.getElementById('input1').value);
		var input2=parseInt(document.getElementById('input2').value);
		var outputfield=input1+input2;
		document.getElementById('outputfield').innerHTML	=outputfield;
	}
function sub(){
		var input1= document.getElementById('input1').value;
		var input2= document.getElementById('input2').value;
		var outputfield=input1-input2;
		document.getElementById('outputfield').innerHTML=outputfield;
	}
function multi(){
		var input1= document.getElementById('input1').value;
		var input2= document.getElementById('input2').value;
		var outputfield=input1*input2;
		document.getElementById('outputfield').innerHTML=outputfield;
	}
function div(){
		var input1= document.getElementById('input1').value;
		var input2= document.getElementById('input2').value;
		var outputfield=input1/input2;
		document.getElementById('outputfield').innerHTML=outputfield;
	}
function clr(){
		var outputfield=document.getElementById('outputfield').innerHTML="";
		var input1= document.getElementById('input1').value="";
		var input2= document.getElementById('input2').value="";
	}