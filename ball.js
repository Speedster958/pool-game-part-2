class Ball{
    constructor(x,y,num,r,g,b){
        var ballOptions={
            restitution:1,
            frictionAir:0.015
        }
        this.body=Bodies.circle(x,y,25,ballOptions);
        this.radius=25;
        this.num=num;
        this.r=r;
        this.b=b;
        this.g=g;
        World.add(world,this.body);
    }
    display(){
    push();
    translate(this.body.position.x,this.body.position.y);
    rotate(this.body.angle);
    stroke("black");
    strokeWeight(3);
    ellipseMode(RADIUS);
    fill(this.r,this.g,this.b)
    ellipse(0,0,this.radius);
      
    noStroke();
    fill('white');
    ellipse(0,0,this.radius-8);

    fill('black');
    textSize(30);
    textAlign(CENTER);
    text(this.num,0,10);
    pop();
    }
}