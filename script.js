var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");



function inputLength(){
	return input.value.length;
}

function listElement(){
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
}

function addList(){
	if ( inputLength() > 0) {
	listElement();
	}
}

function keyPress(event){
	if (inputLength() > 0 && event.keyCode === 13) {
	listElement();
	}	
}

button.addEventListener("click", addList);

input.addEventListener("keypress", keyPress);