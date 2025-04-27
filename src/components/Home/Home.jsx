import homePng from "../../assets/bag.jpg";
import NavBar from "../NavBar";
import "./LandingHome.css"; // Custom CSS stays

function LandingHome() {
    return (
        <div className="min-h-screen w-full">
            <NavBar className="text-white" />
            <div
                className="h-screen w-full bg-cover bg-center -z-10 overflow-hidden"
                style={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${homePng})`,
                    backgroundAttachment: "fixed",
                }}
            >
                <div className="text-white min-h-screen flex flex-col justify-center items-center gap-8 px-4 sm:px-8 md:px-12 pb-20">

                    {/* Title Section */}
                    <div className="flex flex-col items-center gap-3 text-center">
                        <h1 className="extraBoldText text-2xl sm:text-3xl md:text-5xl font-bold text-green-400 font-glacial-bold">
                            Eco-Friendly Paper Bags
                        </h1>
                        <h1 className="extraBoldText text-2xl sm:text-3xl md:text-5xl font-bold text-green-400 font-glacial-bold">
                            for a Sustainable Future
                        </h1>
                    </div>

                    {/* Subtitle Section */}
                    <h1 className="AboutTitle text-base sm:text-lg md:text-2xl font-glacial text-center">
                        Premium quality, customizable paper bags manufactured with <br className="hidden md:block" /> sustainable practices and materials.
                    </h1>

                    {/* Buttons Section */}
                    <div className="flex gap-4 sm:gap-6 flex-wrap justify-center items-center">
                        <a className="animated-button border-2 px-5 py-2 sm:px-6 sm:py-3 relative overflow-hidden z-10" href="/product">
                            Explore Products
                        </a>
                        <a className="animated-button border-2 px-5 py-2 sm:px-6 sm:py-3 relative overflow-hidden z-10" href="/#about">
                            Learn More
                        </a>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default LandingHome;
