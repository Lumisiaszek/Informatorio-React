import styles from './CardsProd.module.css';

type CardsProdProps = {    
    src: string;
    TitleProd: string;
    Price: string;
    discount?: string;
};

function CardsProd(props: CardsProdProps) {
    console.log(props);
    return (
        <div className={styles.CardsContainer}>
            <img className={styles.img} src={props.src} alt={props.TitleProd} />
            <h2 className={styles.h2}>{props.TitleProd}</h2>
            <p>{props.Price}</p>
            {props.discount && <p className={styles.discount}>{props.discount}</p>}   {/* Me gustaria que aparezca el precio original tachado, y el nuevo precio con descuento, pero todavia no lo plantee */}
            <button>¡Lo quiero!</button>
        </div>
    );    
}

export default CardsProd;