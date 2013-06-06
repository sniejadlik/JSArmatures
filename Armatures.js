var zebras = 0, zebydracorns = 0, spriteW=100, spriteH=100 

var image;


$( document ).ready(function() {
    loadSpriteSheet();
});



function onLoaded() {

	init();
	animate();
}

function loadSpriteSheet() {
	image = new Image();
    image.src = "ZebraCorn2.png";
    image.onload = onLoaded;

}


// initialize page after image load.
function init() 
{

	container = document.createElement( 'div' );
    document.body.appendChild( container );


	var i = 0;
	var limit = 3;
	for (i=0;i<limit;++i)
	{
		createZebra();
		createZebydracorn();
	}

	


	_stats = new Stats();
	_stats.domElement.style.position = 'absolute';
	_stats.domElement.style.top = '0px';
	_stats.domElement.style.left = '10px';
	container.appendChild( _stats.domElement );
	_stats.update();

}


function createZebra()
{
	$(".zebra").append('<div id="zebraSprite'+zebras+'" class="armatureSprite Sprite" ></div>');
	
	var zebraID = "zebraSprite"+zebras;
	var zebra = $("#"+zebraID).Armature(zebraID);
	var rot = Math.random()*30;

	zebra.createArmature(zebras);
	zebra.createPiece('zebraSprite','zebraBody',85,98,72,107,34,85,0,0,1000,1, Math.random()*10-5);

	// create right front leg
	zebra.createPiece('zebraBody','zebraBackForeLeg',26,0,60,38, 47, 29,-35,10,-10);
	zebra.createPiece('zebraBackForeLeg','zebraBackForeHoof',35,38,51,40, 40, 9,-35,5,-10);

	//create right back leg
	zebra.createPiece('zebraBody','zebraBackHindLeg',35,108,42,53, 28,14,5,70,-10);
	zebra.createPiece('zebraBackHindLeg','zebraBackHindHoof',35,165,42,40, 38,9,-27,38,-10);

	//create neck
	zebra.createPiece('zebraBody','zebraNeck',95,60,63,30, 30,24,15,-5,10);
		
	//create head
	zebra.createPiece('zebraNeck','zebraHead',95,0,63,61, 42, 43,0,-50,10);

	// create left front leg
	zebra.createPiece('zebraBody','zebraFrontForeLeg',0,77,77,32,60,15,-45,20,10);
	zebra.createPiece('zebraFrontForeLeg','zebraFrontForeHoof',9,108,20,58,10,14,5,11,10);

	// create left back leg
	zebra.createPiece('zebraBody','zebraFrontHindLeg',164,9,36,54,21,17,33,85,10);
	zebra.createPiece('zebraFrontHindLeg','zebraFrontHindHoof',174,66,26,59,18,9,10,40,10);

	//create tail
	zebra.createPiece('zebraBody','zebraTail',167,144,32,62,5,13,58,77,10);
	var sprite = $('#'+zebraID);

	zebra.animatePieces();
	
	TweenMax.to(sprite,2,{css:{transform:"translateX("+((Math.random()*100)+200)*zebras+"px) translateY("+Math.random()*20+"px) "}});//       scale("+scale+","+scale+") "}});  //top:Math.random() * 300, left:Math.random() * 700, rotation:Math.random()*360});
	//TweenMax.to(sprite,2,{opacity:1});
	zebras++;

}


