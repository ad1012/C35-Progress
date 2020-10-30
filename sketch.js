var dog;
var happyDog; 
var database; 
var foodS; 
var foodStock;
var lastFed;

function preload(){
  dog = loadImage("images/dogImg.png");
  dogImage = loadImage("images/dogImg1.png")
}

function setup() {

  createCanvas(500,500);

  database=firebase.database();

  foodStock=database.ref('food');

  foodStock.on("value",readStock);

 

  dog1 = createSprite(250,250,20,20);
  dog1.addImage(dog);
  dog1.scale = 0.15;

  feed = createButton("Feed the Dog");
  feed.position(650,95);
  feed.mousePressed(feedDog);

  addFood = createButton("Add Food");
  addFood.position(750,95);
  addFood.mousePressed(addFood);

}


function draw() {  
  background(46,139,87);

  dog1.display();

  fill(255,255,254);
  textSize(15);
  if(lastFed>=12){
    text("Last Feed: " + lastFed%12 + "PM", 350,30);
  }else if(lastFed=0){
    text("Last Feed : 12 AM",350,30);
  }else{
    text("Last Feed : "+ lastFed +"AM",350,30);
  }
  
drawSprites();
}

function readStock(data){
  foodS = data.val();
}

function writeStock(x){

  if(x<=0){
    x=0;
  }else{
    x=x-1;
  }

  database.ref('/').update({
    Food:x
  })
}

function addFood(){
  position++
  database.ref('/').update({
    Food:foodS
  })
  }

  function feedDog(){
  
  dog2.addImage(dog)
  foodobject.updateFoodStock(foodobject.getFoodStock()-1)
   database.ref('/').update({
     Food:foodobject.getFoodStock(),
     FeedTime:hour()
   })
  }


