var zebras = 0, zebydracorns = 0, strongmen = 0, spriteW=100, spriteH=100 

var image, image2, sumoSource, bulldogSource;


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
	bulldogSource = new Image();
    bulldogSource.src = "bulldog.png";
    bulldogSource.onload = onSecondLoaded;

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
	var limit = 5;
	for (i=0;i<limit;++i)
	{
		//var zebydracornID = "zebydracornSprite--"+i;
		//var zebydracorn = new Zebydracorn(zebydracornID)
		//zebydracorn.createZebydracorn(i,image);


		var rnd = Math.floor(Math.random()*4);
		
		//createZebra();
		//createZebydracorn();
		//createStrongman();
		switch(rnd)
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
				break;
			case 3:
				var bulldogID = "bulldog--"+i;
				var bulldog = new Bulldog(bulldogID);
				bulldog.createBulldog(i,bulldogSource);
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
	TweenMax.to(sprite,2,{css:{transform:"translateX("+((Math.random()*100)+100)*this._num+"px) translateY("+Math.random()*100+"px) "}});//       scale("+scale+","+scale+") "}});  //top:Math.random() * 300, left:Math.random() * 700, rotation:Math.random()*360});
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

Sumo.prototype.stomp = function()
{
	console.log('JUMPING');
	var sB = this._piecesHash['sumoBody'];
	var sH = this._piecesHash['sumoHead'];
	var sT = this._piecesHash['sumoTits'];
	var lT = this._piecesHash['sumoLeftThigh'];
	var lL = this._piecesHash['sumoLeftLeg'];
	var lS = this._piecesHash['sumoLeftShoulder'];
	var lA = this._piecesHash['sumoLeftArm'];
	var rT = this._piecesHash['sumoRightThigh'];
	var rL = this._piecesHash['sumoRightLeg'];
	var rS = this._piecesHash['sumoRightShoulder'];
	var rA = this._piecesHash['sumoRightArm'];

	var sA = Math.random() * 60 + 15;

	var tl = new TimelineMax({repeat:-1,repeatDelay:Math.random()*5});
	var timing = 1;

	tl.to(sB.sprite,timing,{ease:Strong.easeInOut, y:sB.originY-sA*.8, x:sB.originX-sA*.8, rotation:-sA+'deg', transformOrigin:sB.pivotX+'px '+sB.pivotY+'px'},'startRight'),
	tl.to(lT.sprite,timing,{ease:Strong.easeInOut, rotation:sA*.4+'deg', transformOrigin:lT.pivotX+'px '+lT.pivotY+'px'},'startRight'),
	tl.to(lL.sprite,timing,{ease:Strong.easeInOut, rotation:sA*.4+'deg', transformOrigin:lL.pivotX+'px '+lL.pivotY+'px'},'startRight'),
	tl.to(rL.sprite,timing,{ease:Strong.easeInOut, rotation:-sA*.8+'deg', transformOrigin:rL.pivotX+'px '+rL.pivotY+'px'},'startRight'),
	tl.to(lS.sprite,timing,{ease:Strong.easeInOut, rotation:sA*.75+'deg', transformOrigin:lS.pivotX+'px '+lS.pivotY+'px'},'startRight'),
	tl.to(lA.sprite,timing,{ease:Strong.easeInOut, rotation:sA*.75+'deg', transformOrigin:lA.pivotX+'px '+lA.pivotY+'px'},'startRight'),
	tl.to(sH.sprite,timing,{ease:Strong.easeInOut, rotation:sA*.75+'deg', transformOrigin:sH.pivotX+'px '+sH.pivotY+'px'},'startRight'),

	timing = .5;
	tl.add('stompRight','+= .2');
	tl.to(sB.sprite,timing,{ease:Strong.easeOut, y:sB.originY, x:sB.originX, rotation:'0deg', transformOrigin:sB.pivotX+'px '+sB.pivotY+'px'},'stompRight'),
	tl.to(lT.sprite,timing,{ease:Strong.easeOut, rotation:'0deg', transformOrigin:lT.pivotX+'px '+lT.pivotY+'px'},'stompRight'),
	tl.to(lL.sprite,timing,{ease:Strong.easeOut, rotation:'0deg', transformOrigin:lL.pivotX+'px '+lL.pivotY+'px'},'stompRight'),
	tl.to(rL.sprite,timing,{ease:Strong.easeOut, rotation:'0deg', transformOrigin:rL.pivotX+'px '+rL.pivotY+'px'},'stompRight'),
	tl.to(lS.sprite,timing,{ease:Strong.easeOut, rotation:'0deg', transformOrigin:lS.pivotX+'px '+lS.pivotY+'px'},'stompRight'),
	tl.to(lA.sprite,timing,{ease:Strong.easeOut, rotation:'0deg', transformOrigin:lA.pivotX+'px '+lA.pivotY+'px'},'stompRight'),
	tl.to(sH.sprite,timing,{ease:Strong.easeOut, rotation:'0deg', transformOrigin:sH.pivotX+'px '+sH.pivotY+'px'},'stompRight'),

	tl.add('sumoJiggle1','-=.3');
	tl.to(sT.sprite,timing,{ease:Elastic.easeOut, y:sT.originY + sA*.05,rotation:sA*.05+'deg', transformOrigin:sT.pivotX+'px '+sT.pivotY+'px'},'sumoJiggle1'),
	tl.to(sT.sprite,timing,{ease:Elastic.easeInOut, y: sT.originY, rotation:'0deg', transformOrigin:sT.pivotX+'px '+sT.pivotY+'px'},'sumoJiggle1 -=.3'),


	timing = 1;

	tl.add('startLeft');
	tl.to(sB.sprite,timing,{ease:Strong.easeInOut, y: -sA*.8, x:sB.originX+sA*.8, rotation:sA+'deg', transformOrigin:sB.pivotX+'px '+sB.pivotY+'px'},'startLeft'),
	tl.to(rT.sprite,timing,{ease:Strong.easeInOut, rotation:-sA*.4+'deg', transformOrigin:rT.pivotX+'px '+rT.pivotY+'px'},'startLeft'),
	tl.to(rL.sprite,timing,{ease:Strong.easeInOut, rotation:-sA*.4+'deg', transformOrigin:rL.pivotX+'px '+rL.pivotY+'px'},'startLeft'),
	tl.to(lL.sprite,timing,{ease:Strong.easeInOut, rotation:sA*.8+'deg', transformOrigin:lL.pivotX+'px '+lL.pivotY+'px'},'startLeft'),
	tl.to(rS.sprite,timing,{ease:Strong.easeInOut, rotation:-sA*.75+'deg', transformOrigin:rS.pivotX+'px '+rS.pivotY+'px'},'startLeft'),
	tl.to(rA.sprite,timing,{ease:Strong.easeInOut, rotation:-sA*.75+'deg', transformOrigin:rA.pivotX+'px '+rA.pivotY+'px'},'startLeft'),
	tl.to(sH.sprite,timing,{ease:Strong.easeInOut, rotation:-sA*.75+'deg', transformOrigin:sH.pivotX+'px '+sH.pivotY+'px'},'startLeft'),

	timing = .5;
	tl.add('stompLeft','+= .2');
	tl.to(sB.sprite,timing,{ease:Strong.easeOut, y:sB.originY, x:sB.originX, rotation:'0deg', transformOrigin:sB.pivotX+'px '+sB.pivotY+'px'},'stompLeft'),
	tl.to(rT.sprite,timing,{ease:Strong.easeOut, rotation:'0deg', transformOrigin:rT.pivotX+'px '+rT.pivotY+'px'},'stompLeft');
	tl.to(lL.sprite,timing,{ease:Strong.easeOut, rotation:'0deg', transformOrigin:lL.pivotX+'px '+lL.pivotY+'px'},'stompLeft'),
	tl.to(rL.sprite,timing,{ease:Strong.easeOut, rotation:'0deg', transformOrigin:rL.pivotX+'px '+rL.pivotY+'px'},'stompLeft'),
	tl.to(rS.sprite,timing,{ease:Strong.easeOut, rotation:'0deg', transformOrigin:rS.pivotX+'px '+rS.pivotY+'px'},'stompLeft'),
	tl.to(rA.sprite,timing,{ease:Strong.easeOut, rotation:'0deg', transformOrigin:rA.pivotX+'px '+rA.pivotY+'px'},'stompLeft'),
	tl.to(sH.sprite,timing,{ease:Strong.easeOut, rotation:'0deg', transformOrigin:sH.pivotX+'px '+sH.pivotY+'px'},'stompLeft'),

	tl.add('sumoJiggle2','-=.3');
	tl.to(sT.sprite,timing,{ease:Elastic.easeOut, y:sT.originY + sA*.05,rotation:-sA*.05+'deg', transformOrigin:sT.pivotX+'px '+sT.pivotY+'px'},'sumoJiggle2'),
	tl.to(sT.sprite,timing,{ease:Elastic.easeInOut, y: sT.originY, rotation:'0deg', transformOrigin:sT.pivotX+'px '+sT.pivotY+'px'},'sumoJiggle2 -=.4'),

	timing = 2;
	tl.add('sumoSquat');
	tl.to(sB.sprite,timing,{ease:Strong.easeInOut, y:sB.originY+sA*.8, transformOrigin:sB.pivotX+'px '+sB.pivotY+'px'},'sumoSquat'),
	tl.to(lT.sprite,timing,{ease:Strong.easeInOut, rotation:sA*.8+'deg', transformOrigin:lT.pivotX+'px '+lT.pivotY+'px'},'sumoSquat'),
	tl.to(lL.sprite,timing,{ease:Strong.easeInOut, rotation:-sA*.8+'deg', transformOrigin:lL.pivotX+'px '+lL.pivotY+'px'},'sumoSquat'),
	tl.to(lS.sprite,timing,{ease:Strong.easeInOut, rotation:15+'deg', transformOrigin:lS.pivotX+'px '+lS.pivotY+'px'},'sumoSquat'),
	tl.to(lA.sprite,timing,{ease:Strong.easeInOut, rotation:90+'deg', transformOrigin:lA.pivotX+'px '+lA.pivotY+'px'},'sumoSquat'),
	tl.to(rT.sprite,timing,{ease:Strong.easeInOut, rotation:-sA*.8+'deg', transformOrigin:rT.pivotX+'px '+rT.pivotY+'px'},'sumoSquat'),
	tl.to(rL.sprite,timing,{ease:Strong.easeInOut, rotation:sA*.8+'deg', transformOrigin:rL.pivotX+'px '+rL.pivotY+'px'},'sumoSquat'),
	tl.to(lT.sprite,timing,{ease:Strong.easeOut, rotation:'0deg', transformOrigin:lT.pivotX+'px '+lT.pivotY+'px'},'squatStop'),
	tl.to(lL.sprite,timing,{ease:Strong.easeOut, rotation:'0deg', transformOrigin:lL.pivotX+'px '+lL.pivotY+'px'},'squatStop'),
	tl.to(lS.sprite,timing,{ease:Strong.easeOut, rotation:'0deg', transformOrigin:lS.pivotX+'px '+lS.pivotY+'px'},'squatStop'),
	tl.to(lA.sprite,timing,{ease:Strong.easeOut, rotation:'0deg', transformOrigin:lA.pivotX+'px '+lA.pivotY+'px'},'squatStop'),
	tl.to(rT.sprite,timing,{ease:Strong.easeOut, rotation:'0deg', transformOrigin:rT.pivotX+'px '+rT.pivotY+'px'},'squatStop'),
	tl.to(rL.sprite,timing,{ease:Strong.easeOut, rotation:'0deg', transformOrigin:rL.pivotX+'px '+rL.pivotY+'px'},'squatStop'),
	tl.to(sB.sprite,timing,{ease:Strong.easeOut, y:sB.originY, transformOrigin:sB.pivotX+'px '+sB.pivotY+'px'},'squatStop'),
	//tl.to(lL.sprite,.5,{ease:Strong.easeInOut, rotation:'30deg', transformOrigin:lL.pivotX+'px '+lL.pivotY+'px'}, '-=.5'),
	
	//tl.to(b.sprite,1.5,{ease:Strong.easeInOut, rotation:'0deg', transformOrigin:b.pivotX+'px '+b.pivotY+'px'},'stomp'),
	//tl.to(lT.sprite,.5,{ease:Strong.easeInOut, rotation:'0deg', transformOrigin:lT.pivotX+'px '+lT.pivotY+'px'}, 'stomp'),
	//tl.to(lL.sprite,.5,{ease:Strong.easeInOut, rotation:'0deg', transformOrigin:lL.pivotX+'px '+lL.pivotY+'px'},'stomp');

	//tl.to(rT.sprite,1.5,{ease:Strong.easeInOut, rotation:'30deg', transformOrigin:rT.pivotX+'px '+rT.pivotY+'px'},'stomp'),
	//tl.to(rL.sprite,.5,{ease:Strong.easeInOut, rotation:'30deg', transformOrigin:rL.pivotX+'px '+rL.pivotY+'px'}, '-=.5'),
	//tl.to(rT.sprite,.5,{ease:Strong.easeInOut, rotation:'0deg', transformOrigin:rT.pivotX+'px '+rT.pivotY+'px'}, '-=.5'),
	//tl.to(rL.sprite,.5,{ease:Strong.easeInOut, rotation:'0deg', transformOrigin:rL.pivotX+'px '+rL.pivotY+'px'}, '-=.5');

	tl.play();
	//var piece = this._piecesHash['sumoRightThigh'];
	//var rot;
	//TweenMax.to(piece.sprite,(Math.random() * 4)+2,{ease:Strong.easeInOut, delay: Math.random(), rotation: piece.rot, transformOrigin:piece.pivotX+'px '+piece.pivotY+'px', yoyo:true, repeat:-1});
}

Sumo.prototype.squat = function(timeline)
{

}

Sumo.prototype.jump = function()
{
	TweenMax.to(piece.sprite,(Math.random() * 4)+2,{ease:Strong.easeInOut, delay: Math.random(), rotation:(rot == null) ? piece.rot : rot, transformOrigin:piece.pivotX+'px '+piece.pivotY+'px', yoyo:true, repeat:-1});
}


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
	this.createPiece('sumoRightShoulder','sumoRightArm', 255, 0, 62, 96, 37, 19, 20, 15, 10, 1, rot);

	this.createPiece('sumoBody','sumoLeftShoulder', 58, 41, 74, 54, 62, 22, -38, 13, 10, 1, rot);
	this.createPiece('sumoLeftShoulder','sumoLeftArm', 0, 0, 59, 96, 24, 22, -4, 14, 10, 1, rot);

	
	this.createPiece('sumoBody','sumoRightThigh', 218, 95, 99, 73, 30, 30, 60, 70, -10, 1, rot);
	this.createPiece('sumoRightThigh','sumoRightLeg', 255, 167, 62, 122, 38, 22, 40, 25, 10, 1, Math.random()*10-5);

	this.createPiece('sumoBody','sumoLeftThigh', 0, 95, 99, 73, 74, 29, -38, 70, -10, 1, rot);
	this.createPiece('sumoLeftThigh','sumoLeftLeg', 0, 167, 59, 122, 27, 22, 0, 25, 10, 1, Math.random()*10-5);

	//this.animatePieces();
	this.stomp();

	var sprite = $('#'+sumoID);
	TweenMax.to(sprite,0,{css:{transform:"translateX("+((Math.random()*100)+100)*this._num+"px) translateY("+Math.random()*20+"px) "}});//       scale("+scale+","+scale+") "}});  //top:Math.random() * 300, left:Math.random() * 700, rotation:Math.random()*360});
	
}









