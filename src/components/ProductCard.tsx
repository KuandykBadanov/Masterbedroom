import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Phone, Instagram, MessageCircle } from 'lucide-react';
import { Product } from '../types';

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
        <span className="text-xl font-bold">{product.price.toLocaleString('kk-KZ')} ₸</span>
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
    title="Instagram"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="url(#instagram-gradient)" /* Градиент Instagram */
      className="w-6 h-6"
    >
      <defs>
        <linearGradient id="instagram-gradient" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#f58529" />
          <stop offset="50%" stopColor="#dd2a7b" />
          <stop offset="100%" stopColor="#8134af" />
        </linearGradient>
      </defs>
      <path d="M12 2.16c3.2 0 3.584.012 4.85.07 1.18.054 1.97.243 2.425.41.61.22 1.045.483 1.505.943.46.46.723.895.943 1.505.167.455.356 1.246.41 2.425.058 1.266.07 1.65.07 4.85s-.012 3.584-.07 4.85c-.054 1.18-.243 1.97-.41 2.425a3.653 3.653 0 01-.943 1.505 3.653 3.653 0 01-1.505.943c-.455.167-1.246.356-2.425.41-1.266.058-1.65.07-4.85.07s-3.584-.012-4.85-.07c-1.18-.054-1.97-.243-2.425-.41a3.653 3.653 0 01-1.505-.943 3.653 3.653 0 01-.943-1.505c-.167-.455-.356-1.246-.41-2.425-.058-1.266-.07-1.65-.07-4.85s.012-3.584.07-4.85c.054-1.18.243-1.97.41-2.425a3.653 3.653 0 01.943-1.505A3.653 3.653 0 014.725 2.64c.455-.167 1.246-.356 2.425-.41C8.416 2.172 8.8 2.16 12 2.16zM12 0C8.736 0 8.332.013 7.05.07 5.766.127 4.75.31 3.922.61c-.85.315-1.564.742-2.276 1.454A5.464 5.464 0 00.61 4.922c-.3.828-.483 1.844-.54 3.128C.013 9.336 0 9.74 0 12s.013 2.664.07 3.95c.057 1.284.24 2.3.54 3.128.315.85.742 1.564 1.454 2.276a5.464 5.464 0 001.454 1.454c.828.3 1.844.483 3.128.54C8.332 23.987 8.736 24 12 24s3.668-.013 4.95-.07c1.284-.057 2.3-.24 3.128-.54a5.464 5.464 0 002.276-1.454 5.464 5.464 0 001.454-1.454c.3-.828.483-1.844.54-3.128.057-1.286.07-1.69.07-3.95s-.013-2.664-.07-3.95c-.057-1.284-.24-2.3-.54-3.128a5.464 5.464 0 00-1.454-2.276A5.464 5.464 0 0020.05.61C19.222.31 18.206.127 16.922.07 15.636.013 15.232 0 12 0zM12 5.838a6.162 6.162 0 016.162 6.162A6.162 6.162 0 0112 18.162a6.162 6.162 0 01-6.162-6.162A6.162 6.162 0 0112 5.838zM12 4a8 8 0 100 16 8 8 0 000-16zm6.406-2.1a1.44 1.44 0 110 2.88 1.44 1.44 0 010-2.88z" />
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