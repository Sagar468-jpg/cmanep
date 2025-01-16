function  animateSS()  {
    var ss = document.getElementById('solarsystem'); 
    var  ssContext  =  ss.getContext('2d');
    // Clear the canvas and draw the background 
    ssContext.fillStyle = "blue";
    ssContext.fillRect(0,  0,  450,  450);
    ssContext.save();
    
    // Draw the sun 
    ssContext.translate(225,  225);
    ssContext.beginPath();
    ssContext.arc(0, 0, 15, 0, Math.PI * 2);
    ssContext.fillStyle  =  "yellow";
    ssContext.fill();
    
    
    // Draw  the  earth  orbit 
    ssContext.strokeStyle   =   "black"; 
    ssContext.beginPath();
    ssContext.arc(0, 0, 150, 0, Math.PI * 2); 
    ssContext.stroke();
    
  var now = new Date();
  var seconds = ((now.getSeconds() * 1000) +
    now.getMilliseconds()) / 1000;

//---------------------------------------------
// Earth
//---------------------------------------------
// Rotate the context once every 60 seconds 
var anglePerSecond = ((Math.PI * 2) / 60);
ssContext.rotate(anglePerSecond * seconds);
ssContext.translate(150,  0);

// Draw the earth 
ssContext.fillStyle=  "green"; 
ssContext.beginPath();
ssContext.arc(0, 0, 10, 0, Math.PI * 2);
ssContext.fill();
anglePerSecond = 12* ((Math.PI * 2) / 60);
ssContext.rotate(anglePerSecond * seconds);
ssContext.translate(0,  35);

// draw the moon 
ssContext.fillStyle   =   "white";
ssContext.beginPath();
ssContext.arc(0, 0, 5, 0, Math.PI * 2); 
ssContext.fill();
    ssContext.restore();
    }
    setInterval(animateSS,100);

    
    
