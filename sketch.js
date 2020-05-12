var drops = [];
var dropsCount = 500;

function setup(){

    createCanvas (640 , 600);

  for(var t = 0; t < dropsCount; t++ ){
     
    drops[t] = new Drop();

   }

}

 function draw(){

   background(0);

   for(var t = 0; t < drops.length; t++){

     drops[t].display();
     drops[t].fall();

   }
 drawSprites();

 }

