textEffect
==========

A javascript object to draw texts on a canvas !

##How to in 3 steps :

#1) Create an object
``var sampleText = new textEffect();``

#2) Customize it
``sampleText.font 		= "30px Arial";
sampleText.textAlign 	= "start";
sampleText.baseLine 	= "alphabetic";
this.fillStyle = "#000000";
...``

#3) Render it !
``sampleText.render();``