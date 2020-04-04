




class Robot{
  static Up = 0
  static Down = 1
  static Left = 2
  static Right = 3

  constructor(map){
    this.map = map.map;
    this.state = Robot.Right;
    this.x = 1;
    this.y = 1;
    this.map[1][1] = false
  }
  setLocation(x, y){
    this.x = x
    this.y = y
  }
  go(){
    while(this.canMove()){
              switch(this.state){
                case Robot.Up:
                  if(this.canUp()){
                    this.map[this.x-1][this.y] = false;
                    this.setLocation(this.x-1, this.y);
                  }else{
                    this.state = Robot.Right
                  }
                break
                case Robot.Down:
                  if(this.canDown()){
                    this.map[this.x+1][this.y] = false;
                    this.setLocation(this.x+1, this.y);
                  }else{
                    this.state = Robot.Left
                  }
                break
                case Robot.Left:
                  if(this.canLeft()){
                    this.map[this.x][this.y-1] = false;
                    this.setLocation(this.x, this.y-1);
                  }else{
                    this.state = Robot.Up
                  }
                break
                case Robot.Right:
                  if(this.canRight()){
                    this.map[this.x][this.y+1] = false;
                    this.setLocation(this.x, this.y+1);
                  }else{
                    this.state = Robot.Down
                  }
                break
              }
    }
  }
  canUp(){
    return this.map[this.x-1][this.y]
  }
  canLeft(){
    return this.map[this.x][this.y-1]
  }
  canRight(){
    return this.map[this.x][this.y+1]
  }
  canDown(){
    return this.map[this.x+1][this.y]
  }
  canMove(){
    return (this.canLeft() || this.canDown() || this.canRight() || this.canUp())
  }
}

class Map{
  constructor(m,n){
    this.m = m
    this.n = n
    this.map = this.generator()
  }
  pass(x, y){
    this.map[x][y] = false;
  }
  generator(){
    var result = []
    for(var i = 0; i< this.m + 2; i++){
      result.push([])
      for(var j = 0; j < this.n + 2; j++){
        result[i][j] = true
        if(i == 0 || i== this.m+1){
          result[i][j] = false
        }
        if(j == 0 || j == this.n+1){
          result[i][j] = false
        }
      }
    }
    return result;
  }
}

function locationRobot(m,n){
  var map = new Map(m,n)
  var robot = new Robot(map)
  robot.go()
  return ([robot.x ,robot.y])
}
