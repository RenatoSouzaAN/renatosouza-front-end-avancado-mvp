const products = [
    {
        id: "1",
        title: "Corsair ICUE SP120 RGB ELITE Performance 120mm Branco",
        category: "Categoria 1",
        subcategory: "Sub-Categoria 1",
        subsubcategory: "Sub-Sub-Categoria 1",
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
            { title: "Modelo:", info: "ICUE SP120 RGB ELITE" },
            { title: "Tamanho do ventilador:", info: "120mm" },
            { title: "Cor:", info: "Branco" },
        ],
    },
    {
        id: "2",
        title: "Samsung Galaxy S24 Ultra",
        category: "Categoria 2",
        subcategory: "Sub-Categoria 2",
        subsubcategory: "Sub-Sub-Categoria 2",
        description: `
Fotografia profissional no seu bolso\n
Descubra infinitas possibilidades para suas fotos com as 4 câmeras principais de sua equipe. Teste sua criatividade e jogue com iluminação, diferentes planos e efeitos para obter ótimos resultados.\n
Perfeito para quem gosta de fotos detalhadas. Seu zoom óptico lhe dará a possibilidade de ampliar sem perder qualidade de suas capturas.\n\n
Experiência visual incrível\n
Assista às suas séries e filmes favoritos com a melhor definição na sua tela Dynamic AMOLED 2X de 6.8". Desfrute de cores brilhantes e detalhes precisos em todo o seu conteúdo.\n\n
Capacidade e eficiência\n
Com seu poderoso processador e memória RAM de 12 GB seu computador alcançará alto desempenho com alta velocidade de transmissão de conteúdos e executará vários aplicativos ao mesmo tempo, sem atrasos.\n\n
Desbloqueio facial e de impressão digital\n
Máxima segurança para que apenas você possa acessar o sua equipe. Você pode escolher entre o sensor de impressão digital para ativar seu telefone com um toque, ou o reconhecimento facial que permite desbloquear até 30% mais rápido.\n\n
Vida útil da bateria mais longa\n
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
        category: "Categoria 3",
        subcategory: "Sub-Categoria 3",
        subsubcategory: "Sub-Sub-Categoria 3",
        description:
            "Com o console PlayStation®5 Pro, os maiores criadores de jogos do mundo podem melhorar seus jogos com recursos incríveis, como Ray Tracing avançado, imagem super nítida para TV 4K e jogabilidade com alta taxa de quadros.* Isso significa que você poderá jogar os jogos do PS5® com os visuais mais impressionantes já vistos em um console PlayStation® e, com 2 TB de armazenamento SSD incluídos, seus jogos favoritos estarão prontos e esperando a próxima aventura incrível.O PS5® Pro é um console totalmente digital, sem unidade de disco. Inicie uma sessão na sua conta da PlayStation™Network e acesse a PlayStation™Store para comprar e baixar jogos.6 Você também pode adicionar uma unidade de disco ao seu console PS5® Pro se quiser jogar jogos de PS5 ou PS4 em discos Blu-ray™, ou se quiser assistir a filmes e programas em discos Blu-ray™ 4K Ultra HD, discos Blu-ray™ e DVDs. A unidade de disco compatível é vendida separadamente. *Recursos disponíveis somente em jogos de PS5 selecionados que foram aprimorados para o PS5 Pro em comparação com o PS5. Os recursos aprimorados do PS5 Pro variam de acordo com o jogo.3 Uma parte do SSD é reservada para software do sistema e outras funções, portanto a capacidade disponível do SSD pode variar.",
        price: 7000.0,
        stock: 0,
        images: [
            "/images/ps5-pro_1.jpg",
            "/images/ps5-pro_2.jpg",
            "/images/ps5-pro_3.jpg",
            "/images/ps5-pro_4.jpg",
        ],
        specifications: [
            { title: "Dimensões da embalagem:", info: "46,8 x 35,6 x 17,8 cm; 4,84 quilogramas"},
            { title: "Número do modelo", info: "1000046552" },
            { title: "Armazenamento", info: "2 TB" },
            { title: "Cor:", info: "Branco" },

        ],
    },
];

export default products;
