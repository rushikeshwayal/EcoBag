function CAT() {
    return (
        <section className="py-16 bg-green-700 text-white font-glacial flex justify-center items-center flex-col">
            <div className="container text-center">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                    Ready to Make the Switch to Eco-Friendly Packaging?
                </h2>
                <p className="max-w-xl mx-auto mb-8 text-white/90">
                    Contact us today to discuss your paper bag requirements and get a customized quote for your business.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a href="/contact" size="lg" className=" border-white border-2 px-5 py-2 text-white  cursor-pointer">
                        Request a Quote
                    </a>
                    <a
                        href="/contact"
                        size="lg"
                        variant="outline"
                        className="border-white border-2 px-5 py-2 text-white  cursor-pointer"
                    >
                        Contact Sales Team
                    </a>
                </div>
            </div>
        </section>
    )
}

export default CAT;