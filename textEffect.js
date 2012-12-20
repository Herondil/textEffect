define( function() {


	var textEffect = function(){		
		//the content of the text
		this.content = "default text";
		
		//the 2D pos on the canvas
		this.position  = { x : 0, y : 40 };
		this.angle	   = 0;
		
		//the fillStyle, black by default
		this.fillStyle = "#000000";
		
		//the stroke style, red by default
		this.strokeStyle="#FF0000";
		
		//default 0, increase for a larger border
		this.strokeStrength = 0;
		
		//text element specs in 2D canvas
		this.font 		= "30px Arial";
		this.textAlign 	= "start";
		this.baseLine 	= "alphabetic";
		
		//the width of the text on the canvas, giving by ctx.measureText()
		this.textWidth = 0;
	};
	
	//update the pos on the screen with : coords { x, y }
	textEffect.prototype.updatePosition = function(coords) {
		this.position = coords;
	};
	
	//draw the textEffect
	textEffect.prototype.render = function(_ctx, _xOffset, _yOffset){
		_ctx.save();
			_ctx.translate	(this.position.x - _xOffset, this.position.y - _yOffset);
			_ctx.rotate		(this.angle);
			_ctx.font 			= this.font;
			_ctx.textAlign 		= this.textAlign;
			_ctx.baseLine 		= this.baseLine;
			_ctx.fillStyle 		= this.fillStyle;
			_ctx.strokeStyle 	= this.strokeStyle;
			_ctx.strokeText	(this.content,0,0);
			_ctx.fillText	(this.content,0,0);
			//we had more strokes with strokeStrength
			for(var i = 0; i < this.strokeStrength; i++) _ctx.strokeText	(this.content,0,0);
			this.textWidth = _ctx.measureText(this.content);
		_ctx.restore();
	};
	
	return textEffect ;
});