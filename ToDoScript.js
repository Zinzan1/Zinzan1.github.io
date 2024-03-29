function doScript() {
	// Create a "close" button and append it to each list item
	var myNodelist = document.getElementsByTagName("LI");
	var i;
	for (i = 0; i < myNodelist.length; i++) {
  		var span = createCloseButton();
  		myNodelist[i].appendChild(span);
	}
	
	addCloseListener();

	// Add a "checked" symbol when clicking on a list item
	var list = document.querySelector('ul');
	list.addEventListener('click', function(ev) {
  		if (ev.target.tagName === 'LI') {
    		ev.target.classList.toggle('checked');
  		}
	}, false);
}

function createCloseButton() {
	var span = document.createElement("SPAN");
  	var txt = document.createTextNode("\u00D7");
  	span.className = "close";
  	span.appendChild(txt);
	return span;
}

function addCloseListener() {
	// Adds a listener to each close button
	var close = document.getElementsByClassName("close");
	var i;
	for (i = 0; i < close.length; i++) {
		close[i].onclick = function() {
      			var list = this.parentElement.parentElement;
				var listItem = this.parentElement;
				list.removeChild(listItem);
      			//div.style.display = "none";
		}
	}
}

// Create a new list item when clicking on the "Add" button
function newElement() {
	var li = document.createElement("li");
	var inputValue = document.getElementById("myInput").value;
	var t = document.createTextNode(inputValue);
	li.appendChild(t);
		if (inputValue === '') {
			alert("You must write something!");
		}
 
		else {
			document.getElementById("myUL").appendChild(li);
		}

	document.getElementById("myInput").value = "";

	var span = createCloseButton();
	li.appendChild(span);
	
	addCloseListener()
}

function httpGetAsync(theUrl, callback)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() { 
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            callback(xmlHttp.responseText);
    }
    xmlHttp.open("GET", theUrl, true); // true for asynchronous 
    xmlHttp.send(null);
}