import { type ReactNode } from 'react';  
import styles from './CardsProdContainer.module.css';

type CardsProdContainerProps = {
    title: string;
    children: ReactNode;
}

function CardsProdContainer(props: CardsProdContainerProps) {
  const { title, children } = props;
  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>{title}</h1>
      <div className={styles.childrencontainer}>
        {children}
      </div>
    </div>
  );
}

export default CardsProdContainer;