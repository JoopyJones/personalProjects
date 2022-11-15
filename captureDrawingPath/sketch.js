let img;
let offset = 10;
let m = new Map();    //this keeps track of the points we've already added, to avoid adding duplicate points.
let points = [];      //this contains all of the (x,y) points of our drawing path.
let dots = [];	      //this contains the points to draw to the screen - representing the points we've already to our path.

function setup(){
  createCanvas(350,515);
  img = loadImage('./LeJoop SeeThrough.jpg');
}


function draw(){
  background(255);
  image(img,0,0);
  drawDots();
  drawViewBox();

}


function drawViewBox()
{
  strokeWeight(1);
  stroke(0);
  noFill();
  rect(mouseX-offset/2, mouseY-offset/2, offset, offset);
}

//this function will capture offset^2px sections of black lines while the mouse is dragged.
function mouseDraggedTest()
{
  let _mouseX = mouseX;
  let _mouseY = mouseY;

  let range = offset/2;

  for(let i=-range; i< range; i++)
  {
    for(let j=-range; j<range; j++)
    {
      let pix = img.get(_mouseX+i, _mouseY+j);


      //check if the current pixel is black.
      //Map = Key: x value, Value: map of y values.
      if(hex(red(pix),2) <= "0E" && hex(blue(pix),2) <= "0E" && hex(green(pix),2) <= "0E")
      {
        //difference between the current position and the center of the image.
        let posX = (_mouseX+i)-(width/2);
        let posY = (_mouseY+j)-(height/2);

        //check if we've seen this (x,y) before, if not add to map.
        if(m.has(posX))
        {
          if(!m.get(posX).has(posY))
          {
            m.get(posX).set(posY,1);
            points.push({x: posX, y: posY});
            dots.push({x:_mouseX, y:_mouseY});
          }

        }
        else {
          m.set(posX, new Map());
          m.get(posX).set(posY,1);
          points.push({x: posX, y: posY});
          dots.push({x:_mouseX, y:_mouseY});
        }
      }
    }
  }
}

//this function will capture single (x,y) points of black lines when the mouse is clicked.
function mouseClicked()
{
  let _mouseX = mouseX;
  let _mouseY = mouseY;

  let pix = img.get(_mouseX, _mouseY);

  //check if the current pixel is black.
  //Map = Key: x value, Value: map of y values.
  if(hex(red(pix),2) <= "15" && hex(blue(pix),2) <= "15" && hex(green(pix),2) <= "15")
  {
    //difference between the current position and the center of the image.
    let posX = (_mouseX)-(width/2);
    let posY = (_mouseY)-(height/2);

    //check if we've seen this (x,y) before, if not add to map.
    if(m.has(posX))
    {
      if(!m.get(posX).has(posY))
      {
        m.get(posX).set(posY,1);
        points.push({x: posX, y: posY});
        dots.push({x:_mouseX, y:_mouseY});
      }

    }
    else {
      m.set(posX, new Map());
      m.get(posX).set(posY,1);
      points.push({x: posX, y: posY});
      dots.push({x:_mouseX, y:_mouseY});
    }
  }
}


//Converts the nested hashmap to an array of (x,y) objects.
//DEPRECIATED.
function mapToArray()
{
  m.forEach((values, keys) =>{
  let temp = keys;
  values.forEach((values,keys) => {
      points.push({x: temp, y: keys});
  	})
  });

}

//Prints out the array, so we can copy all the (x,y) points to a js file.
function printArray(){
  var ret = "";

  points.forEach(values => {
  	ret = ret + "{x: " + values.x + ", y: " + values.y + "},\n" ;
  });

  console.log(ret);
}

function drawDots()
{
  for(let i=0; i<dots.length; i++)
  {
    stroke('red');
    strokeWeight(3);
    point(dots[i].x, dots[i].y);
  }
}
