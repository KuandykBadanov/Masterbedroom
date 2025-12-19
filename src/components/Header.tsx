import React from 'react';
import { FaWhatsapp } from 'react-icons/fa'; // Импортируем иконку WhatsApp

export function Header() {
  return (
    <header className="bg-white shadow-lg z-10">
      {/* Навигация */}
      <div className="relative">
        <nav className="max-w-7xl mx-auto px-4 py-1 flex flex-col items-center">
          {/* Логотип */}
          <div className="flex items-center gap-4">
            <img
              src="./images/logo.jpg"
              alt="Masterbedroom Logo"
              className="w-16 h-16 object-contain"
            />
            <span className="text-2xl sm:text-3xl font-merriweather font-bold text-gray-700 text-center">
              Masterbedroom
            </span>
          </div>

          {/* Контактная информация */}
          <div className="flex items-center gap-2 mt-4">
            <a
              href="https://wa.me/77771604603"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 flex items-center gap-2 hover:bg-black/5 rounded-lg px-3 py-1 text-sm sm:text-base"
            >
              {/* Иконка WhatsApp из react-icons */}
              <FaWhatsapp className="text-green-500 text-2xl" />
              <span>+7 (747) 449-06-27</span>
            </a>
          </div>
        </nav>
      </div>

      {/* Основной контент */}
      <div className="relative max-w-7xl mx-auto px-4 py-6 text-center">
      <p className="mt-4 text-2xl font-roboto-slab font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-orange-400 max-w-2xl mx-auto">
  Дизайнерские диваны и кровати, которые идеально подойдут вашему дому
</p>

      </div>

      {/* Горизонтальная линия */}
      <hr className="border-t-4 border-gradient-to-r from-purple-600 to-orange-400 mx-4 my-4" />
    </header>
  );
}
