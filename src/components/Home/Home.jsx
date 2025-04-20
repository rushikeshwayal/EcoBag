import homePng from "../../assets/bag.jpg";
import NavBar from "../NavBar";
import "./LandingHome.css"; // <- NEW: custom CSS file

function LandingHome() {
    return (
        <div>
            <NavBar className="text-white" />
            <div
                className="h-screen w-full bg-cover bg-center -z-10 overflow-hidden"
                style={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${homePng})`,
                    backgroundAttachment: "fixed",
                }}
            >
                <div className="text-white min-h-screen flex flex-wrap justify-center flex-col items-start pb-40 px-8 gap-5">
                    <div className="gap-2 flex flex-col justify-center items-center">
                        <h1 className="extraBoldText text-3xl sm:text-4xl md:text-5xl font-bold text-center text-green-400 font-glacial-bold">
                            Eco-Friendly Paper Bags
                        </h1>
                        <h1 className="extraBoldText text-3xl sm:text-4xl md:text-5xl font-bold text-center text-green-400 font-glacial-bold">
                            for a Sustainable Future
                        </h1>
                    </div>
                    <h1 className="AboutTitle text-lg sm:text-xl md:text-2xl  font-glacial">
                        Premium quality, customizable paper bags manufactured with <br /> sustainable practices and materials.
                    </h1>
                    <div className="flex gap-5 justify-center items-center flex-wrap">
                        <a className="animated-button border-2 px-5 py-2 relative overflow-hidden z-10">
                            Explore Products
                        </a>
                        <a className="animated-button  border-2 px-5 py-2 relative overflow-hidden z-10">
                            Learn More
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LandingHome;
