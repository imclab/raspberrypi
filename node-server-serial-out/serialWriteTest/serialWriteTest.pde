import processing.serial.*;

Serial myPort;
int value = 0;

void setup() {
  size(570, 350);

  String portName = Serial.list()[0];
  myPort = new Serial(this, portName, 9600);
  myPort.write(100);
}

void draw() {
  background(255);
  value = (int) map(mouseX, 0, width, 0, 255);
  if ( myPort.available() > 0) {  // If data is available,
    myPort.write(""+value+"\n");
  }
}
