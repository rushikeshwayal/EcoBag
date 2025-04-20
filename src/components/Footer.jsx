import { ArrowRight, Leaf, Package, Recycle, Send, Truck } from "lucide-react"
function Footer() {
    return (
        <footer className="bg-stone-800 text-white py-12 flex justify-center items-center font-glacial">
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <Package className="h-6 w-6 text-green-400" />
                            <span className="text-xl font-bold">EcoBags</span>
                        </div>
                        <p className="text-stone-300 mb-4">Premium quality paper bags for a sustainable future.</p>
                        <div className="flex gap-4">
                            {["facebook", "twitter", "instagram", "linkedin"].map((social) => (
                                <a key={social} href={`#${social}`} className="text-stone-300 hover:text-green-400">
                                    <span className="sr-only">{social}</span>
                                    <div className="h-8 w-8 rounded-full bg-stone-700 flex items-center justify-center">
                                        <svg
                                            width="16"
                                            height="16"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                                        </svg>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>
                    <div>
                        <h3 className="font-bold text-lg mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            {["Home", "About", "Product", "Contact"].map((link) => (
                                <li key={link}>
                                    <a
                                        className="text-stone-300 hover:text-green-400 cursor-pointer"
                                    >
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-bold text-lg mb-4">Products</h3>
                        <ul className="space-y-2">
                            {["Shopping Bags", "Food Packaging", "Gift Bags", "Custom Designs", "Bulk Orders"].map((product) => (
                                <li key={product}>
                                    <a href="/product" className="text-stone-300 hover:text-green-400">
                                        {product}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-bold text-lg mb-4">Contact Us</h3>
                        <address className="not-italic text-stone-300 space-y-2">
                            <p>202/2/15 Jamod, Khel Lon,</p>
                            <p>Jalgaon,Buldhana.</p>
                            <p>contact@ecobags.com</p>
                            <p>+1 (555) 123-4567</p>
                        </address>
                        {/* <form className="mt-4 flex gap-2">
                            <input
                                type="email"
                                placeholder="Your email"
                                className="flex-1 rounded-md border border-stone-600 bg-stone-700 px-3 py-2 text-sm text-white placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-green-400"
                            />
                            <a size="sm" className="bg-green-600 hover:bg-green-700">
                                <Send className="h-4 w-4" />
                            </a>
                        </form> */}
                    </div>
                </div>
                <div className="mt-8 pt-8 border-t border-stone-700 text-center text-stone-400 text-sm">
                    <p>© {new Date().getFullYear()} EcoBags. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
export default Footer;