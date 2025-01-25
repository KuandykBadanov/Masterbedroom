import React, { useEffect, useState } from 'react';
import { Bed, Phone } from 'lucide-react';

export function Header() {
  const [isVisible, setIsVisible] = useState(true);  // Блок видим при загрузке
  const [hasScrolled, setHasScrolled] = useState(false); // Состояние прокрутки

  // Функция для обработки события прокрутки
  const handleScroll = () => {
    const scrollY = window.scrollY;
    if (scrollY > 200) {  // Если прокрутка больше 200px
      setHasScrolled(true);  // Блок скрылся
    } else {
      setHasScrolled(false);  // Блок возвращается
    }
  };

  // Функция для обработки наведения мыши
  const handleMouseEnter = () => {
    setIsVisible(true);  // Показываем блок при наведении
  };

  const handleMouseLeave = () => {
    if (hasScrolled) {
      setIsVisible(false);  // Блок скроется, если был прокручен
    }
  };

  // Добавляем обработчик событий при монтировании компонента
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    // Убираем обработчик при размонтировании компонента
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`bg-white shadow-lg z-10 transition-all duration-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[-100%]'}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Navigation Bar */}
      <div className="relative">
        <nav className="max-w-7xl mx-auto px-4 py-1">
          <div className="flex items-center justify-between">
            {/* Center/Logo */}
            <div className="flex items-center gap-4">
  {/* Логотип */}
  <img
    src="./images/logo.jpg"
    alt="Masterbedroom Logo"
    className="w-16 h-16 object-contain" // Увеличен размер логотипа
  />
  {/* Текст */}
  <span className="text-4xl font-[Merriweather] font-medium text-gray-700">
    Masterbedroom
  </span>
</div>

            {/* Right Section */}
            <div className="flex items-center gap-4">
              <a href="tel:+77474490627" className="text-gray-800 flex items-center gap-2 hover:bg-black/5 rounded-lg px-3 py-1">
                <Phone className="w-5 h-5" />
                <span>+7 (747) 449-06-27</span>
              </a>
            </div>
          </div>
        </nav>
      </div>

      {/* Header Content */}
      <div className="relative max-w-7xl mx-auto px-4 py-2">
        <p
          className={`mt-1 text-2xl font-[Gloock] text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-orange-400 max-w-2xl transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          Дизайнерские диваны и кровати, которые идеально подойдут вашему дому
        </p>
      </div>

      {/* Horizontal Line */}
      <hr className="border-t-4 border-gradient-to-r from-purple-600 to-orange-400 mx-4 my-4" />
    </header>
  );
}
