import styles from './CardsProd.module.css';
import { useState } from 'react';

type CardsProdProps = {    
    src: string;
    TitleProd: string;
    Price: string;
    discount?: string;
    onAddToCart?: () => void; 
};

function CardsProd(props: CardsProdProps) {
  const [showMensaje, setShowMensaje] = useState(false);

  const onAddToCart = () => {
    setShowMensaje(true);
    props.onAddToCart?.();

    setTimeout(() => {
      setShowMensaje(false);
    }, 800);
  };

    return (
        <div className={styles.CardsContainer}>
            <img className={styles.img} src={props.src} alt={props.TitleProd} />
            <h2 className={styles.h2}>{props.TitleProd}</h2>
            <p className={styles.p}>{props.Price}</p>
            {props.discount && <p className={styles.discount}>{props.discount}</p>} 
            <div className={styles.ButtonsContainer}>
                <button className={styles.buttoninfo}>Ver más</button>
                <button className={styles.buttoncarrito} title='Agregar al carrito' onClick={onAddToCart}><img src="./public/carritoShop.png" alt="Agregar al carrito"/></button>
                {showMensaje && (
                 <span className={styles.alertCarr}>Agregado!</span>
                )}
            </div>
        </div>
    );    
}

export default CardsProd;

