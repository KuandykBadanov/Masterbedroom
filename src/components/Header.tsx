import React, { useEffect, useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa'; // Импортируем иконку WhatsApp

export function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const [hasScrolled, setHasScrolled] = useState(false);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    if (scrollY > 200) {
      setHasScrolled(true);
    } else {
      setHasScrolled(false);
    }
  };

  const handleMouseEnter = () => {
    setIsVisible(true);
  };

  const handleMouseLeave = () => {
    if (hasScrolled) {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`bg-white shadow-lg z-10 transition-all duration-300 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[-100%]'
      }`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
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
            <span className="text-4xl font-merriweather font-medium text-gray-700 text-center">
              Masterbedroom
            </span>
          </div>

          {/* Контактная информация */}
          <div className="flex items-center gap-2 mt-4">
            <a
              href="https://wa.me/77474490627"
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
      <p
          className={`mt-4 text-2xl font-robotoSlab font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-orange-400 max-w-2xl mx-auto transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          Дизайнерские диваны и кровати, которые идеально подойдут вашему дому
        </p>
      </div>

      {/* Горизонтальная линия */}
      <hr className="border-t-4 border-gradient-to-r from-purple-600 to-orange-400 mx-4 my-4" />
    </header>
  );
}
