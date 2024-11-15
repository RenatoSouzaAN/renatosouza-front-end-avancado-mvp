const products = [
    {
        id: '1',
        title: "Produto 1",
        price: 150.00,
        stock: 10,
        images: Array(5).fill("/placeholderimage.jpg"),
        specs: [
          { title: "Especificação 1", info: "Informação 1" },
          { title: "Especificação 2", info: "Informação 2" },
          { title: "Especificação 3", info: "Informação 3" },
          { title: "Especificação 4", info: "Informação 4" },
        ]
      },
      {
        id: '2',
        title: "Produto 2",
        price: 200.00,
        stock: 5,
        images: Array(5).fill("/placeholderimage.jpg"),
        specs: [
          { title: "Especificação 1", info: "Informação 1" },
          { title: "Especificação 2", info: "Informação 2" },
          { title: "Especificação 3", info: "Informação 3" },
          { title: "Especificação 4", info: "Informação 4" },
        ]
    },
    {
        id: '3',
        title: "Produto 3",
        price: 250.00,
        stock: 0,
        images: Array(5).fill("/placeholderimage.jpg"),
        specs: [
          { title: "Especificação 1", info: "Informação 1" },
          { title: "Especificação 2", info: "Informação 2" },
          { title: "Especificação 3", info: "Informação 3" },
          { title: "Especificação 4", info: "Informação 4" },
        ]
      }
    ];
  
export default products;