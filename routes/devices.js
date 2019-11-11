var express = require('express');
var router = express.Router();
var devicesService = require('../services/devicesService');

router.get('/', function(req, res, next) {
  var sensors = devicesService.getSensors();

  res.render('devices', { sensors: sensors });
});

router.post('/:id/add', function(req, res, next) {
  console.log(req.body);

  var sensorId = req.params.id;
  var temperature = req.body.temperature;
  var umidity = req.body.umidity;

  devicesService.addMeasurement(sensorId, temperature, umidity)
  res.send(200);
})

module.exports = router;