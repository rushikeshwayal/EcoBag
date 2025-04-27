function CAT() {
    return (
        <section className="py-12 sm:py-16 bg-green-700 text-white font-glacial flex justify-center items-center flex-col">
            <div className="w-full max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-4">
                    Ready to Make the Switch to Eco-Friendly Packaging?
                </h2>
                <p className="max-w-2xl mx-auto mb-8 text-white/90 text-base sm:text-lg">
                    Contact us today to discuss your paper bag requirements and get a customized quote for your business.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a
                        href="/contact"
                        className="border-white border-2 px-6 py-3 rounded-md text-base sm:text-lg font-medium hover:bg-white hover:text-green-700 transition-colors duration-300"
                    >
                        Request a Quote
                    </a>
                    <a
                        href="/contact"
                        className="border-white border-2 px-6 py-3 rounded-md text-base sm:text-lg font-medium hover:bg-white hover:text-green-700 transition-colors duration-300"
                    >
                        Contact Sales Team
                    </a>
                </div>
            </div>
        </section>
    );
}

export default CAT;
