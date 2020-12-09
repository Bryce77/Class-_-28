class Boy{
    constructor(x,y,width,height){
  
        this.image = loadImage("sprites/boy.png");

        var options = {
        isStatic: true,
        restitution: 0.3,
        friction: 0.5,
        density: 1.2,
        }

        
        this.width = width;
        this.height = height;
        
        
        this.body = Matter.Bodies.rectangle(200,630,50,900,options);

        

    
        World.add(world, this.body); 
      
    }

    display(){
        var pos = this.body.position;

        imageMode(CENTER);

        image(this.image, pos.x, pos.y, 200, 300);


    }
} 