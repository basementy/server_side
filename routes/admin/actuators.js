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
	newActuator.status = req.body.actuatorStatus == "on" ? 1 : 0

  devicesService.saveActuator(newActuator);

  res.redirect('/admin/actuators');
});

router.post('/:id', function(req, res, next) {
  console.log(req.params.id)
  var actuators = devicesService.getActuators()
  var id = req.params.id
  // var status = req.body.status
  var actuator = actuators.find(actuator => actuator.id == id)

  actuator.status = actuator.status ? 0 : 1

  devicesService.saveFileActuators(actuators)

  res.redirect('/admin/actuators')
})

module.exports = router;