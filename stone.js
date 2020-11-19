class Stone
{
    constructor(x , y , radius)
    {
      var options = 
      {
        isStatic: false
      }
      
      this.body = Bodies.circle(x , y , 20 , options);
      this.radius = 20;
      this.image = loadImage("MatterJSBoilerPlate-master/stone.png");
      World.add(world , this.body);
    }

    display()
    {
      var pos = this.body.position;

      // this.body.position.x = mouseX;
      // this.body.position.y = mouseY;

     
      image(this.image , pos.x , pos.y , 100 , 100);
    }
}