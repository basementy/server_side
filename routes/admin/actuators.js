var express = require('express');
var router = express.Router();
var devicesService = require('../../services/devicesService');

router.get('/', function(req, res, next) {
  var actuators = devicesService.getActuators();
  
  var data = {
    actuators: actuators
  };

  res.render('admin/actuators/index', data);
});

router.get('/create', function(req, res, next) {

  res.render('admin/actuators/create');
});

router.post('/create', function(req, res, next) {
  var actuators = devicesService.getActuators();
  var newId = actuators.length + 1
	var newActuator = {};
  
	newActuator.id = newId
	newActuator.name = req.body.actuatorName
	newActuator.status = req.body.actuatorStatus == "on" ? true : false

  devicesService.saveActuator(newActuator);

  res.redirect('/admin/actuators');
});

module.exports = router;