
let pp_wrapper = document.querySelector(".pp_wrapper");
let slide_1 = document.querySelector(".slide_1");
let slide_2 = document.querySelector(".slide_2");
let germ = document.querySelector(".slide_1 .germ");
let germImg = document.querySelector(".slide_1 .germ img");
let soap = document.querySelector(".slide_1 .soap");
let draggableElement = document.querySelector(".slide_1 .draggableElement");
let drag_text = document.querySelector(".slide_1 .drag_text");
let drag = document.querySelector(".slide_1 .drag");

let buyButton = document.querySelector(".slide_2 .buyButton");

slide_1_show();
function slide_1_show(){
	slide_1.className = slide_1.className.replace('hidden', '');
	drag.classList ? drag.classList.add('shake') : drag.className += ' shake';
}

function slide_2_show(){
  pp_wrapper.style.cursor="pointer";
  drag_text.querySelector("img").src="//ms.purplepatch.online/drag-and-drop/creme/images/result.png?v=1.1";
  draggableElement.className = draggableElement.className.replace('hidden', '');

  setTimeout(function() {
    slide_2.className = slide_2.className.replace('hidden', '');    
    drag_text.classList ? drag_text.classList.add('showZoomIn') : drag_text.className += ' showZoomIn';
  }, 1000);
  draggableElement.classList ? draggableElement.classList.add('showZoomIn') : draggableElement.className += ' showZoomIn';
}

if (typeof window.orientation !== 'undefined'){dragElementMobile(soap);}else{dragElement(soap);}

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0, pos5=0, pos6=0;
  if (document.getElementById(elmnt.id + "header")) {
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
  	drag.className = drag.className.replace('shake', '');
    drag.classList ? drag.classList.add('hidden') : drag.className += ' hidden';

    e = e || window.event;
    e.preventDefault();
    pos3 = e.clientX;
    pos4 = e.clientY;
    
    document.onmousemove = elementDrag;
    document.onmouseup = closeDragElement;
  }

  function elementDrag(e) {    
    e = e || window.event;
    e.preventDefault();
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    topSpace = elmnt.offsetTop - pos2;
    leftSpace = elmnt.offsetLeft - pos1;

    if(leftSpace>180){
      germImg.classList ? germImg.classList.add('hideZoomOut') : germImg.className += ' hideZoomOut';
      germ.classList ? germ.classList.add('fadeInZoom') : germ.className += ' hideZoomOut';
      elmnt.classList ? elmnt.classList.add('hideZoomOut') : elmnt.className += ' hideZoomOut';
      drag_text.classList ? drag_text.classList.add('hideZoomOut') : drag_text.className += ' hideZoomOut';
    	slide_2_show();
    }
    if (leftSpace<20) {leftSpace=20}
    if (leftSpace>230) {leftSpace=230}
    // if (topSpace>155) {topSpace=155}
    // if (topSpace<40) {topSpace=40}

    elmnt.style.top = "120px";
    elmnt.style.bottom = "8px";
    elmnt.style.left = leftSpace + "px";
  }

  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}


function dragElementMobile(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0, pos5=0, pos6=0;
  if (document.getElementById(elmnt.id + "header")) {
    document.getElementById(elmnt.id + "header").ontouchstart = dragMouseDown;
  } else {
    elmnt.ontouchstart = dragMouseDown;
  }

  function dragMouseDown(e) {
    drag.className = drag.className.replace('shake', '');
    drag.classList ? drag.classList.add('hidden') : drag.className += ' hidden';
    e.preventDefault();

    e = e.touches[0] || window.event;
    pos3 = e.clientX;
    pos4 = e.clientY;
    
    document.ontouchmove = elementDrag;
  }

  function elementDrag(e) {
    e = e.touches[0] || window.event;
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    topSpace = elmnt.offsetTop - pos2;
    leftSpace = elmnt.offsetLeft - pos1;

    if(leftSpace>180){
      germImg.classList ? germImg.classList.add('hideZoomOut') : germImg.className += ' hideZoomOut';
      germ.classList ? germ.classList.add('hideZoomOut') : germ.className += ' hideZoomOut';
      elmnt.classList ? elmnt.classList.add('hideZoomOut') : elmnt.className += ' hideZoomOut';
      drag_text.classList ? drag_text.classList.add('hideZoomOut') : drag_text.className += ' hideZoomOut';
      slide_2_show();
      // document.ontouchend = closeDragElement;
    }
    if (leftSpace<20) {leftSpace=20}
    if (leftSpace>230) {leftSpace=230}
      
    elmnt.style.top = "120px";
    elmnt.style.bottom = "8px";
    elmnt.style.left = leftSpace + "px";     
  }
  function closeDragElement() {
    document.ontouchend = null;
    document.touchmove = null;
  }
}


