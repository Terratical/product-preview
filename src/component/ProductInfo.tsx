import Button from "./Button";
import styles from "./ProductInfo.module.css";

export default function ProductInfo() {
  return (
    <div className={styles.root}>
      <div className={styles.content}>
        <span className={styles.category}>Perfume</span>
        <h1 className={styles.title}>Gabrielle Essence Eau De Parfum</h1>
        <p className={styles.description}>
          A floral, solar and voluptuous interpretation composed by Olivier
          Polge, Perfumer-Creator for the House of CHANEL.
        </p>
      </div>
      <div className={styles.pricing}>
        <span className={styles.currentPrice}>$149.99</span>
        <del className={styles.formerPrice}>$169.99</del>
      </div>
      <Button />
    </div>
  );
}
