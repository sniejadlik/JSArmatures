var zebras = 0, zebydracorns = 0, strongmen = 0, spriteW=100, spriteH=100 

var image, image2;


$( document ).ready(function() {
    loadSpriteSheet();
});



function onFirstLoaded() {

	loadSecondImage();
}

function onSecondLoaded()
{
	init();
	animate();
}

function loadSpriteSheet() {
	image = new Image();
    image.src = "ZebraCorn2.png";
    image.onload = onFirstLoaded;

}

function loadSecondImage() {
	image2 = new Image();
    image2.src = "NN_Characters.png";
    image2.onload = onSecondLoaded;

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
		//createZebra();
		//createZebydracorn();
		//createStrongman();
		var zebraID = "zebraSprite--"+i;
		var zebra = new Zebra(zebraID)
		zebra.createZebra(i,image);
	}

	


	_stats = new Stats();
	_stats.domElement.style.position = 'absolute';
	_stats.domElement.style.top = '0px';
	_stats.domElement.style.left = '10px';
	container.appendChild( _stats.domElement );
	_stats.update();

}



function createStrongman()
{
	$(".strongman").append('<div id="strongmanSprite--'+strongmen+'" class="armatureSprite Sprite" ></div>');

	var strongmanID = "strongmanSprite--"+strongmen;
	var strongman = new Armature(strongmanID);
	var rot = Math.random()*30;

	strongman.createArmature(strongmen, image2);

	//309, 717, 414, 516
	strongman.createPiece('strongmanSprite','strongmanBody',170, 388, 214, 286,111,176,0,0,1000,1, Math.random()*10-5);
	strongman.createPiece('strongmanBody','strongmanRightShoulder', 303, 710, 107, 112, 43, 148, 178, 20, 10, 1, Math.random()*10-5);
	strongman.createPiece('strongmanRightShoulder','strongmanRightArm', 13, 107, 122, 179, 43, 148, 20, -120, 10, 1, Math.random()*10-5);
	
	strongman.createPiece('strongmanBody','strongmanRightThigh', 274, 854, 124, 150, 43, 148, 110, 205, 10, 1, Math.random()*10-5);
	strongman.createPiece('strongmanRightThigh','strongmanRightLeg', 1, 536, 122, 200, 43, 148, 70, 90, 10, 1, Math.random()*10-5);

	strongman.createPiece('strongmanBody','strongmanLeftShoulder', 153, 710, 107, 112, 43, 148, -38, 20, 10, 1, Math.random()*10-5);
	strongman.createPiece('strongmanLeftShoulder','strongmanLeftArm', 13, 301, 122, 179, 43, 148, -30, -120, 10, 1, Math.random()*10-5);

	strongman.createPiece('strongmanBody','strongmanLeftThigh', 144, 854, 124, 150, 43, 148, -18, 205, 10, 1, Math.random()*10-5);
	strongman.createPiece('strongmanLeftThigh','strongmanLeftLeg', 1, 779, 122, 200, 43, 148, -70, 90, 10, 1, Math.random()*10-5);

	var sprite = $('#'+strongmanID);

	strongman.animatePieces();
	
	TweenMax.to(sprite,2,{css:{transform:"translateX("+((Math.random()*100)+200)*strongmen+"px) translateY("+Math.random()*20+"px) "}});//       scale("+scale+","+scale+") "}});  //top:Math.random() * 300, left:Math.random() * 700, rotation:Math.random()*360});
	

	strongmen++;
}


