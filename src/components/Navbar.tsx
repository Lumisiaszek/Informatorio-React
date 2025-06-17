import styles from './Navbar.module.css';

type CartItem = {
  id: number;
  title: string;
  price: string;
};

type NavbarProps = {
  cartItemCount?: number; 
  onCartClick?: () => void; 
  isCartOpen?: boolean;
  cartItems?: CartItem[];
  onRemoveFromCart?: (id: number) => void;
  searchText: string;
  setSearchText: (text: string) => void;
};


function Navbar({ cartItemCount = 0, onCartClick = () => {}, isCartOpen = false, cartItems = [], onRemoveFromCart, setSearchText, searchText }: NavbarProps) {
  return (
    <nav className={styles.navbar}>
      <div className={styles.left}>
        <img src="/logoMaleable.png" alt="Logo" className={styles.logo} />
        <a href="#">Home</a>
        <a href="#">Productos</a>
        <a href="#">Contacto</a>
      </div>

      <div className={styles.center}>
        <input type="text" placeholder="¿Qué estas buscando?" className={styles.search} value={searchText} onChange={(e) => setSearchText(e.target.value)}  />
      </div>


      <div className={styles.carrContainer} onClick={onCartClick}>
        <img src="/carritoShop.png" alt="Carrito" className={styles.carrIcon} />
        {(cartItemCount ?? 0) > 0 && (
          <div className={styles.carrComp}>{cartItemCount}</div>
        )}

      {isCartOpen && cartItems.length > 0 && (
        <div className={styles.cartDropdown} onClick={(e) => e.stopPropagation()}>
          <h4 className={styles.cartTitle}>Tu carrito Maleable</h4>
          <div className={styles.cartItemsContainer}>
            {cartItems.map((item, index) => (
              <div key={index} className={styles.cartItem}>
                <div className={styles.itemCarr}>
                  <span>{item.title}</span>
                  <span>{item.price}</span>
                </div>
                <button className={styles.deleteButton} onClick={(e) => {e.stopPropagation(); if(onRemoveFromCart) onRemoveFromCart(item.id)}}><img src='/deleteCarr.png'/></button>
              </div>
            ))}
          </div>
          <div className={styles.cartTotal}>
            Total:{" "}
            <strong>
              $
              {cartItems
                .reduce((sum, item) => sum + parseInt(item.price.replace(/\D/g, "")), 0)
                .toLocaleString("es-AR")}
            </strong>
          </div>
          <button className={styles.finishButton}>Finalizar compra</button>
        </div>
      )}
    </div>
    </nav>
  );
}

export default Navbar;