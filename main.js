// NOT THE OWNER! (https://github.com/dragon731012/-WORKING-bookmarklets-and-games/blob/main/other/better%20clock)
// simple js clock
// this line below is what makes the clock able to be runned through a bookmark click! (found this code in a bookmarklet list (above))
//javascript:

alert("better clock");

function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}

var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
(function () {
    
    var elem = document.createElement('div');
    var body = document.getElementsByTagName('body')[0];
    body.appendChild(elem);
    elem.style.position = 'fixed';
    elem.id = "clockDiv";
    elem.style.top = '0px';
    elem.style.right = '0px';
    elem.style.margin = '10px';
    elem.style.paddingTop = '10px';
    elem.style.width = '200px';
    elem.style.height = '40px';
    elem.style.zIndex = 10000;
    elem.style.opacity = 0.9;
    elem.style.color = 'black';
    elem.style.backgroundColor = 'white';
    elem.style.border = '1px solid white';
    elem.style.textAlign = 'center';
    elem.style.cursor = 'pointer';
    elem.id = 'myTimer';
    elem.style.display = 'block';
    elem.innerText = "Hello";
    sleep(1500);
    elem.innerText = "World";
    sleep(1600)

    
    
    setInterval(function () {
        const d = new Date();
        let day=d.getDate();
        let dayweek = days[d.getDay()];
        let yr=d.getFullYear();
        let hr=d.getHours();
        let month1=d.getMonth();
        var month=month1+1;
        let min=d.getMinutes();
        if (hr>12){
            hr=hr-12;
        }
        if (min<10){
            min='0'+min+'';
        }
        elem.innerText = '' + month + '/' + day + '/' + yr + '  ' + hr + ':' + min + '';
    }, 1000);
    
}());



var dragItem = document.getElementById("clockDiv");
var container = document.getElementsByTagName('body')[0];

var active = false;
var currentX;
var currentY;
var initialX;
var initialY;
var xOffset = 0;
var yOffset = 0;

container.addEventListener("touchstart", dragStart, false);
container.addEventListener("touchend", dragEnd, false);
container.addEventListener("touchmove", drag, false);

container.addEventListener("mousedown", dragStart, false);
container.addEventListener("mouseup", dragEnd, false);
container.addEventListener("mousemove", drag, false);

function dragStart(e) {
    if (e.type === "touchstart") {
        initialX = e.touches[0].clientX - xOffset;
        initialY = e.touches[0].clientY - yOffset;
    } else {
        initialX = e.clientX - xOffset;
        initialY = e.clientY - yOffset;
    }

    if (e.target === dragItem) {
        active = true;
    }
}

function drag(e) {
    if (active) {

        e.preventDefault();

        if (e.type === "touchmove") {
            currentX = e.touches[0].clientX - initialX;
            currentY = e.touches[0].clientY - initialY;
        } else {
            currentX = e.clientX - initialX;
            currentY = e.clientY - initialY;
        }

        xOffset = currentX;
        yOffset = currentY;

        setTranslate(currentX, currentY, dragItem);
    }
}

function setTranslate(xPos, yPos, el) {
    el.style.transform = "translate3d(" + xPos + "px, " + yPos + "px, 0)";
}

function dragEnd(e) {
    initialX = currentX;
    initialY = currentY;
    active = false;
}
