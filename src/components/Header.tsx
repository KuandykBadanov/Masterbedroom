import React, { useEffect, useState } from 'react';
import { Phone } from 'lucide-react';

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
        <nav className="max-w-7xl mx-auto px-4 py-1">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            {/* Логотип */}
            <div className="flex items-center gap-4">
              <img
                src="./images/logo.jpg"
                alt="Masterbedroom Logo"
                className="w-16 h-16 object-contain"
              />
              <span className="text-4xl font-[Merriweather] font-medium text-gray-700">
                Masterbedroom
              </span>
            </div>

            {/* Контактная информация */}
            <div className="flex items-center gap-2 sm:gap-4">
              <a
                href="tel:+77474490627"
                className="text-gray-800 flex items-center gap-2 hover:bg-black/5 rounded-lg px-3 py-1 text-sm sm:text-base"
              >
                <Phone className="w-5 h-5 sm:w-6 sm:h-6" />
                <span>+7 (747) 449-06-27</span>
              </a>
            </div>
          </div>
        </nav>
      </div>

      {/* Основной контент */}
      <div className="relative max-w-7xl mx-auto px-4 py-2">
        <p
          className={`mt-1 text-2xl font-[Merriweather] text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-orange-400 max-w-2xl transition-all duration-1000 ${
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
