textEffect
==========

A javascript object to draw texts on a canvas !

#How to in 3 steps :

##1) Create an object

	var sampleText = new textEffect();

	
##2) Customize it

With context parameters :

	sampleText.font 		= "30px Arial";
	sampleText.textAlign 	= "start";
	sampleText.baseLine 	= "alphabetic";
	sampleText.fillStyle 	= "#000000";
	...
	
Content :

	sampleText.content = "Hello Text";
	
And position on screen :

	sampleText.position  	= { x : 0, y : 40 };
	sampleText.angle	   	= 180;
	
	
##3) And Render it !

	sampleText.render(myContext);
	