function Bulldog(id)
{
	console.log(id);
	this._id = id;
}
Bulldog.inheritsFrom(Armature);


Bulldog.prototype.headShake = function()
{
	var bB = this._piecesHash['bulldogBody'];
	var bH = this._piecesHash['bulldogHead'];
	var rE = this._piecesHash['bulldogRightEar'];
	var lE = this._piecesHash['bulldogLeftEar'];
	var bS = this._piecesHash['bulldogSnout'];

	var sA = Math.random() * 10 + 5;

	var tl = new TimelineLite();
	var timing = .4;

	var i;
	var limit = 6;
	for (i=0;i<limit;++i)
	{
		tl.to(bH.sprite,timing,{ease:Strong.easeIn, x:bH.originX+sA*(1/limit), y:bH.originY+sA*(1/limit),rotation:sA*(i/limit)+'deg', transformOrigin:bH.pivotX+'px '+bH.pivotY+'px'}),
		tl.to(bH.sprite,timing,{ease:Strong.easeIn, x:bH.originX-sA*(1/limit), y:bH.originY-sA*(1/limit),rotation:-sA*(i/limit)+'deg', transformOrigin:bH.pivotX+'px '+bH.pivotY+'px'});
	}

	tl.to(bH.sprite,timing,{ease:Strong.easeOut, x:bH.originX, 		y:bH.originY,rotation:'0deg', transformOrigin:bH.pivotX+'px '+bH.pivotY+'px'});
}

