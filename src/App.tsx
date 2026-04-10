import ProductImage from "./component/product-image";
import ProductInfo from "./component/product-info";

function App() {
  return (
    <div className="min-h-screen bg-(--page-bg) min-[600px]:flex min-[600px]:items-center min-[600px]:justify-center">
      <main className="mx-auto flex max-w-[90%] flex-col gap-0 overflow-hidden rounded-2xl bg-(--color-white) min-[600px]:max-w-150 min-[600px]:flex-row min-[600px]:items-stretch">
        <ProductImage />
        <ProductInfo />
      </main>
    </div>
  );
}

export default App;
