function ProductsGrid() {
    return (
        <section className="py-16 flex justify-center items-center font-glacial p-5">
            <div className="container">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-8">
                    {[
                        {
                            title: "V Bottom Paper Bag",
                            description: "Sturdy and eco-friendly V-bottom paper bags, ideal for retail packaging and food service.",
                            features: ["Available in multiple sizes", "Custom branding options", "1Kg weight capacity"],
                            image: "/VPaper.jpg",
                        },
                        {
                            title: "Customized Paper Bag",
                            description: "Tailor-made paper bags designed to suit your business needs, from branding to size customization.",
                            features: ["Grease-resistant coating", "FDA-approved material", "Available in various sizes and colors"],
                            image: "/CustomizedPaperBag.webp",
                        },
                        {
                            title: "Square Bottom Craft Paper Bags",
                            description: "Strong, flat-bottom paper bags perfect for carrying groceries, gifts, and bakery items.",
                            features: ["1Kg capacity"],
                            image: "/SqurePaperBag.jpg",
                        },
                        {
                            title: "Black Printed Paper Bags",
                            description: "Sleek and stylish black paper bags with high-quality printing, perfect for branding and promotions.",
                            features: ["High-resolution full-color printing", "Custom sizes available", "Bulk order discounts"],
                            image: "/BlackBag.webp",
                        },
                        {
                            title: "Twisted Paper Handle Bags",
                            description: "Durable and stylish paper bags with twisted handles, great for shopping, gifting, and branding.",
                            features: ["Reinforced handles for extra strength", "Eco-friendly and recyclable", "Flat bottom for better stability"],
                            image: "/3TwistedHandleBag.webp",
                        },
                        {
                            title: "Designer Paper Bags",
                            description: "Premium quality paper bags with unique and stylish designs, suitable for high-end retail and gifting.",
                            features: ["Luxury matte or glossy finish", "Customizable prints and colors", "Available in various sizes"],
                            image: "/greenwithpaper.jpg",
                        },
                        {
                            title: "Eco-Friendly Paper Bags",
                            description: "Sustainable paper bags made from recyclable materials, reducing environmental impact without compromising quality.",
                            features: ["100% biodegradable", "Reusable and recyclable", "Available in kraft and white finishes"],
                            image: "/EcoBag.webp",
                        },
                        {
                            title: "Paper Cups",
                            description: "High-quality disposable paper cups, perfect for hot and cold beverages in cafes, offices, and events.",
                            features: ["Available in  55ML, 65ML 100ML, 150ML, and 200ML", "Leak-proof and heat-resistant", "Eco-friendly and food-safe"],
                            image: "/PaperCups2.jpg",
                        },
                        {
                            title: "White Tissue Paper",
                            description: "Soft and absorbent white tissue paper, ideal for packaging, wrapping, and personal use.",
                            features: ["Lightweight and tear-resistant", "100% biodegradable", "Available in different sizes"],
                            image: "/WhiteTissue.webp",
                        },
                        {
                            title: "Disposable Paper Plates",
                            description: "Strong and eco-friendly disposable paper plates, perfect for parties, catering, and takeaways.",
                            features: ["Available in various sizes", "Food-grade and leak-resistant", "100% compostable"],
                            image: "/DesposablePlates.jpg",
                        },
                        {
                            title: "Silver Paper Dona",
                            description: "Traditional eco-friendly silver-coated paper bowls, ideal for serving snacks, sweets, and street food.",
                            features: ["6-inch size", "100ML capacity"],
                            image: "/SilverPaperDrone.jpg",
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
