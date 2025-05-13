import React, { useState } from "react";

export default function ContactForm() {
    const [showPopup, setShowPopup] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        const formData = new FormData(e.target);

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData,
            });

            const result = await response.json();

            if (result.success) {
                setShowPopup(true);
                setTimeout(() => setShowPopup(false), 3000);
                e.target.reset();
            } else {
                alert("❌ Submission failed. Please try again.");
            }
        } catch (error) {
            alert("❌ Something went wrong.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className="py-16 bg-stone-50 relative font-glacial">

            {/* ✅ Toast Notification */}
            {showPopup && (
                <div className="fixed top-6 left-1/2 transform -translate-x-1/2 bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg z-50 animate-slideDown">
                    ✅ Form submitted successfully!
                </div>
            )}

            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

                    {/* Form Section */}
                    <div>
                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">Get in Touch</h2>
                        <p className="text-muted-foreground mb-8">
                            Fill out the form below and one of our representatives will contact you shortly.
                        </p>
                        <p hidden>Vidharbha Paper Products</p>

                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <input
                                type="hidden"
                                name="access_key"
                                value="5dcbbd2d-a121-455b-aa15-232d97e69ac8"
                            />

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="first-name" className="text-sm font-medium">
                                        First Name*
                                    </label>
                                    <input
                                        id="first-name"
                                        name="first_name"
                                        required
                                        placeholder="Enter your first name"
                                        className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="last-name" className="text-sm font-medium">
                                        Last Name*
                                    </label>
                                    <input
                                        id="last-name"
                                        name="last_name"
                                        required
                                        placeholder="Enter your last name"
                                        className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium">
                                    Email*
                                </label>
                                <input
                                    id="email"
                                    type="email"
                                    name="email"
                                    required
                                    placeholder="Enter your email"
                                    className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="phone" className="text-sm font-medium">
                                    Phone Number*
                                </label>
                                <input
                                    id="phone"
                                    type="tel"
                                    name="phone"
                                    required
                                    placeholder="Enter your phone number"
                                    className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="subject" className="text-sm font-medium">
                                    Subject*
                                </label>
                                <input
                                    id="subject"
                                    name="subject"
                                    required
                                    placeholder="What is your inquiry about?"
                                    className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium">
                                    Message*
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    rows="4"
                                    placeholder="Write your message..."
                                    className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                                ></textarea>
                            </div>

                            <div>
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className={`w-full flex justify-center items-center gap-2 bg-green-600 text-white px-6 py-2 rounded-lg font-semibold transition duration-300 ${isSubmitting ? "opacity-70 cursor-not-allowed" : "hover:bg-green-700"
                                        }`}
                                >
                                    {isSubmitting ? (
                                        <>
                                            <svg
                                                className="w-5 h-5 animate-spin text-white"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                            >
                                                <circle
                                                    className="opacity-25"
                                                    cx="12"
                                                    cy="12"
                                                    r="10"
                                                    stroke="currentColor"
                                                    strokeWidth="4"
                                                ></circle>
                                                <path
                                                    className="opacity-75"
                                                    fill="currentColor"
                                                    d="M4 12a8 8 0 018-8v8z"
                                                ></path>
                                            </svg>
                                            Submitting...
                                        </>
                                    ) : (
                                        "Submit"
                                    )}
                                </button>
                            </div>
                        </form>
                    </div>

                    {/* Right Section */}
                    <div>
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
                                        <span className="text-muted-foreground">Monday - Saturday</span>
                                        <span className="font-medium">8:00 AM - 6:00 PM</span>
                                    </li>
                                    {/* <li className="flex justify-between">
                                        <span className="text-muted-foreground">Saturday</span>
                                        <span className="font-medium">10:00 AM - 2:00 PM</span>
                                    </li> */}
                                    <li className="flex justify-between">
                                        <span className="text-muted-foreground">Sunday</span>
                                        <span className="font-medium">Closed</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
