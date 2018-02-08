var c = document.getElementById("slate");
var sto = document.getElementById("stop");
var star = document.getElementById("start");
//instantiate a CanvasRenderingContext2D object
var ctx = c.getContext("2d");

var requestID;
var animate = function(){
    window.cancelAnimationFrame(requestID);
    var radius = 25;
    var x = c.width/2;
    var y = c.height/2;

    var grow = function(){
	radius++;
	ctx.clearRect(0,0,c.width,c.height);
	ctx.beginPath();
	ctx.arc(x, y, radius,0,2*Math.PI);
	ctx.stroke();
	ctx.fillStyle = "red";
	ctx.fill();
	if(radius < c.width/2){
	    requestID = window.requestAnimationFrame(grow);
	}
	else{
	    shrink();
	}
    }

    var shrink = function(){
	radius--;
	ctx.clearRect(0,0,c.width,c.height);
	ctx.beginPath();
	ctx.arc(x, y, radius,0,2*Math.PI);
	ctx.stroke();
	ctx.fill();
	if(radius > 0){
	    requestID = window.requestAnimationFrame(shrink);
	}
	else{
	    grow();
	}
    }
    grow();
}
var stop = function(){
    window.cancelAnimationFrame(requestID);
}

star.addEventListener("click", animate);
sto.addEventListener("click", stop);
