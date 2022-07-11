var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;


function preload(){
pathImg = loadImage("path.png");
boyImg = loadAnimation("Runner-1.png","Runner-2.png");
}

function setup(){
 createCanvas(400,400);

// Movendo o fundo 
path=createSprite(200,200)
path.addImage(pathImg)
path.velocityY=2.2

//Criando menino que corre 
boy=createSprite(200,200)
boy.addAnimation("correndo",boyImg)
boy.scale=0.07
// Criando Boundary (Limite) esquerdo  
leftBoundary=createSprite(0,0,100,800);
leftBoundary.visible = false;
rightBoundary=createSprite(400,0,100,800)
rightBoundary.visible = false


//Crie Boundary direito 


}


function draw() {
background(0);
path.velocityY = 4;
boy.collide(leftBoundary)
boy.collide(rightBoundary)
// Menino se movendo no eixo X com o mouse
edges= createEdgeSprites();

boy.x=mouseX


 //Reiniciar o fundo
 if(path.y>400){
 path.y=200

 }



 drawSprites();

 }




