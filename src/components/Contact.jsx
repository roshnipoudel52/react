import React from "react";

export default function ContactForm() {
    return (
        <section className="bg-gray-900 text-white py-16">
            <div className="container mx-auto px-6">
                {/* Section Title */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-red-500">Contact Me</h2>
                    <p className="text-gray-400 mt-4">
                        Feel free to reach out for collaborations or just a friendly chat!
                    </p>
                </div>

                {/* Form */}
                <div className="max-w-2xl mx-auto bg-gray-800 p-8 rounded-lg shadow-lg">
                    <form action="#" method="POST">
                        {/* Name Field */}
                        <div className="mb-6">
                            <label htmlFor="name" className="block text-sm font-medium mb-2">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-md text-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
                                placeholder="Your Name"
                                required
                            />
                        </div>

                        {/* Email Field */}
                        <div className="mb-6">
                            <label htmlFor="email" className="block text-sm font-medium mb-2">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-md text-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
                                placeholder="Your Email"
                                required
                            />
                        </div>

                        {/* Message Field */}
                        <div className="mb-6">
                            <label htmlFor="message" className="block text-sm font-medium mb-2">
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                rows="4"
                                className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-md text-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
                                placeholder="Your Message"
                                required
                            ></textarea>
                        </div>

                        {/* Submit Button */}
                        <div className="text-center">
                            <button
                                type="submit"
                                className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-full text-lg font-medium transition"
                            >
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}
