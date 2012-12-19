textEffect
==========

A javascript object to draw texts on a canvas !

#How to in 3 steps :

##1) Create an object

	var sampleText = new textEffect();

	
##2) Customize it

With context parameters :

	sampleText.font 		= "30px Arial";\n
	sampleText.textAlign 	= "start";\n
	sampleText.baseLine 	= "alphabetic";\n
	sampleText.fillStyle 	= "#000000";\n
	...
	
Content :

	this.content = "Hello Text";
	
And position on screen :

	sampleText.position  	= { x : 0, y : 40 };
	sampleTextis.angle	   	= 180;
	
	
##3) Render it !

	sampleText.render(myContext);
	
	
	
Thank for your golden support, feel free to send feedbacks !