Bulldog.prototype.legScratch = function()
{
	var bB = this._piecesHash['bulldogBody'];
	var hRL = this._piecesHash['bullDogHindRightLeg'];
	var fRL = this._piecesHash['bullDogForeRightLeg'];
	var fLL = this._piecesHash['bullDogForeLeftLeg'];
	var bH = this._piecesHash['bulldogHead'];
	var bS = this._piecesHash['bulldogSnout'];
	var rE = this._piecesHash['bulldogRightEar'];
	var lE = this._piecesHash['bulldogLeftEar'];
	var tl = new TimelineMax({repeat:-1, repeatDelay: Math.random()* 10});

	var sA = Math.random() * 10 + 90;
	var timing = .4;

	tl.to(bB.sprite,timing,{ease:Strong.easeInOut,rotation:sA*.2+'deg', transformOrigin:bB.pivotX+'px '+bB.pivotY+'px'},'scratch');
	tl.to(fRL.sprite,timing,{ease:Strong.easeInOut,rotation:-sA*.2+'deg', transformOrigin:fRL.pivotX+'px '+fRL.pivotY+'px'},'scratch');
	tl.to(fLL.sprite,timing,{ease:Strong.easeInOut,rotation:-sA*.2+'deg', transformOrigin:fLL.pivotX+'px '+fLL.pivotY+'px'},'scratch');
	tl.to(hRL.sprite,timing,{ease:Strong.easeInOut, x:hRL.originX+sA*.1, y:hRL.originY-sA*.2,rotation:-sA+'deg', transformOrigin:hRL.pivotX+'px '+hRL.pivotY+'px'},'scratch'),
	tl.to(bH.sprite,timing,{ease:Strong.easeInOut, x:bH.originX-.2, y:bH.originY+15,rotation:-70+'deg', transformOrigin:bH.pivotX+'px '+bH.pivotY+'px'},'scratch');
	tl.to(rE.sprite,timing,{ease:Strong.easeInOut,rotation:40+'deg', transformOrigin:rE.pivotX+'px '+rE.pivotY+'px'},'scratch');
	tl.to(bS.sprite,timing,{ease:Strong.easeInOut,rotation:16+'deg', transformOrigin:bS.pivotX+'px '+bS.pivotY+'px'},'scratch');
	var i;
	var limit = 8;
	timing = .1;
	for (i=0;i<limit;++i)
	{
		tl.to(bH.sprite,timing,{ease:Strong.easeInOut,rotation:-70+'deg', transformOrigin:bH.pivotX+'px '+bH.pivotY+'px'}),
		tl.to(hRL.sprite,timing,{ease:Strong.easeInOut, x:hRL.originX+sA*.1, y:hRL.originY-sA*.2,rotation:-sA+(Math.random()*30-15)+'deg', transformOrigin:hRL.pivotX+'px '+hRL.pivotY+'px'});
	}
	var timing = .4;
	tl.to(bB.sprite,timing,{ease:Strong.easeInOut,rotation:'0deg', transformOrigin:bB.pivotX+'px '+bB.pivotY+'px'},'scratchDone');
	tl.to(fRL.sprite,timing,{ease:Strong.easeInOut,rotation:'0deg', transformOrigin:fRL.pivotX+'px '+fRL.pivotY+'px'},'scratchDone');
	tl.to(fLL.sprite,timing,{ease:Strong.easeInOut,rotation:'0deg', transformOrigin:fLL.pivotX+'px '+fLL.pivotY+'px'},'scratchDone');
	tl.to(hRL.sprite,timing,{ease:Strong.easeInOut, x:hRL.originX, y:hRL.originY,rotation:'0deg', transformOrigin:hRL.pivotX+'px '+hRL.pivotY+'px'},'scratchDone'),
	tl.to(bH.sprite,timing,{ease:Strong.easeInOut, x:bH.originX, y:bH.originY,rotation:'0deg', transformOrigin:bH.pivotX+'px '+bH.pivotY+'px'},'scratchDone');
	tl.to(rE.sprite,timing,{ease:Strong.easeInOut,rotation:'0deg', transformOrigin:rE.pivotX+'px '+rE.pivotY+'px'},'scratchDone');
	tl.to(bS.sprite,timing,{ease:Strong.easeInOut,rotation:'0deg', transformOrigin:bS.pivotX+'px '+bS.pivotY+'px'},'scratchDone');

}

