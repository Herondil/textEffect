textEffect
==========

A javascript object to draw texts on a canvas !

#How to in 3 steps :

##1) Create an object
``var sampleText = new textEffect();``

##2) Customize it
``
sampleText.font 		= "30px Arial";\n
sampleText.textAlign 	= "start";\n
sampleText.baseLine 	= "alphabetic";\n
this.fillStyle = "#000000";\n
...
``

##3) Render it !
``sampleText.render();``