import React from 'react';
import { Wrench, Droplet, Flame, Search, Home } from 'lucide-react';
import { FaBeer } from 'react-icons/fa';

const services = [
  {
    icon: <Wrench className="w-12 h-12" />,
    title: 'आपातकालीन प्लंबिंग',
    description: 'किसी भी जरूरी समस्या के लिए 24/7 आपातकालीन प्लंबिंग सेवाएँ।'
  },
  {
    icon: <Droplet className="w-12 h-12" />,
    title: 'ड्रेन सफाई',
    description: 'पेशेवर ड्रेन सफाई और रखरखाव सेवाएँ।'
  },
  {
    icon: <Flame className="w-12 h-12" />,
    title: 'वॉटर हीटर सेवाएँ',
    description: 'वॉटर हीटर की स्थापना, मरम्मत और रखरखाव।'
  },
  {
    icon: <Search className="w-12 h-12" />,
    title: 'लीक डिटेक्शन',
    description: 'उन्नत लीक डिटेक्शन और मरम्मत सेवाएँ।'
  },
  {
    icon: <Home className="w-12 h-12" />,
    title: 'बाथरूम रीमॉडेलिंग',
    description: 'बाथरूम के नवीनीकरण और रीमॉडेलिंग की पूरी सेवाएँ।'
  },
  {
    icon: <FaBeer className="w-12 h-12" />,
    title: 'पाइप मरम्मत',
    description: 'विशेषज्ञ पाइप मरम्मत और प्रतिस्थापन सेवाएँ।'
  }
];

export default function ServicesSection() {
  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">हमारी सेवाएँ</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
              <div className="text-yellow-400 mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
