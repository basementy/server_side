var express = require('express')
var router = express.Router()
var projectsService = require('../../services/projectsService')

// Renderiza o index com todos o projetos cadastrados
router.get('/', function(req, res, next) {
  var projects = projectsService.getProjects()

  data = {
    projects: projects
  }

  res.render('admin/projects/index', data)
})

// Renderiza a página para criação de um novo project
router.get('/create', function(req, res, next) {
  res.render('admin/projects/create')
})

// Faz um POST para que o novo project seja gravado
router.post('/create', function(req, res, next) {
  var projects = projectsService.getProjects()
  var newId = projects.length + 1

  var newProject = {}

  newProject.id = newId
  newProject.title = req.body.title
  newProject.image = req.body.image
  newProject.description = req.body.description
  newProject.subject = req.body.subject

  projectsService.saveProject(newProject)

  res.redirect('/admin/projects')
})

module.exports = router