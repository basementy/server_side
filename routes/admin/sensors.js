var express = require('express');
var router = express.Router();
var devicesService = require('../../services/devicesService');

router.get('/', function(req, res, next) {
  var sensors = devicesService.getSensors();
  
  var data = {
    sensors: sensors
  };

  res.render('admin/sensors/index', data);
});

router.get('/create', function(req, res, next) {

  res.render('admin/sensors/create');
});

router.post('/create', function(req, res, next) {
  var sensors = devicesService.getSensors();

  var newId = sensors.length + 1;

  var newSensor = {};
  newSensor.id = newId;
	newSensor.name = req.body.sensorName;
	newSensor.measurements = []

  devicesService.saveSensor(newSensor);

  res.redirect('/admin/sensors');
});

module.exports = router;