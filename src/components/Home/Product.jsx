import { ArrowRight } from "lucide-react";

function Product() {
    return (
        <section className="flex justify-center p-6 sm:p-10 font-glacial">
            <div className="w-full max-w-7xl">
                {/* Header Section */}
                <div className="flex flex-col md:flex-row justify-between items-center mb-12 px-2 sm:px-0">
                    <div className="text-center md:text-left">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-4 font-glacial-bold">
                            Our Product Range
                        </h2>
                        <p className="text-muted-foreground max-w-2xl text-base sm:text-lg mx-auto md:mx-0">
                            Discover our diverse collection of paper bags designed for various industries and purposes.
                        </p>
                    </div>
                    <a
                        href="/product"
                        className="flex items-center gap-2 text-green-600 hover:text-green-700 mt-4 md:mt-0 text-base"
                    >
                        View all products <ArrowRight className="h-4 w-4" />
                    </a>
                </div>

                {/* Product Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
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
                            className="group overflow-hidden rounded-lg border border-stone-200 bg-white shadow-sm hover:shadow-md transition-all"
                        >
                            <div className="relative w-full h-56 sm:h-60 overflow-hidden">
                                <img
                                    src={product.image}
                                    alt={product.title}
                                    className="w-full h-full object-cover transition-transform group-hover:scale-105"
                                />
                            </div>
                            <div className="p-4 sm:p-6 text-center md:text-left">
                                <h3 className="text-lg sm:text-xl font-bold">{product.title}</h3>
                                <p className="mt-2 text-muted-foreground text-sm sm:text-base">
                                    {product.description}
                                </p>
                                <a
                                    href="/product"
                                    className="inline-block mt-4 text-green-600 hover:text-green-700 cursor-pointer text-sm sm:text-base"
                                >
                                    Learn More
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Product;