Bulldog.prototype.headTilt = function()
{

	var bB = this._piecesHash['bulldogBody'];
	var bH = this._piecesHash['bulldogHead'];
	var rE = this._piecesHash['bulldogRightEar'];
	var lE = this._piecesHash['bulldogLeftEar'];
	var bS = this._piecesHash['bulldogSnout'];

	var sA = Math.random() * 5;

	var tl = new TimelineMax({repeat:-1, yoyo:true});
	var timing = .4;

	var i;
	var limit = 6;
	for (i=0;i<limit;++i)
	{
		tl.to(bH.sprite,timing,{ease:Strong.easeInOut, x:bH.originX+sA*(1/limit), y:bH.originY+sA*(1/limit),rotation:sA*(i/limit)+'deg', transformOrigin:bH.pivotX+'px '+bH.pivotY+'px'}),
		tl.to(bH.sprite,timing,{ease:Strong.easeInOut, x:bH.originX-sA*(1/limit), y:bH.originY-sA*(1/limit),rotation:-sA*(i/limit)+'deg', transformOrigin:bH.pivotX+'px '+bH.pivotY+'px'});
	}

	tl.to(bH.sprite,timing,{ease:Strong.easeOut, x:bH.originX, 		y:bH.originY,rotation:'0deg', transformOrigin:bH.pivotX+'px '+bH.pivotY+'px'});
}

