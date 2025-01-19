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
              className="bg-blue-500 text-white w-8 h-8 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
            >
              <Phone className="w-4 h-4" />
            </a>
            <a
              href="https://instagram.com/masterbedroom_kz"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-pink-500 text-white w-8 h-8 rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href={createWhatsAppMessage()}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white w-8 h-8 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}