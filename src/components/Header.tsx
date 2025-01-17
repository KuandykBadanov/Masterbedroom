import React from 'react';
import { Bed, Phone } from 'lucide-react';

export function Header() {
  return (
    <header className="relative">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e"
          alt="Modern white sofa"
          className="w-full h-[300px] object-cover"
        />
      </div>

      {/* Navigation Bar */}
      <div className="relative">
        <nav className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Center/Logo */}
            <div className="flex items-center gap-2">
              <Bed className="w-8 h-8 text-gray-800" />
              <span className="text-2xl font-bold text-gray-800">Masterbedroom</span>
            </div>

            {/* Right Section */}
            <div className="flex items-center gap-4">
              <a href="tel:+77474490627" className="text-gray-800 flex items-center gap-2 hover:bg-black/5 rounded-lg px-3 py-2">
                <Phone className="w-5 h-5" />
                <span>+7 (747) 449-06-27</span>
              </a>
            </div>
          </div>
        </nav>
      </div>

      {/* Header Content */}
      <div className="relative max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-gray-800">Мебельный магазин</h1>
        <p className="mt-4 text-xl text-white max-w-2xl">
          Создайте уютное пространство с нашей коллекцией современной и классической мебели
        </p>
      </div>
    </header>
  );
}