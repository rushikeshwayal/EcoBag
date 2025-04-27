import { ArrowRight, Leaf, Package, Recycle, Send, Truck } from "lucide-react";

function WhyUS() {
    return (
        <section
            className="py-16 bg-stone-50 flex justify-center items-center flex-col font-glacial px-4 sm:px-8 md:px-16"
            id="about"
        >
            <div className="w-full max-w-7xl">
                {/* Title Section */}
                <div className="text-center mb-12 px-4">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-4 font-glacial-bold">
                        Why Choose Our Paper Bags?
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto text-base sm:text-lg">
                        Our paper bags combine quality, sustainability, and customization to meet all your packaging needs.
                    </p>
                </div>

                {/* Cards Section */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
                    {/* Card 1 */}
                    <div className="bg-white p-6 sm:p-8 rounded-lg shadow-sm border border-stone-200 flex flex-col items-center text-center">
                        <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                            <Leaf className="h-6 w-6 text-green-600" />
                        </div>
                        <h3 className="text-lg sm:text-xl font-bold mb-2">Eco-Friendly</h3>
                        <p className="text-muted-foreground text-sm sm:text-base">
                            Made from 100% recyclable materials, our bags help reduce plastic waste and environmental impact.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white p-6 sm:p-8 rounded-lg shadow-sm border border-stone-200 flex flex-col items-center text-center">
                        <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                            <Package className="h-6 w-6 text-green-600" />
                        </div>
                        <h3 className="text-lg sm:text-xl font-bold mb-2">Customizable</h3>
                        <p className="text-muted-foreground text-sm sm:text-base">
                            Personalize your bags with custom printing, sizes, and designs to match your brand identity.
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-white p-6 sm:p-8 rounded-lg shadow-sm border border-stone-200 flex flex-col items-center text-center">
                        <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                            <Truck className="h-6 w-6 text-green-600" />
                        </div>
                        <h3 className="text-lg sm:text-xl font-bold mb-2">Reliable Delivery</h3>
                        <p className="text-muted-foreground text-sm sm:text-base">
                            Fast and dependable shipping to ensure your packaging needs are met on time, every time.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default WhyUS;