Bulldog.prototype.pant = function()
{
	var bM = this._piecesHash['bulldogMouth'];
	var bC = this._piecesHash['bulldogChest'];
	TweenMax.to(bM.sprite,.4,{ease:Strong.easeIn, y:bM.originY-5, rotation:0+'deg', transformOrigin:bM.pivotX+'px '+bM.pivotY+'px', yoyo:true, repeat:-1});
	TweenMax.to(bC.sprite,.6,{ease:Strong.easeInOut, y:bC.originY-3, x:bC.originX+1,rotation:0+'deg', transformOrigin:bC.pivotX+'px '+bC.pivotY+'px', yoyo:true, repeat:-1});

}

Bulldog.prototype.tailWag = function()
{
	var bT = this._piecesHash['bullDogTail'];

	TweenMax.to(bT.sprite,.2,{ease:Strong.easeInOut, rotation:15+'deg', transformOrigin:bT.pivotX+'px '+bT.pivotY+'px', yoyo:true, repeat:-1});
}


Bulldog.prototype.createBulldog = function(num, imageAsset) 
{
	var bulldogID = "bulldogSprite--"+num;
	$(".strongman").append('<div id="'+bulldogID+'" class="armatureSprite Sprite" ></div>');

	this.createArmature(num, imageAsset);

	this.createPiece('bulldogSprite','bulldogBody',85, 0, 130, 120,73,59,0,0,1000,1, Math.random()*10-5);
	this.createPiece('bulldogBody','bulldogChest',215,0, 97,96,58,52,33,20,10,1);
	this.createPiece('bulldogBody', 'bullDogForeRightLeg',207,95,49,104,30,34,55,32,10,1);
	this.createPiece('bulldogBody', 'bullDogForeLeftLeg',175,119,32,79,18,20,90,45,-10,1);
	this.createPiece('bulldogBody', 'bullDogHindRightLeg',55,132,57,67,27,29,-3,70,10,1);
	this.createPiece('bulldogBody', 'bullDogHindLeftLeg',111,132,59,67,29,29,20,60,-10,1);
	this.createPiece('bulldogBody','bulldogHead',0, 30, 82, 82,42,46,65,-35,10,1, Math.random()*10-5);
	this.createPiece('bulldogHead','bulldogRightEar',0,0,28,31,21,16,-2,10,10,1);
	this.createPiece('bulldogHead','bulldogLeftEar',55,0,27,31,11,18,50,0,10,1);
	this.createPiece('bulldogHead','bulldogSnout',0,110,56,51,28,11,20,18,10,1);
	this.createPiece('bulldogSnout','bulldogMouth',0,161,56,38,30,13,0,20,-10,1);
	
	this.createPiece('bulldogBody', 'bullDogTail',27,0,30,30,20,18,-12,55,-10,1);

	this.pant();
	this.tailWag();
	//this.headTilt();
	this.legScratch();

	var sprite = $('#'+bulldogID);
	TweenMax.to(sprite,0,{css:{transform:"translateX("+((Math.random()*100)+100)*this._num+"px) translateY("+Math.random()*20+"px) "}});//       scale("+scale+","+scale+") "}});  //top:Math.random() * 300, left:Math.random() * 700, rotation:Math.random()*360});
	
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
	var partObj = {id:partID,	num:this._pieces.length,	sprite:pieceSprite,   	pivotX:pivotX,		pivotY:pivotY,		originX:posX,	originY:posY,	rot:rotate};
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