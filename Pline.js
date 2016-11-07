function Pline(endX,endY,startX,startY,stepLength,isBoom){
	var s=this;
	s.startX=startX;
	s.startY=startY;
	s.endX=endX;
	s.endY=endY;
	s.displacement=Math.sqrt((startX - endX) * (startX - endX) + (startY - endY) * (startY - endY));
	s.stepLength = stepLength;
	s.stepNum = s.displacement / s.stepLength;
	s.moveCos = (endX - startX) / s.displacement;
	s.moveSin = (endY - startY) / s.displacement;
	s.length=4;
	s.firstcreate=true;
	s.isBoom=isBoom;
	s.boom=new Boom(endX,endY);
	s.color = Pline.COLOR_LIST[Math.round(Math.random() * (Pline.COLOR_LIST.length - 1))];
}
Pline.COLOR_LIST = [
	"#990000",
	"#FF0000",
	"#CC3300",
	"#CC6600",
	"#CC0033",
	"#FFFF00",
	"#33FF00",
	"#33CC00",
	"#0066FF",
	"#00FF99",
	"#330099",
	"#990033",
	"#000099"
];
Pline.prototype={
	loop:function(){
		var s=this;
		if(Math.sqrt((s.startX - s.endX) * (s.startX - s.endX) + (s.startY - s.endY) * (s.startY - s.endY))>s.length){
			s.startX += s.stepLength * s.moveCos;
			s.startY += s.stepLength * s.moveSin;
			ctx.save(); 
		ctx.beginPath();
		ctx.lineWidth="5";
		ctx.strokeStyle=s.color;
		ctx.moveTo(s.startX,s.startY);
		ctx.lineTo(s.startX+s.stepLength * s.moveCos,s.startY+ s.stepLength * s.moveSin);
		ctx.stroke();
		ctx.restore();
		}
		else{
			if (s.isBoom) {
				s.boom.loop();
			}
			
		}
	}
}