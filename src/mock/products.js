const products = [
    {
        id: "1",
        title: "Corsair iCUE SP120 RGB ELITE Performance 120mm Branco",
        category: "Eletrônicos",
        subcategory1: "Computadores e Periféricos",
        subcategory2: "Refrigeração",
        subcategory3: "Ventoinhas",
        description:
            "A ventoinha de alto desempenho CORSAIR iCUE SP120 RGB ELITE possui oito LEDs RGB brilhantes e individualmente configuráveis, completando a iluminação RGB vibrante do seu sistema resfriado pelo SP RGB ELITE.",
        price: 150.0,
        stock: 10,
        images: [
            "/images/corsair-icue-sp120_1.jpg",
            "/images/corsair-icue-sp120_2.jpg",
            "/images/corsair-icue-sp120_3.jpg",
            "/images/corsair-icue-sp120_4.jpg",
            "/images/corsair-icue-sp120_5.jpg",
            "/images/corsair-icue-sp120_6.jpg",
            "/images/corsair-icue-sp120_7.jpg",
        ],
        specifications: [
            { title: "Marca:", info: "Corsair" },
            { title: "Modelo:", info: "iCUE SP120 RGB ELITE" },
            { title: "Tamanho do ventilador:", info: "120mm" },
            { title: "Cor:", info: "Branco" },
        ],
    },
    {
        id: "2",
        title: "Samsung Galaxy S24 Ultra",
        category: "Eletrônicos",
        subcategory1: "Celulares e Acessórios",
        subcategory2: "Smartphones",
        description: `
            \\bFotografia profissional no seu bolso\\b\\n
            Descubra infinitas possibilidades para suas fotos com as 4 câmeras principais de sua equipe. Teste sua criatividade e jogue com iluminação, diferentes planos e efeitos para obter ótimos resultados.\\n
            Perfeito para quem gosta de fotos detalhadas. Seu zoom óptico lhe dará a possibilidade de ampliar sem perder qualidade de suas capturas.\\n\\n

            \\bExperiência visual incrível\\b\\n
            Assista às suas séries e filmes favoritos com a melhor definição na sua tela Dynamic AMOLED 2X de 6.8\". Desfrute de cores brilhantes e detalhes precisos em todo o seu conteúdo.\\n\\n

            \\bCapacidade e eficiência\\b\\n
            Com seu poderoso processador e memória RAM de 12 GB seu computador alcançará alto desempenho com alta velocidade de transmissão de conteúdos e executará vários aplicativos ao mesmo tempo, sem atrasos.\\n\\n

            \\bDesbloqueio facial e de impressão digital\\b\\n
            Máxima segurança para que apenas você possa acessar o sua equipe. Você pode escolher entre o sensor de impressão digital para ativar seu telefone com um toque, ou o reconhecimento facial que permite desbloquear até 30% mais rápido.\\n\\n

            \\bVida útil da bateria mais longa\\b\\n
            Desconecte-se! Com a super bateria de 5000 mAh você terá energia por muito mais tempo para jogar, assistir séries ou trabalhar sem recarregar.
        `,
        price: 10000.0,
        stock: 5,
        images: [
            "/images/s24Ultra_1.jpg",
            "/images/s24Ultra_2.jpg",
            "/images/s24Ultra_3.jpg",
        ],
        specifications: [
            { title: "Memória interna:", info: "256GB" },
            { title: "Cor:", info: "Titânio Cinza" },
            { title: "Tela:", info: "6.8 polegadas" },
            {
                title: "Camera traseira quádrupla:",
                info: "200MP + 50MP + 12MP + 10MP",
            },
            { title: "Camera frontal:", info: "12MP" },
            { title: "Processador:", info: "Snapdragon 8 Gen 1" },
            { title: "Bateria:", info: "5000mAh" },
        ],
    },
    {
        id: "3",
        title: "PlayStation 5 Pro",
        category: "Eletrônicos",
        subcategory1: "Games",
        subcategory2: "Videogames",
        subcategory3: "PlayStation",
        description: `
                \\bSuper-Resolução Espectral (PSSR)\\b\\n
                Aproveite as imagens super nítidas em sua TV 4K utilizando a tecnologia de resolução aprimorada por IA, que proporciona gráficos em ultra-alta definição.\\n\\n
                
                \\bDesempenho otimizado\\b\\n
                Aproveite uma gameplay fluida e tranquila com taxas de quadros elevadas, suportando telas de 60 Hz e 120 Hz.*\\n\\n
                
                \\bRay Tracing avançado\\b\\n
                Mergulhe no mundo dos jogos enquanto experimenta imagens realistas impressionantes, com reflexos e sombras de alta qualidade, graças à iluminação global e ao traçado de raio.*\\n\\n
                
                \\b2TB de armazenamento\\b\\n
                Tenha todos os seus jogos favoritos ao alcance com 2TB de armazenamento SSD integrado, pronto para jogar a qualquer momento.\\n\\n
                
                \\bGráficos impressionantes\\b\\n
                Com o poder do PS5 Pro, os jogos compatíveis podem ser jogados em 60 FPS, ou até 120 FPS, com Ray Tracing e resolução 4K aprimorada por IA usando PSSR, tudo ao mesmo tempo, na sua TV 4K.\\n\\n
                **Recursos disponíveis somente em jogos de PS5 selecionados adaptados para o PS5 Pro. Os recursos aprimorados do PS5 Pro variam de acordo com o jogo.**
        `,
        price: 7000.0,
        stock: 0,
        images: [
            "/images/ps5-pro_1.jpg",
            "/images/ps5-pro_2.jpg",
            "/images/ps5-pro_3.jpg",
            "/images/ps5-pro_4.jpg",
        ],
        specifications: [
            {
                title: "Dimensões da embalagem:",
                info: "46,8 x 35,6 x 17,8 cm; 4,84 quilogramas",
            },
            { title: "Número do modelo", info: "1000046552" },
            { title: "Armazenamento", info: "2 TB" },
            { title: "Cor:", info: "Branco" },
        ],
    },
];

export default products;
