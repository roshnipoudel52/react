import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Portfolio() {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-1/4 bg-white shadow-lg p-6 flex flex-col items-center">
        <img
          src="https://via.placeholder.com/100"
          alt="Profile"
          className="rounded-full w-24 h-24 mb-4"
        />
        <h1 className="text-xl font-bold">Jackson Ford</h1>
        <p className="text-gray-500 mb-6">UI/UX Designer in Philippines</p>
        <nav className="space-y-2">
          {[
            "Home",
            "About",
            "Services",
            "Skills",
            "Education",
            "Experience",
            "Work",
            "Blog",
            "Contact",
          ].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="block text-gray-600 hover:text-blue-500"
            >
              {item}
            </a>
          ))}
        </nav>
        <footer className="mt-auto text-gray-400 text-sm">
          <p>&copy; 2025 All rights reserved.</p>
          <p>Made with ♥ by Colorlib</p>
        </footer>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center bg-gray-50 relative">
        <div className="text-center">
          <h2 className="text-4xl font-bold">Hi! I'm Jackson</h2>
          <p className="text-lg text-gray-500 mt-2">
            100% html5 bootstrap templates Made by colorlib.com
          </p>
          <Button className="mt-6">Download CV</Button>
        </div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-cover bg-center"
          style={{ backgroundImage: 'url("https://via.placeholder.com/500")' }}
        ></div>
      </main>
    </div>
  );
}
