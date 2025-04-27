function CustomizableBag(params) {
    return (
        <section className="py-16 bg-stone-50 flex justify-center font-glacial sm:p-0 p-2">
            <div className="container">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="relative h-[400px] rounded-lg overflow-hidden  ">
                        <img
                            src="./BagC.jpg"
                            alt="Custom paper bag solutions"
                            className="object-cover w-full h-full rounded-xl"
                        />
                    </div>
                    <div className="p-5">
                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">Custom Solutions</h2>
                        <p className="text-muted-foreground mb-4">
                            Can't find exactly what you're looking for? We specialize in creating custom paper bag solutions
                            tailored to your specific needs and brand identity.
                        </p>
                        <p className="text-muted-foreground mb-6">
                            Our design team will work closely with you to create paper bags that perfectly represent your brand,
                            from size and shape to printing and finishing touches.
                        </p>
                        <div className="space-y-4">
                            <div className="flex items-start gap-3">
                                <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mt-0.5">
                                    <svg
                                        width="14"
                                        height="14"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="text-green-600"
                                    >
                                        <polyline points="20 6 9 17 4 12" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="font-medium">Custom Designs</h3>
                                    <p className="text-sm text-muted-foreground">
                                        Full-color printing with your logo, artwork, and messaging
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mt-0.5">
                                    <svg
                                        width="14"
                                        height="14"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="text-green-600"
                                    >
                                        <polyline points="20 6 9 17 4 12" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="font-medium">Flexible Quantities</h3>
                                    <p className="text-sm text-muted-foreground">From small batches to large bulk orders</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mt-0.5">
                                    <svg
                                        width="14"
                                        height="14"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="text-green-600"
                                    >
                                        <polyline points="20 6 9 17 4 12" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="font-medium">Special Finishes</h3>
                                    <p className="text-sm text-muted-foreground">
                                        Options include matte, glossy, embossed, or specialty coatings
                                    </p>
                                </div>
                            </div>
                        </div>
                        <p className="mt-6 px-2 text-green-600 hover:text-green-700 cursor-pointer">Discuss Your Custom Needs</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default CustomizableBag;
