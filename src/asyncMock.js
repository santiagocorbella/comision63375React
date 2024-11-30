const products = [
  
    { 
      id: '1',
      name: 'Chuker',
      price: 1000,
      category: 'edulcorante',
      img:'https://cdn.batitienda.com/baticloud/images/product_picture_644b083abb524809b08145fce1091356_637887568641315818_0_m.jpg',
      stock: 1500,
      description:'Chuker Clásico Edulcorante Liquido De Cuatrocientos Mililitros'
    },
    {
        id: '2',
      name: 'Sal Marina Fina',
      price: 900,
      category: 'sal marina',
      img:'https://monteverdeargentina.com/productos/data/998/img1.png',
      stock: 1300,
      description:'Paquete De Sal Marina Fina De Quinientos gramos Que Contiene Minerales Naturales'
    },
    {
      id: '3',
    name: 'Crackines',
    price: 800,
    category: 'galletitas de arroz',
    img:'https://cdn.newgarden.com.ar/media/catalog/product/cache/dda7253a1a2f6711745de410175d10f8/7/7/7798200050019-galletitas-crackines--.jpg',
    stock: 1400,
    description: 'Galletitas Crackines de Arroz De Ciento Veinte Gramos SIN TACC'
  },
]

export const getProducts = () => {
  return new Promise((resolve) => {
      setTimeout(() => {
          resolve(products)
      }, 1000)
  })
}

export const getProductsByCategory = (categoryId) => {
  return new Promise((resolve) => {
      setTimeout(() => {
          resolve(products.filter(prod => prod.category === categoryId))
      }, 1000)
  })
}

export const getProductById = (itemId) => {
  return new Promise((resolve) => {
      setTimeout(() => {
          resolve(products.find(prod => prod.id === itemId))
      }, 500)
  })
}