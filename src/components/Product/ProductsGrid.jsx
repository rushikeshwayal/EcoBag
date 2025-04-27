function ProductsGrid() {
    return (
        <section className="py-16 flex justify-center items-center font-glacial p-5">
            <div className="container">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-8">
                    {[
                        {
                            title: "Standard Shopping Bags",
                            description: "Durable paper bags with reinforced handles, perfect for retail stores.",
                            features: ["Multiple sizes", "Customizable printing", "Reinforced handles"],
                            image: "/BandedBag.jpg",
                        },
                        {
                            title: "Food Packaging Bags",
                            description: "Food-grade paper bags ideal for bakeries, cafes, and takeaway restaurants.",
                            features: ["Grease-resistant", "FDA approved", "Various sizes"],
                            image: "/CustomizedBag.jpg",
                        },
                        {
                            title: "Luxury Gift Bags",
                            description: "Elegant paper bags for gifts, perfect for boutiques and special occasions.",
                            features: ["Premium finish", "Ribbon handles", "Custom designs"],
                            image: "/greenwithpaper.jpg",
                        },
                        {
                            title: "Promotional Bags",
                            description: "Eye-catching paper bags designed to promote your brand and message.",
                            features: ["Full-color printing", "Custom sizes", "Bulk discounts"],
                            image: "/greenwithpaper.jpg",
                        },
                        {
                            title: "Eco-Friendly Grocery Bags",
                            description: "Sustainable alternatives to plastic bags for grocery stores and markets.",
                            features: ["Extra strength", "Recyclable", "Flat bottom design"],
                            image: "/greenwithpaper.jpg",
                        },
                        {
                            title: "Custom Design Bags",
                            description: "Fully customizable paper bags tailored to your specific requirements.",
                            features: ["Bespoke designs", "Various materials", "Unique shapes"],
                            image: "/greenwithpaper.jpg",
                        },
                    ].map((product, index) => (
                        <div
                            key={index}
                            className="group overflow-hidden rounded-lg border border-stone-200 bg-white shadow-sm transition-all hover:shadow-md"
                        >
                            <div className="relative h-60 w-full overflow-hidden">
                                <img
                                    src={product.image || "/placeholder.svg"}
                                    alt={product.title}
                                    fill
                                    className="object-cover transition-transform group-hover:scale-105"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold">{product.title}</h3>
                                <p className="mt-2 text-muted-foreground">{product.description}</p>
                                <ul className="mt-4 space-y-2">
                                    {product.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-center gap-2 text-sm">
                                            <svg
                                                width="16"
                                                height="16"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="h-4 w-4 text-green-600"
                                            >
                                                <polyline points="20 6 9 17 4 12" />
                                            </svg>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
export default ProductsGrid;