function createZebydracorn() 
{
	$(".zebra").append('<div id="zebydracornSprite'+zebydracorns+'" class="armatureSprite Sprite" ></div>');
	
	var zebydracornID = "zebydracornSprite"+zebydracorns;
	var zebydracorn = $("#"+zebydracornID).Armature(zebydracornID);
	var rot = Math.random()*30;

	zebydracorn.createArmature(zebydracorns);
	zebydracorn.createPiece('zebydracornSprite','zebydracornBody',85,98,72,107,34,85,0,0,1000,1, Math.random()*10-5);

	// create right front leg
	zebydracorn.createPiece('zebydracornBody','zebydracornBackForeLeg',26,0,60,38, 47, 29,-35,10,-10);
	zebydracorn.createPiece('zebydracornBackForeLeg','zebydracornBackForeHoof',35,38,51,40, 40, 9,-35,5,-10);

	//create right back leg
	zebydracorn.createPiece('zebydracornBody','zebydracornBackHindLeg',35,108,42,53, 28,14,5,70,-10);
	zebydracorn.createPiece('zebydracornBackHindLeg','zebydracornBackHindHoof',35,165,42,40, 38,9,-27,38,-10);

	//create neck
	zebydracorn.createPiece('zebydracornBody','zebydracornNeck',95,60,63,30, 30,24,15,-5,10);
		
	//multi heads
	var heads = Math.ceil(Math.random()*4);
	for (var n=0;n<heads;++n)
	{
		limit = Math.ceil(Math.random()*10);
		var prevNeck = 'zebydracornNeck';
		// multi long necks
		for (i=0;i<limit;++i)
		{
			zebydracorn.createPiece(prevNeck,'zebydracornNeck'+n+'_'+i,95,60,63,30, 30,24,10,-5,-10);
			prevNeck = 'zebydracornNeck'+n+'_'+i;
		}
		zebydracorn.createPiece(prevNeck,'zebydracornHead'+n,95,0,63,61, 42, 43,0,-50,10);
	}

	// create left front leg
	zebydracorn.createPiece('zebydracornBody','zebydracornFrontForeLeg',0,77,77,32,60,15,-45,20,10);
	zebydracorn.createPiece('zebydracornFrontForeLeg','zebydracornFrontForeHoof',9,108,20,58,10,14,5,11,10);


	// create left back leg
	zebydracorn.createPiece('zebydracornBody','zebydracornFrontHindLeg',164,9,36,54,21,17,33,85,10);
	zebydracorn.createPiece('zebydracornFrontHindLeg','zebydracornFrontHindHoof',174,66,26,59,18,9,10,40,10);

	//create tail
	zebydracorn.createPiece('zebydracornBody','zebydracornTail',167,144,32,62,5,13,58,77,10);

	//multi tails
	var tails = Math.ceil(Math.random()*4);
	var length = Math.ceil(Math.random()*5);
	for (var n=0;n<tails;++n)
	{
		var prevTail = 'zebydracornTail';
		for (i=0;i<length;++i)
		{
			zebydracorn.createPiece(prevTail,'zebydracornTail'+n+'_'+i,167,144,32,62,5,13,20,35,10,.9);
			prevTail = 'zebydracornTail'+n+'_'+i;
		}
	}

	var sprite = $('#'+zebydracornID);
	//console.log('---------'+sprite);
	zebydracorn.animatePieces();
	
	TweenMax.to(sprite,2,{css:{transform:"translateX("+((Math.random()*100)+250)*zebydracorns+"px) translateY("+Math.random()*100+"px) "}});//       scale("+scale+","+scale+") "}});  //top:Math.random() * 300, left:Math.random() * 700, rotation:Math.random()*360});
	//TweenMax.to(sprite,2,{opacity:1});
	zebydracorns++;
}







function animate() {

    requestAnimationFrame( animate );
	
    //render();
    _stats.update();

}





/////////////////////////////
//////  ARMATURE EXPERIMENTATION





$.fn.Armature = function($id) 
{


	//var id, animation, spriteCanvas, context, xpos = 0, ypos = 0, index = 0, numFrames = 40, frameSize = 142, width = 1024, height = 1024;
	var _id = $id;
	var _num;
	var animation, context, xpos = 0, ypos = 0, index = 0, numFrames = 5, frameWidth = spriteW, frameHeight = spriteH, width = 200, height = 206;

	var _pieces = [];



	this.createArmature = function(num) 
	{
	    
		_num = num;
		
	}

	this.createPiece = function(parentID, partID, drawX, drawY, w, h, pivotX, pivotY, posX, posY, zIndex, scale, rotate)
	{
		console.log(partID);
		var parentSprite = $('#'+parentID+_num);

		parentSprite.append('<div id="'+(partID+_num)+'" style="z-index:'+zIndex+';" class="armatureSprite"><canvas id="'+(partID+'Canvas'+_num)+'" class="armatureCanvas" width="'+w+'" height ="'+h+'"></canvas></div>');

		var pieceSprite = $('#'+partID+_num);
		var spriteCanvas = document.getElementById(partID+'Canvas'+_num);
		if (scale == undefined) scale = 1;
		if (rotate == undefined) rotate = Math.random()*40 - 20;
		_pieces.push({sprite:pieceSprite,   	pivotX:pivotX,		pivotY:pivotY,		rot:rotate});
		context = spriteCanvas.getContext("2d");
		context.drawImage(image, drawX, drawY, w, h, 0, 0, w, h);
		TweenMax.to(pieceSprite,0,{x:posX,y:posY, scale: scale});
	}

	this.animatePieces = function()
	{
		var i = 0;
		var limit = _pieces.length;

		for (i=0;i<limit;++i)
		{
			var piece = _pieces[i];
			TweenMax.to(piece.sprite,(Math.random() * 4)+2,{ease:Strong.easeInOut, delay: Math.random(), rotation:piece.rot, transformOrigin:piece.pivotX+'px '+piece.pivotY+'px', yoyo:true, repeat:-1});
		}
	}


	function startLoop() {
		clearInterval(animation);
		animation = setInterval(function(){loopTimer()},1000/12);
	}


    return this;
};