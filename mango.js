class Mango
{
    constructor(x, y )
    {
      var options = {
          isStatic: true,
          restitution: 0.3

      }

      this.body = Bodies.circle(x , y , 50 ,options);
      this.image = loadImage("MatterJSBoilerPlate-master/mango.png");

      this.radius = 50;
      World.add(world , this.body);
    }
    
    display()
    {
     var pos = this.body.position; 

     image(this.image , pos.x , pos.y , 100 , 100)
     
    }
}