var zebras = 0, zebydracorns = 0, strongmen = 0, spriteW=100, spriteH=100 

var image, image2, sumoSource;


$( document ).ready(function() {
    loadSpriteSheet();
});



function onFirstLoaded() {

	loadSecondImage();
}

function onSecondLoaded()
{
	loadSumoSource();
}

function onSumoLoaded()
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

function loadSumoSource() {

	sumoSource = new Image();
	sumoSource.src = "sumo.png";
	sumoSource.onload = onSumoLoaded;
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
		/*var zebydracornID = "zebydracornSprite--"+i;
				var zebydracorn = new Zebydracorn(zebydracornID)
				zebydracorn.createZebydracorn(i,image);
*/


		
		//createZebra();
		//createZebydracorn();
		//createStrongman();
		switch(i)
		{
			case 0:
				var zebraID = "zebraSprite--"+i;
				var zebra = new Zebra(zebraID)
				zebra.createZebra(i,image);
				break;

			case 1:
				var zebydracornID = "zebydracornSprite--"+i;
				var zebydracorn = new Zebydracorn(zebydracornID)
				zebydracorn.createZebydracorn(i,image);
				break;

			case 2:
				var sumoID = "sumoSprite--"+i;
		var sumo = new Sumo(sumoID)
		sumo.createSumo(i,sumoSource);
				//var strongmanID = "strongmanSprite--"+i;
				//var strongman = new Strongman(strongmanID)
				//strongman.createStrongman(i,image2);
				break;
		}
	}

	


	_stats = new Stats();
	_stats.domElement.style.position = 'absolute';
	_stats.domElement.style.top = '0px';
	_stats.domElement.style.left = '10px';
	container.appendChild( _stats.domElement );
	_stats.update();

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



function Zebydracorn(id)
{
	this._id = id;
}
Zebydracorn.inheritsFrom(Zebra);

Zebydracorn.prototype.createZebydracorn = function(num,imageAsset) 
{
	var zebydracornID = "zebydracornSprite--"+num;
	$(".zebra").append('<div id="'+zebydracornID+'" class="armatureSprite Sprite" ></div>');

	var rot = Math.random() * 30 - 15;

	this.createArmature(num, imageAsset);
	this.createPiece('zebydracornSprite','zebydracornBody',85,98,72,107,34,85,0,0,1000,1, Math.random()*10-5);

	// create right front leg
	this.createPiece('zebydracornBody','zebydracornBackForeLeg',26,0,60,38, 47, 29,-35,10,-10);
	this.createPiece('zebydracornBackForeLeg','zebydracornBackForeHoof',35,38,51,40, 40, 9,-35,5,-10);

	//create right back leg
	this.createPiece('zebydracornBody','zebydracornBackHindLeg',35,108,42,53, 28,14,5,70,-10);
	this.createPiece('zebydracornBackHindLeg','zebydracornBackHindHoof',35,165,42,40, 38,9,-27,38,-10);

	//create neck
	this.createPiece('zebydracornBody','zebydracornNeck',95,60,63,30, 30,24,15,-5,10);
		
	//multi heads
	var heads = Math.ceil(Math.random()*8);
	for (var n=0;n<heads;++n)
	{
		limit = Math.ceil(Math.random()*20);
		var prevNeck = 'zebydracornNeck';
		// multi long necks
		for (i=0;i<limit;++i)
		{
			this.createPiece(prevNeck,'zebydracornNeck'+n+'_'+i,95,60,63,30, 30,24,10,-5,-10,1,rot);
			prevNeck = 'zebydracornNeck'+n+'_'+i;
		}
		this.createPiece(prevNeck,'zebydracornHead'+n,95,0,63,61, 42, 43,0,-50,10);
	}

	// create left front leg
	this.createPiece('zebydracornBody','zebydracornFrontForeLeg',0,77,77,32,60,15,-45,20,10);
	this.createPiece('zebydracornFrontForeLeg','zebydracornFrontForeHoof',9,108,20,58,10,14,5,11,10);


	// create left back leg
	this.createPiece('zebydracornBody','zebydracornFrontHindLeg',164,9,36,54,21,17,33,85,10);
	this.createPiece('zebydracornFrontHindLeg','zebydracornFrontHindHoof',174,66,26,59,18,9,10,40,10);

	//create tail
	this.createPiece('zebydracornBody','zebydracornTail',167,144,32,62,5,13,58,77,10);

	//multi tails
	var tails = Math.ceil(Math.random()*2);
	var length = Math.ceil(Math.random()*10);
	for (var n=0;n<tails;++n)
	{
		var prevTail = 'zebydracornTail';
		for (i=0;i<length;++i)
		{
			this.createPiece(prevTail,'zebydracornTail'+n+'_'+i,167,144,32,62,5,13,20,35,10,.9,rot);
			prevTail = 'zebydracornTail'+n+'_'+i;
		}
	}

	this.animatePieces();
	
	var sprite = $('#'+zebydracornID);
	TweenMax.to(sprite,2,{css:{transform:"translateX("+((Math.random()*100)+250)*this._num+"px) translateY("+Math.random()*100+"px) "}});//       scale("+scale+","+scale+") "}});  //top:Math.random() * 300, left:Math.random() * 700, rotation:Math.random()*360});
	//TweenMax.to(sprite,2,{opacity:1});
	zebydracorns++;
}



