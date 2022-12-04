const products =  [
    {
        id: "000000001",
        name: "Producto 1",
        description: "Descripción del producto 1",
        imagen: "url",
    },
    {
        id: "000000002",
        name: "Producto 2",
        description: "Descripción del producto 2",
        imagen: "url",
    },
    {
        id: "000000003",
        name: "Producto 3",
        description: "Descripción del producto 3",
        imagen: "url",
    },
    {
        id: "000000004",
        name: "Producto 4",
        description: "Descripción del producto 4",
        imagen: "url",
    },
    {
        id: "000000005",
        name: "Producto 5",
        description: "Descripción del producto 5",
        imagen: "url",
    },
]
const resolvers = {
    getProducts: () => {
        return products
    }
};

export default resolvers