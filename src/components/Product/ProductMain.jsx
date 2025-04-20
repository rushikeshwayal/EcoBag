import Footer from "../Footer";
import CustomizableBag from "./CustomeBag";
import Hero from "./Hero";
import ProductsGrid from "./ProductsGrid";

function ProductMain() {
    return (
        <div className="product-main">
            <Hero />
            <ProductsGrid />
            <CustomizableBag />
            <Footer />
        </div>
    )
}
export default ProductMain;