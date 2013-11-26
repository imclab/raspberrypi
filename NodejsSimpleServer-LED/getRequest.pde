//Processing code to send status to node js server
boolean off = true;

void setup() {
  size(600, 300);
}

void draw() {
  if (off) fill(0);
  else fill(255, 0, 0);
  rect(0, 0, width, height);
}

void mousePressed() {
  if (off)
    loadStrings("http://24.5.79.113:8080/?status=on");
  else
    loadStrings("http://24.5.79.113:8080/?status=off");
  off = !off;
}
