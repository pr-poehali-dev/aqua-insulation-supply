import ProductCatalog from './product/ProductCatalog';
import ProductFunctions from './product/ProductFunctions';
import ProductConstruction from './product/ProductConstruction';
import ProductSpecs from './product/ProductSpecs';

const Product = () => {
  return (
    <section id="product" className="relative bg-bg py-24 md:py-36">
      <div className="container relative z-10">
        <ProductCatalog />
        <ProductFunctions />
        <ProductConstruction />
        <ProductSpecs />
      </div>
    </section>
  );
};

export default Product;
