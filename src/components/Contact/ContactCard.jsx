import { Mail, MapPin, Package, Phone } from "lucide-react"
function ContactCard() {
    return (
        <section className="py-16 flex justify-center  px-5 ">
            <div className="container">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg border border-stone-200 shadow-sm">
                        <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                            <Phone className="h-6 w-6 text-green-600" />
                        </div>
                        <h3 className="text-xl font-bold mb-2">Call Us</h3>
                        <p className="text-muted-foreground mb-4">
                            Our customer service team is available Monday to Friday, 9am to 5pm.
                        </p>
                        <a href="tel:+15551234567" className="text-green-600 font-medium hover:underline">
                            +1 (555) 123-4567
                        </a>
                    </div>
                    <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg border border-stone-200 shadow-sm">
                        <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                            <Mail className="h-6 w-6 text-green-600" />
                        </div>
                        <h3 className="text-xl font-bold mb-2">Email Us</h3>
                        <p className="text-muted-foreground mb-4">
                            Send us an email and we'll get back to you within 24 hours.
                        </p>
                        <a href="mailto:contact@ecobags.com" className="text-green-600 font-medium hover:underline">
                            contact@ecobags.com
                        </a>
                    </div>
                    <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg border border-stone-200 shadow-sm">
                        <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                            <MapPin className="h-6 w-6 text-green-600" />
                        </div>
                        <h3 className="text-xl font-bold mb-2">Visit Us</h3>
                        <p className="text-muted-foreground mb-4">
                            Our headquarters and manufacturing facility are located at:
                        </p>
                        <address className="not-italic text-green-600 font-medium">
                            123 Eco Street, Green City, EC 12345
                        </address>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default ContactCard;