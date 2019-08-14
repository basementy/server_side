var getPosts = function() {
  var posts = [
    {
      title: 'Post 1',
      image: 'post1.jpg',
      description: 'Meu primeiro post',
      body: 'Meu primeiro post blablabla'
    },
    {
      title: 'Post 2',
      image: 'post1.jpg',
      description: 'Meu segundo post',
      body: 'Meu segundo post blablabla'
    },
    {
      title: 'Post 3',
      image: 'post1.jpg',
      description: 'Meu terceiro post',
      body: 'Meu terceiro post blablabla'
    },
    {
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