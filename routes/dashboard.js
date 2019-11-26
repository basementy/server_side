var express = require('express');
var router = express.Router();
var devicesService = require('../services/devicesService');

router.get('/', function(req, res, next) {
  var sensors = devicesService.getSensors();
  var actuators = devicesService.getActuators();

  res.render('dashboard', { sensors: sensors, actuators: actuators });
});

router.post('/:id/add', function(req, res, next) {
  var sensorId = req.params.id;
  var temperature = req.body.temperature;
  var humidity = req.body.humidity;

  devicesService.addMeasurement(sensorId, temperature, humidity)
  res.send(200);
})

router.post('/:id', function(req, res, next) {
  var actuators = devicesService.getActuators()
  var id = req.params.id
  var actuator = actuators.find(actuator => actuator.id == id)

  actuator.status = actuator.status ? 0 : 1

  devicesService.saveFileActuators(actuators)

  res.redirect('/dashboard')
})

module.exports = router;