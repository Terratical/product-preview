import CartIcon from "@/assets/images/icon-cart.svg";
import styles from "./Button.module.css";

export default function Button() {
  return (
    <button className={styles.root}>
      <img className={styles.cartIcon} src={CartIcon} alt="" />
      <span>Add to Cart</span>
    </button>
  );
}
