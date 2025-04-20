function ContactForm() {
    return (
        <section className="py-16 bg-stone-50">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Form Section */}
                    <div>
                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">Get in Touch</h2>
                        <p className="text-muted-foreground mb-8">
                            Fill out the form below and one of our representatives will contact you shortly.
                        </p>
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="first-name" className="text-sm font-medium">
                                        First Name
                                    </label>
                                    <input
                                        id="first-name"
                                        placeholder="Enter your first name"
                                        className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="last-name" className="text-sm font-medium">
                                        Last Name
                                    </label>
                                    <input
                                        id="last-name"
                                        placeholder="Enter your last name"
                                        className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium">
                                    Email
                                </label>
                                <input
                                    id="email"
                                    type="email"
                                    placeholder="Enter your email"
                                    className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="phone" className="text-sm font-medium">
                                    Phone Number
                                </label>
                                <input
                                    id="phone"
                                    type="tel"
                                    placeholder="Enter your phone number"
                                    className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="subject" className="text-sm font-medium">
                                    Subject
                                </label>
                                <input
                                    id="subject"
                                    placeholder="What is your inquiry about?"
                                    className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    placeholder="Enter your message"
                                    rows={5}
                                    className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full px-4 py-2 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-600"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>

                    {/* Map and Business Hours Section */}
                    <div className="space-y-6">
                        <div className="relative h-[400px] w-full rounded-lg overflow-hidden">
                            <img
                                src="./contactform.jpg"
                                alt="Map location"
                                className="object-cover w-full h-full"
                            />
                        </div>
                        <div className="bg-white p-6 rounded-lg border border-stone-200 shadow-sm">
                            <h3 className="text-xl font-bold mb-4">Business Hours</h3>
                            <ul className="space-y-2">
                                <li className="flex justify-between">
                                    <span className="text-muted-foreground">Monday - Friday</span>
                                    <span className="font-medium">9:00 AM - 5:00 PM</span>
                                </li>
                                <li className="flex justify-between">
                                    <span className="text-muted-foreground">Saturday</span>
                                    <span className="font-medium">10:00 AM - 2:00 PM</span>
                                </li>
                                <li className="flex justify-between">
                                    <span className="text-muted-foreground">Sunday</span>
                                    <span className="font-medium">Closed</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ContactForm;