class Striker{
    constructor(x,y){
        var options={
            frictionAir:0.015,
            restitution:1,
            mass:7.5
        }
        this.body=Bodies.circle(x,y,25,options);
        this.radius=25;
        World.add(world,this.body);
        
    }
    display(){
        ellipseMode(RADIUS);
        fill("white");
        stroke(0);
        strokeWeight(3);
        ellipse(this.body.position.x,this.body.position.y,this.radius);
        
     
    }
}