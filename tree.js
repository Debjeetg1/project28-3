class Tree
{
    constructor(x , y)
    {
      var options = {
          isStatic: true
      }

      this.body = Bodies.rectangle(x , y , 200 , 400 , options);
      this.Width = 200;
      this.Height = 400;
      this.image = loadImage("MatterJSBoilerPlate-master/tree.png");
      World.add(world , this.body);
    }

    display()
    {
      var pos = this.body.position;

      image(this.image , pos.x , pos.y , 700 ,700);
    }
}