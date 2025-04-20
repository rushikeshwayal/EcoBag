import { ArrowRight, Leaf, Package, Recycle, Send, Truck } from "lucide-react"
function About() {
    return (
        <div>
            <section className="py-16 bg-stone-100 flex justify-center items-center flex-col font-glacial" id="about">
                <div className="container">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="relative h-[400px] rounded-lg overflow-hidden">
                            <img src="./factory.jpg" alt="Our factory" fill className="object-cover" />
                        </div>
                        <div>
                            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">About EcoBags</h2>
                            <p className="text-muted-foreground mb-4">
                                At Vidharba Paper Products, We manufacture the paper products like, all type of paper bags,paper cups, paper plates & donas, paper decoration utilities, tissue paper
                            </p>
                            <p className="text-muted-foreground mb-6">
                                Vision -  Vidharba Paper Products aims to be a global brand leader in paper industry by 2040
                            </p>
                            <p className="text-muted-foreground mb-6">
                                Mission -  To Manufature the paper products solututions to fulfill the current and emerging needs of loacal and global packaging businesses.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <div className="flex items-center gap-2">
                                    <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
                                        <Recycle className="h-5 w-5 text-green-600" />
                                    </div>
                                    <span className="font-medium">100% Recyclable</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
                                        <Leaf className="h-5 w-5 text-green-600" />
                                    </div>
                                    <span className="font-medium">Sustainable Materials</span>
                                </div>
                            </div>
                            {/* <a className="mt-8 text-green-600 hover:text-green-700 ">Learn More About Us</a> */}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default About;