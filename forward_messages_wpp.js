function simulateMouseEvents(element, eventName) 
{ 
    var mouseEvent = document.createEvent('MouseEvents'); 
    mouseEvent.initEvent(eventName, true, true); 
    element.dispatchEvent(mouseEvent); 
} 

var eventFire = (MyElement, ElementType) => { 
    var MyEvent = document.createEvent("MouseEvents"); 
    MyEvent.initMouseEvent 
     (ElementType, true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null); 
    MyElement.dispatchEvent(MyEvent); 
}; 

// Open the browser in the source onversation.
// Replace the source and target conversations.
groupSrc = "Tênis é uma desgraça"
groupTarget = "Pedro"

function sendMessage(message) 
{
	simulateMouseEvents(document.querySelector('[title="' + groupTarget + '"]'), 'mousedown');
	setTimeout(function(){
		messageBox = document.querySelectorAll("[contenteditable='true']")[0];

	    event = document.createEvent("UIEvents"); 
	    messageBox.innerHTML = message
	    event.initUIEvent("input", true, true, window, 1); 
	    messageBox.dispatchEvent(event); 

	    eventFire(document.querySelector('span[data-icon="send"]'), 'click');

	    setTimeout(function(){
	    	simulateMouseEvents(document.querySelector('[title="' + groupSrc + '"]'), 'mousedown');
	    }, 1500)
	}, 1500)
}

var arrCache = {};
function listenMessages(){
	currentTarget = document.getElementById("main").getElementsByClassName("_5SiUq")[0].getElementsByClassName("_16vzP")[0].getElementsByClassName("_3XrHh")[0].getElementsByClassName("_1wjpf")[0].textContent

	if(currentTarget == groupSrc)
	{
		var x = document.getElementsByClassName("selectable-text invisible-space copyable-text");

		for(var i=0; i<x.length; i++)
			if( !arrCache[ x[i].textContent ] )
	        {
				arrCache[ x[i].textContent ] = true;
				//console.log( x[i].textContent );
				sendMessage(x[i].textContent)
	        }
	}
}
setInterval(listenMessages, 2000)