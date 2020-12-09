class Mango{
    constructor(x,y,width,height){
        this.image = loadImage("sprites/mango.png");
        

        var options = {
        isStatic: true,
        restitution: 0.3,
        friction: 0.5,
        density: 1.2,
        }

        
        this.width = width;
        this.height = height;
        
         this.body = Matter.Bodies.circle(x,y,50,options);
        


        

    
        World.add(world, this.body); 
      
    }

    display(){
        var pos = this.body.position;

        imageMode(CENTER);

        image(this.image, pos.x, pos.y, 40, 40);


    }
} 