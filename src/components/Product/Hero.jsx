import NavBar from "../NavBar";

function Hero() {
    return (
        <div>
            <NavBar />
            <section className="relative flex justify-center items-center font-glacial">
                <div className="h-[300px] relative w-full flex justify-center">
                    <img
                        src="./OurProducts.jpg"
                        alt="Paper bags collection"
                        className="absolute inset-0 h-full w-full object-cover -z-10"
                    />
                    {/* bg-gradient-to-r from-green-900/70 to-green-700/70 */}
                    <div className="absolute inset-0  bg-gradient-to-r from-green-900/40 to-green-700/30 -z-10" />
                    <div className="container relative flex h-full flex-col items-center justify-center gap-4 text-center z-10">
                        <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-white sm:text-5xl font-glacial-bold">
                            Our Products
                        </h1>
                        <p className="max-w-2xl text-lg text-white/90">
                            Explore our range of eco-friendly paper bags designed for various needs
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Hero;