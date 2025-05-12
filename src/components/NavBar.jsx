import { useState } from "react";
import { AlignJustify, Package } from "lucide-react";

function NavBar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const handleAboutClick = (e) => {
        e.preventDefault();
        const isHomePage = window.location.pathname === "/";

        if (isHomePage) {
            // Scroll to "about" section directly on the current page
            const aboutSection = document.getElementById("about");
            if (aboutSection) {
                aboutSection.scrollIntoView({ behavior: "smooth" });
            }
        } else {
            // Navigate to homepage and scroll to "about" section
            window.location.href = "/#about";
        }
    };

    return (
        <div className="w-full">
            <nav className="flex justify-between items-center bg-transparent p-2 px-8 text-black border-b-2 border-black top-0 font-glacial relative">
                {/* Logo Section */}
                <div className="sm:text-2xl lg:text-xl text-sm flex justify-center items-center space-x-2 gap-2">
                    {/* <Package className="h-6 w-6 text-green-600" /> */}
                    <img
                        src="/logo_v_-removebg-preview.png"
                        alt="Logo"
                        className=" w-32"
                    />
                </div>

                {/* Desktop Menu */}
                <ul className="hidden md:flex space-x-8">
                    <li>
                        <a href="/" className="text-gray-600 hover:text-gray-800 hover:font-semibold transition-all duration-75 ease-linear">
                            Home
                        </a>
                    </li>
                    <li>
                        {/* Handle "About" click */}
                        <a
                            href="#about"
                            onClick={handleAboutClick}
                            className="text-gray-600 hover:text-gray-800 hover:font-semibold transition-all duration-75 ease-linear"
                        >
                            About
                        </a>
                    </li>
                    <li>
                        <a href="/product" className="text-gray-600 hover:text-gray-800 hover:font-semibold transition-all duration-75 ease-linear">
                            Products
                        </a>
                    </li>
                    <li>
                        <a href="/contact" className="text-gray-600 hover:text-gray-800 hover:font-semibold transition-all duration-75 ease-linear">
                            Contact
                        </a>
                    </li>
                </ul>

                {/* Mobile Menu Icon */}
                <div className="md:hidden">
                    <button onClick={toggleMenu}>
                        <AlignJustify className="h-6 w-6 text-black" />
                    </button>
                </div>
            </nav>

            {/* Mobile Dropdown Menu with Animation */}
            <div
                className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${menuOpen ? 'max-h-60' : 'max-h-0'
                    } bg-white border-t-2 border-black px-8 font-glacial text-lg`}
            >
                <div className="flex flex-col py-4 space-y-4">
                    <a href="/" className="block text-gray-600 hover:text-gray-800 hover:font-semibold transition-all duration-75 ease-linear">
                        Home
                    </a>
                    <a
                        href="#about"
                        onClick={handleAboutClick}
                        className="block text-gray-600 hover:text-gray-800 hover:font-semibold transition-all duration-75 ease-linear"
                    >
                        About
                    </a>
                    <a href="/product" className="block text-gray-600 hover:text-gray-800 hover:font-semibold transition-all duration-75 ease-linear">
                        Products
                    </a>
                    <a href="/contact" className="block text-gray-600 hover:text-gray-800 hover:font-semibold transition-all duration-75 ease-linear">
                        Contact
                    </a>
                </div>
            </div>
        </div>
    );
}

export default NavBar;
