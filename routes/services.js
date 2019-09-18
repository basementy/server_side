var express = require("express");
var router = express.Router();

var servicesService = require("../services/servicesService");

router.get('/', function(req, res, next) {
  var services = servicesService.getServices();

  res.render("services", { title: 'Serviços', services: services });
});

module.exports = router;