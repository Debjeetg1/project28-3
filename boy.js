class Boy
{
    constructor(x, y)
    {
      var options = {
          isStatic: true

      }

      this.body = Bodies.rectangle(x , y,  100 , 300 , options);
      this.image = loadImage("MatterJSBoilerPlate-master/boy.png");
      this.Width = 100;
      this.Height = 300

      World.add(world , this.body);
    }

    display()
    {
      var pos = this.body.position;

      rectMode(CENTER);
      image(this.image , pos.x , pos.y , 300 ,300);
    }
}