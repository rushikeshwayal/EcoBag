import { ArrowRight, Leaf, Package, Recycle, Send, Truck } from "lucide-react"
function WhyUS() {
    return (
        <section className="py-16 bg-stone-50 flex justify-center items-center flex-col font-glacial" id="about">
            <div className="container">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4 font-glacial-bold">Why Choose Our Paper Bags?</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Our paper bags combine quality, sustainability, and customization to meet all your packaging needs.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-white p-8 rounded-lg shadow-sm border border-stone-200 flex flex-col items-center text-center">
                        <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                            <Leaf className="h-6 w-6 text-green-600" />
                        </div>
                        <h3 className="text-xl font-bold mb-2">Eco-Friendly</h3>
                        <p className="text-muted-foreground">
                            Made from 100% recyclable materials, our bags help reduce plastic waste and environmental impact.
                        </p>
                    </div>
                    <div className="bg-white p-8 rounded-lg shadow-sm border border-stone-200 flex flex-col items-center text-center">
                        <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                            <Package className="h-6 w-6 text-green-600" />
                        </div>
                        <h3 className="text-xl font-bold mb-2">Customizable</h3>
                        <p className="text-muted-foreground">
                            Personalize your bags with custom printing, sizes, and designs to match your brand identity.
                        </p>
                    </div>
                    <div className="bg-white p-8 rounded-lg shadow-sm border border-stone-200 flex flex-col items-center text-center">
                        <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                            <Truck className="h-6 w-6 text-green-600" />
                        </div>
                        <h3 className="text-xl font-bold mb-2">Reliable Delivery</h3>
                        <p className="text-muted-foreground">
                            Fast and dependable shipping to ensure your packaging needs are met on time, every time.
                        </p>
                    </div>
                </div>
            </div>
        </section>

    )

}

export default WhyUS;