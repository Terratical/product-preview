import ProductImage from "./component/ProductImage";
import ProductInfo from "./component/ProductInfo";
import styles from "@/App.module.css";

function App() {
  return (
    <main className={styles.root}>
      <article className={styles.content}>
        <ProductImage />
        <ProductInfo />
      </article>
    </main>
  );
}

export default App;
