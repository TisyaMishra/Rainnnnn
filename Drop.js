class Drop{
  constructor(){
    
     this.x = random(width);
     this.y = random(-500 ,-500);
     this.z = random(0 , 20);
     this.leng = map(this.z , 0 , 20 , 10 , 20);
     this.yspeed = map(this.z , 0 , 20, 1 ,20);

  }

  fall(){

     this.y = this.y + this.yspeed;
     this.gravity = map(this.z , 0 , 20 , 0 , 0.2);
     this.yspeed = this.yspeed + this.gravity;

   if(this.y > height){

     this.y = random(-300 , -200);
     this.yspeed = random(this.z , 0 , 20 , 4 , 10);

   }

  }

   display(){

     var thic  = map(this.z , 0 , 20 , 1 , 3);
     strokeWeight(thic);
     stroke("blue");
     line(this.x , this.y , this.x , this.y + 10);

  }

}