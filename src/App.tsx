import CardsProd from './components/CardsProd';
import CardsProdContainer from './components/CardsProdContainer';
import Navbar from './components/Navbar';
import CardsCateg from './components/CardsCateg';
import BannerSup from './components/BannerSup';

type Product = {
  id: number;
  title: string;
  src: string;
  price: string;
  discount?: string;
};

type ProductSection = {
  categoryTitle: string;
  products: Product[];
};

type Category = {
  id: number;
  title: string;
  src: string;
  descrip: string;
};

const response: ProductSection[] = [
  {
    categoryTitle: 'Destacados del mes',
    products: [
      {
        id: 1,
        title: 'Maceta Gatito',
        src: 'https://i.pinimg.com/736x/bb/ef/9a/bbef9a086db622c05ca97aa296cd5889.jpg',
        price: '$15.800',
        discount: '25%',
      },
      {
        id: 2,
        title: 'Maceta Marco',
        src: 'https://i.pinimg.com/736x/eb/00/03/eb0003bcb08009f843a2e0f84de57ee1.jpg',
        price: '$22.000',
        discount: '20%',
      },
      {
        id: 3,
        title: 'Maceta Duo',
        src: 'https://i.pinimg.com/736x/3b/3e/e2/3b3ee2d80ae1277155dcc1c6b9cc6aa1.jpg',
        price: '$22.500',
      },
      {
        id: 4,
        title: 'Lampara Ondas',
        src: 'https://i.pinimg.com/736x/11/76/7f/11767f3d1a6bc82d92605cdbe91fceee.jpg',
        price: '$35.500',
      },
      {
        id: 5,
        title: 'Florero Flor',
        src: 'https://i.pinimg.com/736x/bf/f4/36/bff43647784dae2d637dc2bc3bd9e643.jpg',
        price: '$12.500',
        discount: '35%',
      },
      {
        id: 6,
        title: 'Jarrón Waves',
        src: 'https://i.pinimg.com/736x/a0/a5/2e/a0a52ef5b00b853297100822d85e3436.jpg',
        price: '$14.500',
      },
      {
        id: 7,
        title: 'Soporte Auricular',
        src: 'https://i.pinimg.com/736x/f5/6c/bf/f56cbf1feb0b484ff3b1fc126a89ed81.jpg',
        price: '$17.500',
      },
    ],
  },
  {
    categoryTitle: 'Combos para vos',
    products: [
      {
        id: 8,
        title: 'Trio de macetas',
        src: 'https://i.pinimg.com/736x/e4/bd/b1/e4bdb1160c574d821e86ef6f59bf958b.jpg',
        price: '$23.000',
      },
      {
        id: 9,
        title: 'Duo de contenedores',
        src: 'https://i.pinimg.com/736x/e2/75/f1/e275f16705ffa5ca7b7d56322212dadd.jpg',
        price: '$14.200',
      },
      {
        id: 10,
        title: 'Maceta pipo + Lampara pies',
        src: 'https://i.pinimg.com/736x/a9/4b/11/a94b119db1976564a9a92348cad2431a.jpg',
        price: '$38.500',
        discount: '15%',
      },
      {
        id: 11,
        title: 'Trio de conejos',
        src: 'https://i.pinimg.com/736x/7e/9b/c8/7e9bc8d5a6a0a9d90403522f72d01977.jpg',
        price: '$28.100',
        discount: '10%',
      },
      {
        id: 12,
        title: 'Triple alajero + maceta',
        src: 'https://i.pinimg.com/736x/6a/e0/e7/6ae0e70a07e9a6f0c8e193249768adbd.jpg',
        price: '$33.000',
      },
      {
        id: 13,
        title: 'Set de Posavelas',
        src: 'https://i.pinimg.com/736x/4d/26/e4/4d26e4c899bfe682ef365152899c392d.jpg',
        price: '$13.500',
      },
      {
        id: 14,
        title: 'Set de baño',
        src: 'https://i.pinimg.com/736x/60/c0/ae/60c0ae90a72c37dcec2ded8832ab12c8.jpg',
        price: '$21.800',
      },
    ],
  },
  {
    categoryTitle: 'Lo que no sabías que necesitabas',
    products: [
      {
        id: 15,
        title: 'Organizador Camino',
        src: 'https://i.pinimg.com/736x/cc/25/72/cc25728c09a9ff223432da09965840fe.jpg',
        price: '$8.500',
      },
      {
        id: 16,
        title: 'Jarron abstracto',
        src: 'https://i.pinimg.com/736x/95/da/af/95daafcd721e1398b96b1d808fa76577.jpg',
        price: '$12.200',
      },
      {
        id: 17,
        title: 'Velador Hongo',
        src: 'https://i.pinimg.com/736x/66/c9/fe/66c9fef348ccbda7a687515ca2738004.jpg',
        price: '$32.750',
        discount: '10%',
      },
      {
        id: 18,
        title: 'Brazo articulado',
        src: 'https://i.pinimg.com/736x/d1/3e/75/d13e759a0df20341d9564f20676c7962.jpg',
        price: '$14.800',
      },
      {
        id: 19,
        title: 'Soporte Tentáculo',
        src: 'https://i.pinimg.com/736x/29/a6/12/29a612294b99b6a07bc76aac79a191ec.jpg',
        price: '$8.900',
      },
      {
        id: 20,
        title: 'Organizador de controles',
        src: 'https://i.pinimg.com/736x/38/d6/90/38d690e83e9bdacd2278387f65a604ec.jpg',
        price: '$7.550',
      },
      {
        id: 21,
        title: 'Marcardor de libro',
        src: 'https://i.pinimg.com/736x/d1/4e/05/d14e051066f4d39478030dfc34c3d250.jpg',
        price: '$1.100',
        discount: '25%',
      },
    ],
  },
];

