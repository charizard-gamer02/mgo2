var monkey, monkey1,banana, banana1,rock, rock1,survivalTime,ground,ground1,bananaGroup,rockGroup
function preload(){
  monkey=addAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png")
}
function setup() {
  createCanvas(400, 400);


 monkey=createSprite(50, 400, 20, 20)

monkey.scale=0.15
 ground=createSprite(400, 400, 400, 20)
ground.scale=2
 bananaGroup=createGroup()
 rockGroup=createGroup()
  survivalTime=0
}
 



function draw(){ }
  
  background(255);
  stroke("black")
  textSize(20)
  fill("black")
  survivalTime=Math.ceil(frameCount/frameRate())
  text("Survival-Time:"+survivalTime,100,50)
  ground.velocityX=-3
  ground.x=ground.width/2
  monkey.collide(ground)
  
  if(keyDown("space")){
    monkey.velocityY=-5
    
  }
  monkey.velocityY=monkey.velocityY+0.8
   
  


function fruits(){
  if(frameCount%80===0){
     banana=createSprite(400,200,20,20);
    banana.y=random(120,200)
    banana=loadImage("Banana",banana1)
    banana.scale=0.05
    banana.velocityX=-3
    banana.lifetime=150
    bananaGroup.add(banana)
  }
}

function rock(){
  if(frameCount%300===0){
     rock=createSprite(400,380,20,20);
    
    rock=loadImage("Stone",stone1)
    rock.scale=0.2
    rock.velocityX=-3
    rock.lifetime=150
    rockGroup.add(rock)
  }
}


  