function Strongman(id)
{
	this._id = id;
}
Strongman.inheritsFrom(Armature);

Strongman.prototype.createStrongman = function(num, imageAsset) 
{
	var strongmanID = "strongmanSprite--"+num;
	$(".strongman").append('<div id="'+strongmanID+'" class="armatureSprite Sprite" ></div>');

	this.createArmature(num, imageAsset);

	var rot = Math.random*180 - 90;

	//309, 717, 414, 516
	this.createPiece('strongmanSprite','strongmanBody',170, 388, 214, 286,111,176,0,0,1000,1, Math.random()*10-5);
	this.createPiece('strongmanBody','strongmanRightShoulder', 303, 710, 107, 112, 43, 148, 178, 20, 10, 1, rot);
	this.createPiece('strongmanRightShoulder','strongmanRightArm', 13, 107, 122, 179, 43, 148, 20, -120, 10, 1, rot);
	
	this.createPiece('strongmanBody','strongmanRightThigh', 274, 854, 124, 150, 43, 148, 110, 205, 10, 1, Math.random()*10-5);
	this.createPiece('strongmanRightThigh','strongmanRightLeg', 1, 536, 122, 200, 43, 148, 70, 90, 10, 1, Math.random()*10-5);

	this.createPiece('strongmanBody','strongmanLeftShoulder', 153, 710, 107, 112, 43, 148, -38, 20, 10, 1, rot);
	this.createPiece('strongmanLeftShoulder','strongmanLeftArm', 13, 301, 122, 179, 43, 148, -30, -120, 10, 1, rot);

	this.createPiece('strongmanBody','strongmanLeftThigh', 144, 854, 124, 150, 43, 148, -18, 205, 10, 1, Math.random()*10-5);
	this.createPiece('strongmanLeftThigh','strongmanLeftLeg', 1, 779, 122, 200, 43, 148, -70, 90, 10, 1, Math.random()*10-5);

	
	this.animatePieces();

	var sprite = $('#'+strongmanID);
	TweenMax.to(sprite,2,{css:{transform:"translateX("+((Math.random()*100)+200)*this._num+"px) translateY("+Math.random()*20+"px) "}});//       scale("+scale+","+scale+") "}});  //top:Math.random() * 300, left:Math.random() * 700, rotation:Math.random()*360});
	
}



function Sumo(id)
{
	console.log(id);
	this._id = id;
}
Sumo.inheritsFrom(Armature);

Sumo.prototype.createSumo = function(num, imageAsset) 
{
	console.log('sumooo');
	var sumoID = "sumoSprite--"+num;
	$(".strongman").append('<div id="'+sumoID+'" class="armatureSprite Sprite" ></div>');

	this.createArmature(num, imageAsset);

	var rot = Math.random()*180 - 90;

	//309, 717, 414, 516
	this.createPiece('sumoSprite','sumoBody',95, 136, 123, 137,63,105,0,0,1000,1, Math.random()*10-5);
	this.createPiece('sumoBody','sumoHead',130, 0, 53, 72,27,61,35,-10,1000,1, Math.random()*10-5);
	this.createPiece('sumoBody','sumoTits',96, 95, 123, 42,62,14,0,40,10,1, Math.random()*10-5);

	this.createPiece('sumoBody','sumoRightShoulder', 182, 41, 74, 54, 19, 22, 90, 13, 10, 1, rot);
	this.createPiece('sumoRightShoulder','sumoRightArm', 255, 0, 62, 96, 37, 19, 30, 20, 10, 1, rot);

	this.createPiece('sumoBody','sumoLeftShoulder', 58, 41, 74, 54, 62, 22, -38, 13, 10, 1, rot);
	this.createPiece('sumoLeftShoulder','sumoLeftArm', 0, 0, 59, 96, 24, 22, 0, 10, 10, 1, rot);

	
	this.createPiece('sumoBody','sumoRightThigh', 218, 95, 99, 73, 30, 30, 70, 70, -10, 1, rot);
	this.createPiece('sumoRightThigh','sumoRightLeg', 255, 167, 62, 122, 38, 22, 35, 25, 10, 1, Math.random()*10-5);

	this.createPiece('sumoBody','sumoLeftThigh', 0, 95, 99, 73, 74, 29, -38, 70, -10, 1, rot);
	this.createPiece('sumoLeftThigh','sumoLeftLeg', 0, 167, 59, 122, 27, 22, 0, 25, 10, 1, Math.random()*10-5);

	


	
	this.animatePieces();

	var sprite = $('#'+sumoID);
	TweenMax.to(sprite,2,{css:{transform:"translateX("+((Math.random()*100)+200)*this._num+"px) translateY("+Math.random()*20+"px) "}});//       scale("+scale+","+scale+") "}});  //top:Math.random() * 300, left:Math.random() * 700, rotation:Math.random()*360});
	
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


Armature.prototype.animatePieces = function(rot)
{
	var i = 0;
	var limit = this._pieces.length;

	for (i=0;i<limit;++i)
	{
		var piece = this._pieces[i];
		console.log(piece.num+'  '+piece.id);
		TweenMax.to(piece.sprite,(Math.random() * 4)+2,{ease:Strong.easeInOut, delay: Math.random(), rotation:(rot == null) ? piece.rot : rot, transformOrigin:piece.pivotX+'px '+piece.pivotY+'px', yoyo:true, repeat:-1});
	}
}