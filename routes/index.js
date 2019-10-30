var express = require("express");
var router = express.Router();
var postsService = require("../services/postsService");
var projectsService = require("../services/projectsService");
var servicesService = require("../services/servicesService");
var productsService = require("../services/productsService")

router.get("/", function(req, res, next) {
  var posts = postsService.getPosts();
  res.render("index", { title: "Blog", posts: posts });
});

// Rotas Individuais

router.get("/posts/:postId", function(req, res, next) {
  var postId = req.params.postId;

  var posts = postsService.getPosts();

  var post = posts.filter(post => post.id == postId)[0];

  res.render("post", { title: post.title, post: post });
});

router.get("/projects/:projectId", function(req, res, next) {
  var projectId = req.params.projectId;

  var projects = projectsService.getProjects();

  var project = projects.filter(project => project.id == projectId)[0];

  res.render("project", { title: project.title, project: project });
});

router.get("/services/:serviceId", function(req, res, next) {
  var serviceId = req.params.serviceId;

  var services = servicesService.getServices();

  var service = services.filter(service => service.id == serviceId)[0];

  res.render("service", { title: service.name, service: service });
});

// Rotas de Listagem

router.get("/posts", function(req, res, next) {
  var posts = postsService.getPosts();

  res.render("posts", { title: "Posts", posts: posts });
});

router.get("/projects", function(req, res, next) {
  var projects = projectsService.getProjects();

  res.render("projects", { title: "Projects", projects: projects });
});

router.get("/products", function(req, res, next) {
  var products = productsService.getProducts();
  
  res.render("products", { title: "Produtos", products: products});
});

router.get("/cart", function(req, res, next) {
  var cart = productsService.getCart()
  res.render("cart", { title: "Carrinho", cart: cart });
});

module.exports = router;