int led = 6;
int value = 0;

void setup()  {
  Serial.begin(9600);
  pinMode(led, OUTPUT);
  Serial.write("s"); //send byte to say you're ready
}

void loop() {

  if (Serial.available()){
    value = Serial.parseInt();
  }

  analogWrite(led, value);

}



