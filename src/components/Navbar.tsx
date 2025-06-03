import styles from './Navbar.module.css';

type NavbarProps = {
  cartItemCount?: number; // Esto va mockeado para simular el carrito, siguiendo la logica de las clases
};

function Navbar({ cartItemCount }: NavbarProps) {
  return (
    <nav className={styles.navbar}>
      <div className={styles.left}>
        <img src="/logoMaleable.png" alt="Logo" className={styles.logo} />
        <a href="#">Home</a>
        <a href="#">Productos</a>
        <a href="#">Contacto</a>
      </div>

      <div className={styles.center}>
        <input type="text" placeholder="¿Qué estas buscando?" className={styles.search} />
      </div>

      <div className={styles.right}>
        <a href="#">Iniciar sesión</a>
        <div className={styles.userButton}>
          <a href="#">Crear usuario</a>
        </div>
        <div className={styles.carrContainer}>
          <img src="/carritoShop.png" alt="Carrito" className={styles.carrIcon}/>
          {cartItemCount && cartItemCount > 0 && (
            <div className={styles.carrComp}>{cartItemCount}</div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;