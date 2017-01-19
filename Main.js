window.addEventListener('load',main,false);
var canvasTag,ctx;
var canvasStyleWidth,canvasStyleHeight,marginLeft=0,marginTop=0;
var showList=new Array();
var positionList=new Array();
function main(){
	canvasTag=document.querySelector("#mycanvas");
	canvasTag.width=stageW;
	canvasTag.height=stageH;
	ctx=canvasTag.getContext("2d");
	//addStage();
	canvasTag.addEventListener('mouseup',function(e){
		console.log(e.offsetY);
		var pline=new Pline(e.offsetX,e.offsetY,e.offsetX,480,7,true);
		showList.push(pline);
	},false);
	setInterval(function(){
		loop();
	},1000/60);
}
function addStage(){
	var stage=new Stage();
	showList.push(stage);
}
function loop(){
	ctx.clearRect(0,0,canvasTag.width,canvasTag.height);
	for (var i = showList.length - 1; i >= 0; i--) {
		showList[i].loop();
	}
}