function createZebydracorn() 
{
	$(".zebra").append('<div id="zebydracornSprite--'+zebydracorns+'" class="armatureSprite Sprite" ></div>');
	
	var zebydracornID = "zebydracornSprite--"+zebydracorns;
	var zebydracorn = new Armature(zebydracornID);
	var rot = Math.random()*30;

	zebydracorn.createArmature(zebydracorns, image);
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
	var heads = Math.ceil(Math.random()*8);
	for (var n=0;n<heads;++n)
	{
		limit = Math.ceil(Math.random()*20);
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
	var tails = Math.ceil(Math.random()*2);
	var length = Math.ceil(Math.random()*10);
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





///////////////////////////
// Inheritance instantiation

Function.prototype.inheritsFrom = function( parentClassOrObject ){ 
	if ( parentClassOrObject.constructor == Function ) 
	{ 
		//Normal Inheritance 
		this.prototype = new parentClassOrObject;
		this.prototype.constructor = this;
		this.prototype.parent = parentClassOrObject.prototype;
	} 
	else 
	{ 
		//Pure Virtual Inheritance 
		this.prototype = parentClassOrObject;
		this.prototype.constructor = this;
		this.prototype.parent = parentClassOrObject;
	} 
	return this;
} 








function Zebra(id) {
	this._id = id;
}

Zebra.inheritsFrom(Armature);


Zebra.prototype.createZebra = function(num,imageAsset)
{

	var zebraID = this._id;
	$(".zebra").append('<div id="'+zebraID+'" class="armatureSprite Sprite" ></div>');
	
	var rot = Math.random()*30;

	this.createArmature(num, imageAsset);
	this.createPiece('zebraSprite','zebraBody',85,98,72,107,34,85,0,0,1000,1, Math.random()*10-5);

	// create right front leg
	this.createPiece('zebraBody','zebraBackForeLeg',26,0,60,38, 47, 29,-35,10,-10);
	this.createPiece('zebraBackForeLeg','zebraBackForeHoof',35,38,51,40, 40, 9,-35,5,-10);

	//create right back leg
	this.createPiece('zebraBody','zebraBackHindLeg',35,108,42,53, 28,14,5,70,-10);
	this.createPiece('zebraBackHindLeg','zebraBackHindHoof',35,165,42,40, 38,9,-27,38,-10);

	//create neck
	this.createPiece('zebraBody','zebraNeck',95,60,63,30, 30,24,15,-5,10);
		
	//create head
	this.createPiece('zebraNeck','zebraHead',95,0,63,61, 42, 43,-5,-50,10);

	// create left front leg
	this.createPiece('zebraBody','zebraFrontForeLeg',0,77,77,32,60,15,-45,20,10);
	this.createPiece('zebraFrontForeLeg','zebraFrontForeHoof',9,108,20,58,10,14,5,11,10);

	// create left back leg
	this.createPiece('zebraBody','zebraFrontHindLeg',164,9,36,54,21,17,33,85,10);
	this.createPiece('zebraFrontHindLeg','zebraFrontHindHoof',174,66,26,59,18,9,10,40,10);

	//create tail
	this.createPiece('zebraBody','zebraTail',167,144,32,62,5,13,58,77,10);
	

	this.animatePieces();
	var sprite = $('#'+zebraID);
	TweenMax.to(sprite,2,{css:{transform:"translateX("+((Math.random()*100)+200)*this._num+"px) translateY("+Math.random()*20+"px) "}});//       scale("+scale+","+scale+") "}});  //top:Math.random() * 300, left:Math.random() * 700, rotation:Math.random()*360});
	//TweenMax.to(sprite,2,{opacity:1});
}






/////////////////////////////
//////  ARMATURE EXPERIMENTATION



function Armature(id) {

	this._id = id;
	this._num;
	this._context;

	this._pieces = [];
	this._piecesHash = [];

	this._asset;

	//this._xpos = 0
	//this._ypos = 0
	//this._index = 0
	//this._numFrames = 5
	//frameWidth = spriteW, frameHeight = spriteH, width = 200, height = 206;

}

Armature.prototype.createArmature = function(num,imageAsset) 
{
    console.log('creating armature'+num)
	this._num = num;
	this._asset = imageAsset;
	
}


Armature.prototype.createPiece = function(parentID, partID, drawX, drawY, w, h, pivotX, pivotY, posX, posY, zIndex, scale, rotate)
{
	
	var parentSprite = $('#'+parentID+'--'+this._num);
	var pID = partID+'--'+this._num;
	var cID = partID+'CanvasP'+this._num;

	console.log(partID+'    '+parentID+'--'+this._num+'       '+cID);

	parentSprite.append('<div id="'+pID+'" style="z-index:'+zIndex+';" class="armatureSprite"><canvas id="'+cID+'" class="armatureCanvas" width="'+w+'" height ="'+h+'"></canvas></div>');

	var pieceSprite = $('#'+pID);
	var spriteCanvas = document.getElementById(cID);
	if (scale == undefined) scale = 1;
	if (rotate == undefined) rotate = Math.random()*40 - 20;
	var partObj = {id:partID,	num:this._pieces.length,		sprite:pieceSprite,   	pivotX:pivotX,		pivotY:pivotY,		rot:rotate};
	this._pieces.push(partObj);
	this._piecesHash[partID] = partObj;
	this._context = spriteCanvas.getContext("2d");
	this._context.drawImage(this._asset, drawX, drawY, w, h, 0, 0, w, h);
	TweenMax.to(pieceSprite,0,{x:posX,y:posY, scale: scale});
}


Armature.prototype.animatePieces = function()
{
	var i = 0;
	var limit = this._pieces.length;

	for (i=0;i<limit;++i)
	{
		var piece = this._pieces[i];
		console.log(piece.num+'  '+piece.id);
		TweenMax.to(piece.sprite,(Math.random() * 4)+2,{ease:Strong.easeInOut, delay: Math.random(), rotation:piece.rot, transformOrigin:piece.pivotX+'px '+piece.pivotY+'px', yoyo:true, repeat:-1});
	}
}
