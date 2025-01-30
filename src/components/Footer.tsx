import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Контакты</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
                <p>РК, г. Астана, ул. Бокейхана 25v</p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-6 h-6 text-blue-400" />
                <a href="tel:+77474490627">+7 (747) 449-06-27</a>
              </div>
              <div className="flex items-center gap-3">
  <Mail className="w-6 h-6 text-blue-400" />
  <a 
  href="https://mail.google.com/mail/?view=cm&fs=1&to=Toogarkon@gmail.com" 
  target="_blank" 
  rel="noopener noreferrer"
>
  Toogarkon@gmail.com
</a>
</div>
              <div className="flex items-start gap-3">
                <Clock className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
                <div>
                  <p>Пн-Пт: 10:00 - 19:00</p>
                  <p>Сб-Вс: 10:00 - 18:00</p>
                </div>
              </div>
            </div>
          </div>

          {/* Static Map */}
          <div className="h-[300px] rounded-lg overflow-hidden bg-gray-800 relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <p className="text-lg font-medium">Мы находимся здесь</p>
                <p className="text-gray-400 mt-2">ул. Бокейхана 25v, Астана</p>
                <a 
                  href="https://yandex.kz/maps/-/CDaXnSAw" 
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="inline-block mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                >
                  Открыть карту
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Masterbedroom. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
}