import CardsProd from './components/CardsProd';
import CardsProdContainer from './components/CardsProdContainer';
import Navbar from './components/navbar';
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
        title: 'Lampara',
        src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSH5X0s4suQ2KqjzsyY4daboFJegXawOh4IA&s',
        price: '$50.000',
      },
      {
        id: 2,
        title: 'Lamparuqui',
        src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtk1dShAGHeSW5-IRWfJq8xp3Dy8i6fVeiyQ&s',
        price: '$25.000',
        discount: '20%',
      },
      {
        id: 3,
        title: 'TheLampara',
        src: '',
        price: '$22.500',
      },
      {
        id: 4,
        title: 'TheLampara',
        src: '',
        price: '$22.500',
      },
      {
        id: 5,
        title: 'TheLampara',
        src: '',
        price: '$22.500',
        discount: '35%',
      },
      {
        id: 6,
        title: 'TheLampara',
        src: '',
        price: '$22.500',
      },
      {
        id: 7,
        title: 'TheLampara',
        src: '',
        price: '$22.500',
      },
    ],
  },
  {
    categoryTitle: 'los mejores combos para vos',
    products: [
      {
        id: 8,
        title: 'Lamparasuqui',
        src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSH5X0s4suQ2KqjzsyY4daboFJegXawOh4IA&s',
        price: '$50.000',
      },
      {
        id: 9,
        title: 'Lampararararyi',
        src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtk1dShAGHeSW5-IRWfJq8xp3Dy8i6fVeiyQ&s',
        price: '$25.000',
      },
      {
        id: 10,
        title: 'iburrrr',
        src: '',
        price: '$22.500',
      },
      {
        id: 11,
        title: 'iburrrr',
        src: '',
        price: '$22.500',
      },
      {
        id: 12,
        title: 'iburrrr',
        src: '',
        price: '$22.500',
      },
      {
        id: 13,
        title: 'iburrrr',
        src: '',
        price: '$22.500',
      },
      {
        id: 14,
        title: 'iburrrr',
        src: '',
        price: '$22.500',
      },
    ],
  },
  {
    categoryTitle: 'Lo que no sabías que necesitabas',
    products: [
      {
        id: 15,
        title: 'Portallaves magnético',
        src: 'https://via.placeholder.com/150',
        price: '$5.500',
      },
      {
        id: 16,
        title: 'Organizador de cables',
        src: 'https://via.placeholder.com/150',
        price: '$3.200',
      },
      {
        id: 17,
        title: 'Luz nocturna USB',
        src: 'https://via.placeholder.com/150',
        price: '$2.750',
        discount: '10%',
      },
      {
        id: 18,
        title: 'Mini humidificador',
        src: 'https://via.placeholder.com/150',
        price: '$6.800',
      },
      {
        id: 19,
        title: 'Perchero autoadhesivo',
        src: 'https://via.placeholder.com/150',
        price: '$1.900',
      },
      {
        id: 20,
        title: 'Soporte de celular para escritorio',
        src: 'https://via.placeholder.com/150',
        price: '$4.000',
      },
      {
        id: 21,
        title: 'Mini lámpara LED portátil',
        src: 'https://via.placeholder.com/150',
        price: '$3.600',
      },
      {
        id: 22,
        title: 'Clip sujetacables',
        src: 'https://via.placeholder.com/150',
        price: '$1.200',
      },
    ],
  },
];

const categories: Category[] = [
  {
    id: 1,
    title: 'Decoración',
    src: 'https://via.placeholder.com/150',
    descrip: 'Descubrí lámparas para tu living, comedor y más.',
  },
  {
    id: 2,
    title: 'Oficina',
    src: 'https://via.placeholder.com/150',
    descrip: 'Iluminación ideal para patios y espacios verdes.',
  },
  {
    id: 3,
    title: 'Iluminación',
    src: 'https://via.placeholder.com/150',
    descrip: 'Soluciones de luz para tus espacios de trabajo.',
  },
  {
    id: 4,
    title: 'Macetas',
    src: 'https://via.placeholder.com/150',
    descrip: 'Soluciones de luz para tus espacios de trabajo.',
  },
  {
    id: 5,
    title: 'Arquitectura',
    src: 'https://via.placeholder.com/150',
    descrip: 'Soluciones de luz para tus espacios de trabajo.',
  },
  {
    id: 6,
    title: 'Objetos útiles',
    src: 'https://via.placeholder.com/150',
    descrip: 'Soluciones de luz para tus espacios de trabajo.',
  },
  {
    id: 7,
    title: 'Varios',
    src: 'https://via.placeholder.com/150',
    descrip: 'Soluciones de luz para tus espacios de trabajo.',
  },
  {
    id: 8,
    title: 'Personalizados',
    src: 'https://via.placeholder.com/150',
    descrip: 'Soluciones de luz para tus espacios de trabajo.',
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
