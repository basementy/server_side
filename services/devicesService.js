var fs = require("fs");

var temperatureSensorsFilePath = "db/temp_sensors.json";

var loadFileTemperatureSensors = function() {
  var fileData = fs.readFileSync(temperatureSensorsFilePath, "utf8");
  var sensors = JSON.parse(fileData);

  return sensors;
};

var saveFileTemperatureSensors = function(sensors) {
  var data = JSON.stringify(sensors);
  fs.writeFileSync(temperatureSensorsFilePath, data, "utf8");
};

var getSensors = function() {
  var sensors = loadFileTemperatureSensors();
  return sensors;
};

var addMeasurement = function(sensorId, temperature, umidity) {
  var sensors = loadFileTemperatureSensors();

  var selectedSensor = sensors.find(sensor => sensor.id == sensorId);

  var measurementData = {
    date: new Date().toLocaleString(),
    temperature: temperature,
    umidity: umidity
  };

  selectedSensor.measurements.push(measurementData);

  saveFileTemperatureSensors(sensors);
};

module.exports = {
  getSensors: getSensors,
  addMeasurement: addMeasurement
};
