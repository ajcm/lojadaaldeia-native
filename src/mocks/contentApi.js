

export const getCategories = () => {
    return [
        { 
            "description" : "Promocoes",
            "tags":"vinho_verde"
        },
       { 
            "description" : "Vinhos Verdes",
            "tags":"vinho_verde"
        },

        { 
            "description" : "Queijos",
            "tags":"queijos"
        },
        { 
            "description" : "Fumeiro",
            "tags":"fumeiro"
        },
        { 
            "description" : "Outros",
            "tags":"outros"
        }

    ]
}

export const getProducts = () => {
    return [
        {
            "id":"001",
            "name" : "Tinto Colheita 2019",
            "price": "$24.99",
            "tags" : ["vinho","vinho_tinto"],
            "description" : "Vinho Tinto Colheita de 2019, casta Shariz ",
            "image" : "bottle1.jpg"

        },
        {
            "id":"002",
            "name" : "Reserva 2017",
            "price": "$20.99",
            "tags" : ["vinho","vinho_tinto"],
            "description" : "Reserva de 2017, sabor a amoras",
            "image" : "bottle2.jpg"

        },
        {
            "id":"003",
            "name" : "Monte Alba ",
            "price": "$4.00",
            "tags" : ["vinho","vinho_tinto"],
            "description" : "Colheita de 2016, o classico",
            "image" : "bottle1.jpg"

        },
        {
            "id":"004",
            "name" : "Verde Alba ",
            "price": "$5",
            "tags" : ["vinho","vinho_verde"],
            "description" : "Verde, casta do Alto Douro, pe do rio",
            "image" : "bottle1.jpg"

        },
        {
            "id":"005",
            "name" : "Rose",
            "price": "$6",
            "tags" : ["vinho","vinho_rose"],
            "description" : "Perfeito para o Verao, com covid ou sem",
            "image" : "bottle2.jpg"

        },
        {
            "id":"006",
            "name" : "Queijo Cabra",
            "price": "$1",
            "tags" : ["queijo","cabra"],
            "description" : "Sabor do monte, Serra da Estrela ",
            "image" : "queijo.jpg"
        }
]
    
    
}