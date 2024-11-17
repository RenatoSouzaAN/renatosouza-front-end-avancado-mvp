import { Description } from "@mui/icons-material";

const products = [
    {
        id: "1",
        title: "Produto 1",
        category: "Categoria 1",
        subcategory: "Sub-Categoria 1",
        subsubcategory: "Sub-Sub-Categoria 1",
        description:
            "Lorem ipsum dolor sit amet consectetur. Morbi est urna aliquam amet. Aliquam egestas ultrices faucibus interdum auctor et facilisi. Quam vitae felis ligula tempus risus porta. Suspendisse in erat nunc varius mattis nunc habitasse quam. Pulvinar magnis sit semper porta fringilla ut elit quam. Urna auctor duis luctus viverra. Elementum et eu proin eget ut. A nulla semper in nisi massa. Urna sed metus feugiat et nisi et vitae. Eget suscipit hac elit cras. Porttitor viverra ultricies consequat ante tristique morbi. Metus mauris congue in quam eu malesuada id. Nec proin feugiat duis aliquam dictum malesuada sed. Ac dolor leo velit suspendisse. Elementum fringilla porttitor ante velit fames. Id venenatis egestas accumsan adipiscing turpis. Donec sed cursus lectus ut amet vel feugiat. Arcu tincidunt etiam pretium feugiat commodo fermentum. Nisi non viverra non nam tempus tempus etiam ullamcorper suscipit. Elit blandit tortor fermentum nisl enim convallis gravida integer feugiat. Malesuada interdum ac vel egestas facilisis faucibus morbi. Sagittis suspendisse velit a vestibulum. Pretium pulvinar tellus lectus elementum accumsan amet non. Aliquam id mattis erat et metus. Cursus quam sed neque fames. Neque ultrices egestas dignissim sed in sed proin. Faucibus lobortis scelerisque eu malesuada a malesuada. Purus ridiculus a egestas vel sed a aliquet. Bibendum cras cursus fringilla est. Bibendum laoreet amet facilisi habitasse platea interdum sit convallis. Dolor egestas nisi amet neque eu convallis. Vitae turpis nunc feugiat ipsum nec. Vulputate nisl eget lobortis vitae nisi tortor. Lorem accumsan enim suspendisse elementum.",
        price: 150.0,
        stock: 10,
        images: Array(7).fill("/placeholderimage.jpg"),
        specifications: [
            { title: "Especificação 1", info: "Informação 1" },
            { title: "Especificação 2", info: "Informação 2" },
            { title: "Especificação 3", info: "Informação 3" },
            { title: "Especificação 4", info: "Informação 4" },
        ],
    },
    {
        id: "2",
        title: "Produto 2",
        category: "Categoria 2",
        subcategory: "Sub-Categoria 2",
        subsubcategory: "Sub-Sub-Categoria 2",
        description: "Descrição do produto 2",
        price: 200.0,
        stock: 5,
        images: Array(5).fill("/placeholderimage.jpg"),
        specifications: [
            { title: "Especificação 1", info: "Informação 1" },
            { title: "Especificação 2", info: "Informação 2" },
            { title: "Especificação 3", info: "Informação 3" },
            { title: "Especificação 4", info: "Informação 4" },
        ],
    },
    {
        id: "3",
        title: "Produto 3",
        category: "Categoria 3",
        subcategory: "Sub-Categoria 3",
        subsubcategory: "Sub-Sub-Categoria 3",
        description: "Descrição do produto 3",
        price: 250.0,
        stock: 0,
        images: Array(3).fill("/placeholderimage.jpg"),
        specifications: [
            { title: "Especificação 1", info: "Informação 1" },
            { title: "Especificação 2", info: "Informação 2" },
            { title: "Especificação 3", info: "Informação 3" },
            { title: "Especificação 4", info: "Informação 4" },
        ],
    },
];

export default products;
