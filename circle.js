var c = document.getElementById("slate");
var sto = document.getElementById("stop");
var circ = document.getElementById("circle");
var d = document.getElementById("dvd");
//instantiate a CanvasRenderingContext2D object
var ctx = c.getContext("2d");

var requestID;
var circle = function(){
    ctx.clearRect(0,0,c.width,c.height);
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

var dvd = function(){
    ctx.clearRect(0,0,c.width,c.height);
    window.cancelAnimationFrame(requestID);
    var radius = 25;
    var x = 0;
    var y = 0;
    var dX = 1;
    var dY = 1;
    var imgW = 100;
    var imgH = 75;
    
    var move = function() {	
	var img = new Image();
	img.src = 'dvd.jpg';
	img.onload = function(){
	    ctx.drawImage(img,x,y, imgW,imgH);
	}
	if(x+imgW >= c.width || x < 0){
	    dX *= -1;
	}
	if(y+imgH >= c.height || y < 0){
	    dY *= -1;
	}
	x+=dX;
	y+=dY;
	requestID = window.requestAnimationFrame(move);
    }
    
    move();
}

var stop = function(){
    window.cancelAnimationFrame(requestID);
}

circ.addEventListener("click", circle);
d.addEventListener("click", dvd);
sto.addEventListener("click", stop);
