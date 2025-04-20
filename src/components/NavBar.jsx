import { Filter, Package, Search } from "lucide-react"
function NavBar() {
    return (
        <div>
            <nav className="flex justify-between items-center bg-transparent p-2 px-8 text-black border-b-2 border-black top-0 font-glacial">

                <div className="text-2xl flex justify-center items-center space-x-2 gap-2">
                    <Package className="h-6 w-6 text-green-600" />EcoBags</div>
                <ul className="flex space-x-8">
                    <li><a href="/" className="text-gray-600 hover:text-gray-800 hover:font-semibold transition-all duration-75 ease-linear">Home</a></li>
                    <li><a href="#about" className="text-gray-600 hover:text-gray-800 hover:font-semibold transition-all duration-75 ease-linear">About</a></li>
                    {/* <li><a href="#services" className="text-gray-600 hover:text-gray-800 hover:font-semibold transition-all duration-75 ease-linear">Services</a></li> */}
                    <li><a href="/product" className="text-gray-600 hover:text-gray-800 hover:font-semibold transition-all duration-75 ease-linear">Products</a></li>
                    <li><a href="/contact" className="text-gray-600 hover:text-gray-800 hover:font-semibold transition-all duration-75 ease-linear">Contact</a></li>
                </ul>
            </nav>
        </div>
    )
}
export default NavBar;