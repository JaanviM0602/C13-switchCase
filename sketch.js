var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;
var cloud, cloudImg
var obstacle, obstacle1,obstacle2,obstacle3,obstacle4,obstacle5,obstacle6
var score = 0


function preload() {
trex_running = loadAnimation("trex1.png", "trex3.png", "trex4.png");
cloudImg = loadImage("cloud.png");
trex_collided = loadImage("trex_collided.png");
groundImage = loadImage("ground2.png");
obstacle1 = loadImage("obstacle1.png");
obstacle2 = loadImage("obstacle2.png");
obstacle3 = loadImage("obstacle3.png");
obstacle4 = loadImage("obstacle4.png");
obstacle5 = loadImage("obstacle5.png");
obstacle6 = loadImage("obstacle6.png");
}


function setup() {
    createCanvas(600, 200);
    //create a trex sprite
    trex = createSprite(50,160,20,50);
    trex.addAnimation("running", trex_running);
    trex.scale = 0.5;
    //create a ground sprite
    ground = createSprite(200,180,400,20);
    ground.addImage("ground",groundImage);
    ground.x = ground.width /2;
    ground.velocityX = -4;
    invisible_ground = createSprite(200,190,400,10);
    invisible_ground.visible = false;
}


function draw() {
    
    background(255);
    //jump when the space button is pressed
    if (keyDown("space") && (trex.y>160)) {
    trex.velocityY = -10;
    }
    trex.velocityY = trex.velocityY + 0.8
    if (ground.x < 0) {
    ground.x = ground.width / 2;
    }
    trex.collide(invisible_ground);
    spawn_clouds();
    spawn_obstacles();
    drawSprites();
    text("score:" + score,500,50);
    score += Math.round(frameCount/60);
}


function spawn_clouds() {
    if(frameCount%60 == 0) {
        cloud = createSprite(600,100);
        cloud.addImage("cloudImg",cloudImg);
        cloud.scale = 0.1;
        cloud.y = Math.round(random(60,120));
        cloud.depth = trex.depth;
        trex.depth++
        cloud.velocityX = -3;
        cloud.lifetime = 200

    }
}

function spawn_obstacles() {
    if(frameCount%60 == 0) {
        obstacle = createSprite(600,170);
        obstacle.velocityX = -4
        var r = Math.round(random(1,6));
        switch(r) {
            case 1: obstacle.addImage("obstacle1",obstacle1);
            break;
            case 2: obstacle.addImage("obstacle2",obstacle2);
            break;
            case 3: obstacle.addImage("obstacle3",obstacle3);
            break;
            case 4: obstacle.addImage("obstacle4",obstacle4);
            break;
            case 5: obstacle.addImage("obstacle5",obstacle5);
            break;
            case 6: obstacle.addImage("obstacle6",obstacle6);
            break;
            default: break
            }
            obstacle.scale = 0.07;
            obstacle.lifetime = 200;
    }
}