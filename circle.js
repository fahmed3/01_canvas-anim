var c = document.getElementById("slate");
var s = document.getElementById("stop");
//instantiate a CanvasRenderingContext2D object
var ctx = c.getContext("2d");

var requestID;
var animate = function(){
    window.cancelAnimationFrame(requestID);
    var radius = 25;
    var x = c.width/2;
    var y = c.height/2;

    var circle = function(){
	if(radius < c.width/2){
	    radius++;
	}
	else{
	    radius--;
	}
	ctx.clearRect(0,0,c.width,c.height);
	ctx.beginPath();
	ctx.arc(x, y, radius,0,2*Math.PI);
	ctx.stroke();
	ctx.fill();
	requestID = window.requestAnimationFrame(circle);
	console.log(requestID);
    }
    circle();
}
var stop = function(){
    window.cancelAnimationFrame(requestID);
}

c.addEventListener("click", animate);
s.addEventListener("click", stop);
