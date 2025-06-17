import { useState } from 'react';
import styles from './Navbar.module.css';

type CartItem = {
  id: number;
  title: string;
  price: string;
};

type Category = {
  id: number;
  title: string;
};

type NavbarProps = {
  cartItemCount?: number;
  onCartClick?: () => void;
  isCartOpen?: boolean;
  cartItems?: CartItem[];
  onRemoveFromCart?: (id: number) => void;
  searchText: string;
  setSearchText: (text: string) => void;
  categories: Category[];
  onCategorySelect: (categoryKey: string | null) => void;
};

function Navbar({
  cartItemCount = 0,
  onCartClick = () => {},
  isCartOpen = false,
  cartItems = [],
  onRemoveFromCart,
  setSearchText,
  searchText,
  categories,
  onCategorySelect,
}: NavbarProps) {
  const [isProductsOpen, setIsProductsOpen] = useState(false);

  const handleCategoryClick = (categoryTitle: string | null) => {
    onCategorySelect(categoryTitle?.toLowerCase() || null);
    setIsProductsOpen(false);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.left}>
        <img src="/logoMaleable.png" alt="Logo" className={styles.logo} />
        <a href="#">Home</a>
        <div
          className={styles.dropdown}
          onMouseEnter={() => setIsProductsOpen(true)}
          onMouseLeave={() => setIsProductsOpen(false)}
          >
          <a href="#" onClick={(e) => e.preventDefault()}>
            Categorías
          </a>
          {isProductsOpen && (
            <ul className={styles.dropdownMenu}>
              <li onClick={() => handleCategoryClick(null)}>Todas</li>
              {categories.map((cat) => (
                <li key={cat.id} onClick={() => handleCategoryClick(cat.title)}>
                  {cat.title}
                </li>
              ))}
            </ul>
          )}
        </div>
        <a href="#">Contacto</a>
      </div>

      <div className={styles.center}>
        <input
          type="text"
          placeholder="¿Qué estás buscando?"
          className={styles.search}
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
      </div>

      <div className={styles.carrContainer} onClick={onCartClick}>
        <img src="/carritoShop.png" alt="Carrito" className={styles.carrIcon} />
        {cartItemCount > 0 && <div className={styles.carrComp}>{cartItemCount}</div>}

        {isCartOpen && cartItems.length > 0 && (
          <div className={styles.cartDropdown} onClick={(e) => e.stopPropagation()}>
            <h4 className={styles.cartTitle}>Tu carrito Maleable</h4>
            <div className={styles.cartItemsContainer}>
              {cartItems.map((item) => (
                <div key={item.id} className={styles.cartItem}>
                  <div className={styles.itemCarr}>
                    <span>{item.title}</span>
                    <span>{item.price}</span>
                  </div>
                  <button
                    className={styles.deleteButton}
                    onClick={(e) => {
                      e.stopPropagation();
                      if (onRemoveFromCart) onRemoveFromCart(item.id);
                    }}
                  >
                    <img src="/deleteCarr.png" alt="Eliminar" />
                  </button>
                </div>
              ))}
            </div>
            <div className={styles.cartTotal}>
              Total:{' '}
              <strong>
                $
                {cartItems
                  .reduce((sum, item) => sum + parseInt(item.price.replace(/\D/g, '')), 0)
                  .toLocaleString('es-AR')}
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
