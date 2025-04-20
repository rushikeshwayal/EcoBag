import { ArrowRight, Leaf, Package, Recycle, Send, Truck } from "lucide-react";
import DesignerBag from "../../assets/DesignerBag.jpg";
function Product() {
    return (
        < section className="flex justify-center p-10 font-glacial" >
            <div className="container">
                <div className="flex flex-col md:flex-row justify-between items-center mb-12">
                    <div>
                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4 font-glacial-bold">Our Product Range</h2>
                        <p className="text-muted-foreground max-w-2xl">
                            Discover our diverse collection of paper bags designed for various industries and purposes.
                        </p>
                    </div>
                    <a
                        href="/product"
                        className="flex items-center gap-2 text-green-600 hover:text-green-700 mt-4 md:mt-0"
                    >
                        View all products <ArrowRight className="h-4 w-4" />
                    </a>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                        {
                            title: "Designer Paper Bags",
                            description: "Sturdy paper bags with handles, perfect for retail stores and boutiques.",
                            image: "./BandedBag2.jpg",
                        },
                        {
                            title: "Black Paper Bags",
                            description: "Food-grade paper bags for bakeries, cafes, and restaurants.",
                            image: "./BlackBag.jpg",
                        },
                        {
                            title: "Customized Paper Bags",
                            description: "Elegant paper bags for gifts, events, and special occasions.",
                            image: "./CustomizedBag2.jpg",
                        },
                    ].map((product, index) => (
                        <div
                            key={index}
                            className="group overflow-hidden rounded-lg border border-stone-200 bg-white shadow-sm transition-all hover:shadow-md"
                        >
                            <div className="relative h-60 w-full overflow-hidden">
                                <img
                                    src={product.image}
                                    alt={product.title}
                                    fill
                                    className="object-cover transition-transform group-hover:scale-105"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold">{product.title}</h3>
                                <p className="mt-2 text-muted-foreground">{product.description}</p>
                                <a
                                    href="/product"
                                    variant="outline"
                                    className="mt-4  text-green-600  hover:text-green-700 cursor-pointer"
                                >
                                    Learn More
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section >
    );
}
export default Product;