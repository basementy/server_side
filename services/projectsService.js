var getProjects = function() {
    var projects = [
      {
        id: 1,
        title: 'Server-Side',
        image: 'server-side.svg',
        description: 'Projeto criado para a prática e aprendizagem de programação Server-Side',
        subject: 'Programação Server-Side'
      },
      {
        id: 2,
        title: 'Tic-Tac-Toe',
        image: 'tic_tac_toe.gif',
        description: 'Um jogo elaborado em sala para prática dos conhecimentos de Javascript',
        subject: 'Ferramentas Web & UX'
      },
      {
        id: 3,
        title: 'Tic-Tac-Toe (In C Language)',
        image: 'tic_tac_toe.gif',
        description: 'Projeto criado para treinar as habilidades aprendidas na linguagem C',
        subject: 'Fundamentos de Programação'
      },
      {
        id: 4,
        title: 'Site - Bootstrap',
        image: 'site.jpg',
        description: 'Site desenvolvido utilizando Bootstrap',
        subject: 'Ferramentas Web & UX'
      }
    ]
  
    return projects
  }
  
  module.exports = {
    getProjects : getProjects
  }