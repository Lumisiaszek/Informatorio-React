import styles from './CardsCateg.module.css';

type CardsCategProps = {    
    src: string;
    title: string;
    descrip: string;
};

function CardsCateg(props: CardsCategProps) {
    console.log(props);
    return (
        <div className={styles.CardsContainer}>
            <img className={styles.img} src={props.src} alt={props.title} />
            <h2 className={styles.h2}>{props.title}</h2>
            <p className={styles.p}>{props.descrip}</p>
            <button>Ver más</button>
        </div>
    );    
}

export default CardsCateg;