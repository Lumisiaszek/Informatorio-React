import styles from './Navbar.module.css';

type NavbarProps = {
  cartItemCount?: number; // Esto va mockeado para simular el carrito, siguiendo la logica de las clases
};

function Navbar({ cartItemCount }: NavbarProps) {
  return (
    <nav className={styles.navbar}>
      <div className={styles.left}>
        <img src="https://via.placeholder.com/50" alt="Logo" className={styles.logo} />
        <a href="#">Home</a>
        <a href="#">Productos</a>
        <a href="#">Contacto</a>
      </div>

      <div className={styles.center}>
        <input type="text" placeholder="Buscá lo que necesitás" className={styles.search} />
      </div>

      <div className={styles.right}>
        <a href="#">Iniciar sesión</a>
        <a href="#">Crear usuario</a>
        <div className={styles.carrContainer}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/3144/3144456.png"
            alt="Carrito"
            className={styles.carrIcon}
          />
          {cartItemCount && cartItemCount > 0 && (
            <span className={styles.cartBadge}>{cartItemCount}</span>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;