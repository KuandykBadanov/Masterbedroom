import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Phone, Instagram, MessageCircle } from 'lucide-react';
import { Product } from '../types';
  // импортируем новую иконку


interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % product.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + product.images.length) % product.images.length);
  };

  const createWhatsAppMessage = () => {
    const message = `Здравствуйте! Интересует товар: ${product.name}\nЦена: ${product.price.toLocaleString('kk-KZ')} ₸\n${product.description}\nФото товара: ${product.images[0]}`;
    return `https://wa.me/+77474490627?text=${encodeURIComponent(message)}`;
  };  

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="relative h-64">
        <img
          src={product.images[currentImageIndex]}
          alt={product.name}
          className="w-full h-full object-cover"
        />
        <button
          onClick={prevImage}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 p-1 rounded-full"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextImage}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 p-1 rounded-full"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
        <div className="absolute bottom-2 right-2 flex gap-1">
          {product.images.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full ${
                index === currentImageIndex ? 'bg-white' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold">{product.name}</h3>
        <p className="text-gray-600 mt-1">{product.description}</p>
        <div className="mt-4 flex justify-between items-center">
        <span className="text-xl font-bold">
  <span className="text-sm text-black-700">от</span> {product.price.toLocaleString('kk-KZ')} ₸
</span>
        <div className="flex gap-2">
        <a
    href="tel:+77474490627"
    className="w-8 h-8 rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"
    title="Позвонить"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="#25D366" /* Зеленый цвет телефона */
      className="w-6 h-6"
    >
      <path d="M6.62 10.79a15.051 15.051 0 006.59 6.59l2.2-2.2a1.005 1.005 0 011.11-.27c1.21.49 2.53.76 3.88.76a1 1 0 011 1v3.5a1 1 0 01-1 1C10.21 22 2 13.79 2 3a1 1 0 011-1h3.5a1 1 0 011 1c0 1.35.26 2.67.76 3.88.14.34.06.74-.27 1.11l-2.2 2.2z" />
    </svg>
  </a>

  <a
  href="https://instagram.com/masterbedroom_kz"
  target="_blank"
  rel="noopener noreferrer"
  className="w-8 h-8 rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    x="0px"
    y="0px"
    width="48"
    height="48"
    viewBox="0 0 48 48"
    className="w-6 h-6"
  >
    <radialGradient
      id="yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1"
      cx="19.38"
      cy="42.035"
      r="44.899"
      gradientUnits="userSpaceOnUse"
    >
      <stop offset="0" stopColor="#fd5" />
      <stop offset=".328" stopColor="#ff543f" />
      <stop offset=".348" stopColor="#fc5245" />
      <stop offset=".504" stopColor="#e64771" />
      <stop offset=".643" stopColor="#d53e91" />
      <stop offset=".761" stopColor="#cc39a4" />
      <stop offset=".841" stopColor="#c837ab" />
    </radialGradient>
    <path
      fill="url(#yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1)"
      d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20C42.014,38.383,38.417,41.986,34.017,41.99z"
    />
    <radialGradient
      id="yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2"
      cx="11.786"
      cy="5.54"
      r="29.813"
      gradientTransform="matrix(1 0 0 .6663 0 1.849)"
      gradientUnits="userSpaceOnUse"
    >
      <stop offset="0" stopColor="#4168c9" />
      <stop offset=".999" stopColor="#4168c9" stopOpacity="0" />
    </radialGradient>
    <path
      fill="url(#yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2)"
      d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20C42.014,38.383,38.417,41.986,34.017,41.99z"
    />
    <path
      fill="#fff"
      d="M24,31c-3.859,0-7-3.14-7-7s3.141-7,7-7s7,3.14,7,7S27.859,31,24,31z M24,19c-2.757,0-5,2.243-5,5	s2.243,5,5,5s5-2.243,5-5S26.757,19,24,19z"
    />
    <circle cx="31.5" cy="16.5" r="1.5" fill="#fff" />
    <path
      fill="#fff"
      d="M30,37H18c-3.859,0-7-3.14-7-7V18c0-3.86,3.141-7,7-7h12c3.859,0,7,3.14,7,7v12	C37,33.86,33.859,37,30,37z M18,13c-2.757,0-5,2.243-5,5v12c0,2.757,2.243,5,5,5h12c2.757,0,5-2.243,5-5V18c0-2.757-2.243-5-5-5H18z"
    />
  </svg>
</a>

  <a
  href={createWhatsAppMessage()}
  target="_blank"
  rel="noopener noreferrer"
  className="w-8 h-8 rounded-full flex items-center justify-center hover:opacity-75 transition-opacity"
>
  <img
    src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
    alt="WhatsApp"
    className="w-6 h-6"
  />
</a>
</div>
        </div>
      </div>
    </div>
  );
}