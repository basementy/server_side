#include <ESP8266WiFi.h>
#include <ESP8266HTTPClient.h>
#include <ArduinoJson.h>
#include <DHT.h>
#include <Wire.h>

#define WIFI_SSID "JARVIS"
#define WIFI_PASSWORD "guiemah1204"

#define PIN_LED D8
#define DHTTYPE DHT22
#define DHTPIN  D6

String SERVER_URL = "http://192.168.0.12:3000";
String SENSOR_ID = "1";

String URL_SENSOR = SERVER_URL + "/devices/" + SENSOR_ID + "/add";

HTTPClient http;
DHT dht(DHTPIN, DHTTYPE, 11);

void setupPins(){
  pinMode(PIN_LED, OUTPUT);
  dht.begin();
  delay(2000);
}

void setupWifi(){
  Serial.println("Configurando Wifi");
  WiFi.begin(WIFI_SSID, WIFI_PASSWORD);
  Serial.print("Conectando");
  while (WiFi.status() != WL_CONNECTED) {
    delay(3000);
  }
  delay(3000);
  Serial.println();
  Serial.print("Conectado: ");
  Serial.println(WiFi.localIP());
}

void sendDataToServer(float temperature, float umidity){
  if((WiFi.status() == WL_CONNECTED)) {
      Serial.println("Enviando dados...");
      String dados = "{ \"temperature\" : \"" + String(temperature) + "\", \"umidity\" : \"" + String(umidity) + "\" }";
      http.begin(URL_SENSOR);
      http.addHeader("Content-Type", "application/json");
      int httpCode = http.POST(dados);
      if(httpCode == HTTP_CODE_OK){
        Serial.println("Dados enviados para o servidor");
      }else{
        Serial.println("Erro ao enviar os dados");
        Serial.print("Code:");
        Serial.println(httpCode);
      }
      http.end();
  }
}


void setup() {
  Serial.begin(9600);
  while (!Serial) {
    ;
  }
  setupPins();
  setupWifi();
}

void loop() {
  long tempo = millis();
  float umidity = dht.readHumidity();
  float temperature = dht.readTemperature(false);

  Serial.println(umidity);
  Serial.println(temperature);

  sendDataToServer(temperature, umidity);


  delay(10000);
}