const categories: Category[] = [
  {
    id: 1,
    title: 'Decoración',
    src: 'https://i.pinimg.com/736x/71/93/9d/71939d6a604e75ce3861dc2496102403.jpg',
    descrip: 'Ponele onda a tus espacios!',
  },
  {
    id: 2,
    title: 'Oficina',
    src: 'https://i.pinimg.com/736x/65/02/40/65024082b05a9760c8be99afe44fcbcd.jpg',
    descrip: 'Tu lugar de trabajo siempre ordenado',
  },
  {
    id: 3,
    title: 'Iluminación',
    src: 'https://i.pinimg.com/736x/75/d2/5c/75d25c9dab8fa7e1ed3cca55a7a08ac9.jpg',
    descrip: 'Lámparas con mucha onda',
  },
  {
    id: 4,
    title: 'Macetas',
    src: 'https://i.pinimg.com/736x/e3/a2/c6/e3a2c6891c669e2aec0337f4f8a41cc5.jpg',
    descrip: 'Para armar tu propia selva',
  },
  {
    id: 5,
    title: 'Arquitectura',
    src: 'https://i.pinimg.com/736x/d6/8c/34/d68c34222bc57b23c2697c9930632258.jpg',
    descrip: 'Maquetado 3D y objetos deco',
  },
  {
    id: 6,
    title: 'Personalizados',
    src: 'https://i.pinimg.com/736x/83/a0/09/83a0093d36c08a0bf95372217a6b292c.jpg',
    descrip: 'Llaveros y objetos con tu Logo/Marca/Nombre',
  },
];

function App() {
  return (
    <>
      <Navbar cartItemCount={3} />
      <BannerSup />

      {response.map((section) => (
        <CardsProdContainer key={section.categoryTitle} title={section.categoryTitle}>
          {section.products.map((product) => (
            <CardsProd
              key={product.id}
              TitleProd={product.title}
              src={product.src}
              Price={product.price}
              discount={product.discount}
            />
          ))}
        </CardsProdContainer>
      ))}

        <CardsProdContainer title="Categorías"> {/* Defini acá el titulo pq no puedo con section.category etc. pq son distintos tipos (produc y category), asi uso el contenedor ya creado y no genero uno nuevo, solo cambio las cards, no se si esta bien asi */}
        {categories.map((category) => (
          <CardsCateg
            key={category.id}
            title={category.title} 
            src={category.src}
            descrip={category.descrip}
          />
        ))}
      </CardsProdContainer>
    </>
  );
}

export default App;
