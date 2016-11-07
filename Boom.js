function Boom(startX,startY){
	var s=this;
	s.startX=startX;
	s.startY=startY;
	s.childarray=new Array();
	s.stopAdd=false;
}
Boom.prototype={
	loop:function(){
		var s=this;
		s.addChild();
		for (var i = s.childarray.length - 1; i >= 0; i--) {
			s.childarray[i].loop();
		}
		//s.childarray[2].loop();
		//console.log("xx");
	},
	addChild:function(){
		var s=this;
		if (s.stopAdd) {
			return;
		}
		for(var i=25;i>0;i--){
			var angle=Math.random()*360*angleToRad;
			var endX=s.startX+Math.cos(angle)*200;
			var endY=s.startY-Math.sin(angle)*200;
			var pline=new Pline(endX,endY,s.startX,s.startY,4,false);
			s.childarray.push(pline);

		}
		s.stopAdd=true;
	}
}