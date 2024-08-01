import { HeroShop } from "../HeroShop/HeroShop";
import ProductsDataAll from "../ProductsDataAll/ProductsDataAll.json";
import ProductsListAll from "../ProductsListAll/ProductsListAll";
export function AllProductsPage() {
  return (
    <>
      <main>
        <HeroShop />
        <ProductsListAll items={ProductsDataAll} />
      </main>
    </>
  );
}
