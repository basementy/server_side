var getTestimonials = function() {
  var testimonials = [
    {
      id: 1,
      name: 'João da Silva',
      company: 'Totvs',
      title: 'Front-end Developer',
      testimony: 'I love my company!'
    },
    {
      id: 2,
      name: 'Paulo de Oliveira',
      company: 'Neogrid',
      title: 'Back-end Developer',
      testimony: 'My job is awesome!'
    }
  ]

  return testimonials;
}

module.exports = {
  getTestimonials: getTestimonials
}