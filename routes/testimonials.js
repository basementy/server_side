var express = require("express");
var router = express.Router();

var testimonialsService = require("../services/testimonialsService");

router.get('/', function(req, res, next) {
  var testimonials = testimonialsService.getTestimonials();

  res.render("testimonials", { title: 'Depoimentos', testimonials: testimonials });
});

module.exports = router;