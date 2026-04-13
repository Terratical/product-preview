import DesktopProductImage from "@/assets/images/image-product-desktop.jpg";
import MobileProductImage from "@/assets/images/image-product-mobile.jpg";
import styles from "./ProductImage.module.css";

export default function ProductImage() {
  return (
    <picture className={styles.frame}>
      <source media="(min-width: 600px)" srcSet={DesktopProductImage} />
      <img className={styles.mobileImg} src={MobileProductImage} alt="" />
    </picture>
  );
}
