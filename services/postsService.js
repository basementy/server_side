var getPosts = function() {
  var posts = [
    {
      id: 1,
      title: 'Post 1',
      image: 'post1.jpg',
      description: 'Meu primeiro post',
      body: 'Meu primeiro post blablabla'
    },
    {
      id: 2,
      title: 'Post 2',
      image: 'post1.jpg',
      description: 'Meu segundo post',
      body: 'Meu segundo post blablabla'
    },
    {
      id: 3,
      title: 'Post 3',
      image: 'post1.jpg',
      description: 'Meu terceiro post',
      body: 'Meu terceiro post blablabla'
    },
    {
      id: 4,
      title: 'Post 4',
      image: 'post1.jpg',
      description: 'Meu quarto post',
      body: 'Meu quarto post blablabla'
    }
  ]

  return posts
}

module.exports = {
  getPosts: getPosts
}