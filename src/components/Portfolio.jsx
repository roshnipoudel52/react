
import React from "react";
import  { Link } from "react-router";

export default function 
Portfolio() {
    return (
        <div className="font-sans bg-gray-900 text-white min-h-screen">

            <header className="fixed top-0 left-0 w-full bg-gray-900 py-4 z-10">
                <nav className="flex justify-between items-center px-10">
                    <div className="text-2xl font-bold text-red-500">amogoe</div>
                    <ul className="flex space-x-8 text-lg">
                        <Link to='/'>
                        <li className="hover:text-red-400 cursor-pointer">Home</li>
                        </Link>

                        <Link to='/Service'>
                        <li className="hover:text-red-400 cursor-pointer">Services</li>
                        </Link>

               
                        <li className="hover:text-red-400 cursor-pointer">About</li>
                        <li className="hover:text-red-400 cursor-pointer">Skills</li>
                        <li className="hover:text-red-400 cursor-pointer">Portfolio</li>
                        <li className="hover:text-red-400 cursor-pointer">Contact</li>
                    </ul>
                </nav>
            </header>

            {/* Hero Section */}
            <main className="flex flex-col items-center justify-center text-center h-screen px-4 pt-16">
                <h1 className="text-5xl font-bold mb-4">
                    Hello, I'm a <span className="text-red-500">Front-end Developer</span>
                </h1>
                <p className="text-lg text-gray-400 max-w-2xl mb-6">
                    Fond of creating web application designs and bringing them to life
                    using code & developing mobile-friendly designs.
                </p>
                <button className="bg-red-500 text-white px-6 py-3 rounded-full text-lg font-medium hover:bg-red-600 transition">
                    Creator Journey
                </button>
            </main>

            {/* Scroll Indicator */}
            <div className="fixed right-10 top-1/2 transform -translate-y-1/2 flex flex-col space-y-4">
                <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                <div className="w-4 h-4 border-2 border-red-500 rounded-full"></div>
                <div className="w-4 h-4 border-2 border-red-500 rounded-full"></div>
            </div>





        </div>
    );
}
