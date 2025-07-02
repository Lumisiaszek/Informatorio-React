import styles from './Footer.module.css';

function Footer() { 
return (
    <div className={styles.contenedor}>
        <div className={styles.contleft}>
            <img src="/logoMaleableblanco.png" alt="Logo" className={styles.logo} />
            <div className={styles.links}>
            <a href="#">¿Necesitas ayuda?</a>
            <a href="#">Preguntas frecuentes</a>
            <a href="#">Envíos y devoluciones</a>
            </div>
        </div>
        <div className={styles.contcenter}>
            <div>
            <a href="#"><img src="/instagram.png" alt="" /></a>
            <a href="#"><img src="/facebook.png" alt="" /></a>
            </div>
            <p className={styles.textcopy}>© 2025 Maleable. Todos los derechos reservados.</p>
        </div>
        <div className={styles.contright}>
            <a href="#"><img src="/ubicacion.png" alt="" />Calle Siempre viva 742</a>
            <a href="#"><img src="/whatsapp.png" alt="" />+54 9 3624378798</a>
            <a href="#"><img src="/correo.png" alt="" />maleableShop@gmail.com</a>
        </div>
    </div>
 );
}

export default Footer;