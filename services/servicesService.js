var getServices = function() {
  var services = [
    {
      id: 1,
      image: 'service1.jpg',
      name: 'Contabilidade Empresarial',
      description: 'Somos especilialista a mais de 10 anos, transformando a contabilidade de nossos clientes',
      descriptionDetailed: 'Atendemos mais de trezentas empresas em todo brasil, gerenciando a contabilidade dessas e trazendo cada vez mais resultados melhores para nossos clientes. Possuímos profissionais muito bem capacitados para atender da melhor forma aqueles que adquirem nosso serviços.'
    },
    {
      id: 2,
      image: 'service2.jpg',
      name: 'Consultoria de Head Hunter',
      description: 'Traga para dentro da sua empresa os melhores profissionais do mercado',
      descriptionDetailed: 'Somos compostos por diversos profissionais engajados no que acontece no mercado de trabalho, sempre procurando pelos melhores profissionais para a empresa de nossos clientes.'
    },
    {
      id: 3,
      image: 'service3.jpg',
      name: 'Consultoria Financeira',
      description: 'Tenha total controle de suas finanças',
      descriptionDetailed: 'Nossos especialistas são formados na área de finanças e especialistas em gestão de gastos e receitas, podendo transformar a vida bancaria de todos que adquirem nossos serviços.'
    },
    {
      id: 4,
      image: 'service4.jpg',
      name: 'Consultoria de Marketing',
      description: 'Transforme o SEO da sua empresa com nossos serviços!',
      descriptionDetailed: 'Nossos profissionais já atuam na área de marketing a diversos anos, trazendo cada vez mais positivos resultados de conversão para nossos clientes!'
    },
    {
      id: 5,
      image: 'service5.jpg',
      name: 'Consultoria de Product Design',
      description: 'Transforme a usabilidade do seu produto',
      descriptionDetailed: 'Somos pioneiros no ramo de consultoria de Product Design, desenvolvendo Insights e aplicando em produtos de nossos clientes, aprimorando assim cada vez mais a satisfação de seus usuários!'
    },
  ];

  return services;
}

module.exports = {
  getServices: getServices
}