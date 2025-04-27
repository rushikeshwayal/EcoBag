import { Leaf, Recycle } from "lucide-react";

function About() {
    return (
        <div>
            <section className="py-10 sm:py-16 bg-stone-100 flex justify-center items-center flex-col font-glacial" id="about">
                <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                        {/* Image Section */}
                        <div className="relative w-full h-64 sm:h-80 md:h-96 rounded-lg overflow-hidden">
                            <img
                                src="./factory.jpg"
                                alt="Our factory"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Text Section */}
                        <div>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-6 font-glacial-bold">
                                About EcoBags
                            </h2>
                            <p className="text-muted-foreground mb-4 text-base sm:text-lg">
                                At Vidharba Paper Products, we manufacture paper products like all types of paper bags, paper cups, paper plates & donas, paper decoration utilities, and tissue paper.
                            </p>
                            <p className="text-muted-foreground mb-4 text-base sm:text-lg">
                                <strong>Vision -</strong> Vidharba Paper Products aims to be a global brand leader in the paper industry by 2040.
                            </p>
                            <p className="text-muted-foreground mb-6 text-base sm:text-lg">
                                <strong>Mission -</strong> To manufacture paper product solutions to fulfill the current and emerging needs of local and global packaging businesses.
                            </p>

                            {/* Features */}
                            <div className="flex flex-col sm:flex-row gap-6">
                                <div className="flex items-center gap-3">
                                    <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
                                        <Recycle className="h-5 w-5 text-green-600" />
                                    </div>
                                    <span className="font-medium text-base sm:text-lg">100% Recyclable</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
                                        <Leaf className="h-5 w-5 text-green-600" />
                                    </div>
                                    <span className="font-medium text-base sm:text-lg">Sustainable Materials</span>
                                </div>
                            </div>

                            {/* Optional Learn More Button */}
                            {/* <a href="#" className="mt-8 inline-block text-green-600 hover:text-green-700 text-base sm:text-lg">Learn More About Us</a> */}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default About;
