import DesktopProductImage from "@/assets/images/image-product-desktop.jpg";
import MobileProductImage from "@/assets/images/image-product-mobile.jpg";

export default function ProductImage() {
  return (
    <picture className="relative block w-full shrink-0 min-[600px]:min-h-0 min-[600px]:w-1/2 min-[600px]:self-stretch min-[600px]:overflow-hidden">
      <source media="(min-width: 600px)" srcSet={DesktopProductImage} />
      <img
        className="block h-auto w-full min-[600px]:absolute min-[600px]:inset-0 min-[600px]:h-full min-[600px]:w-full min-[600px]:object-cover"
        src={MobileProductImage}
        alt=""
      />
    </picture>
  );
}
