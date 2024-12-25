import React from 'react';
import { Clock, Phone } from 'lucide-react';

export default function HeroSection() {
  return (
    <div className="relative min-h-[600px] bg-cover bg-center" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80")' }}>
      <div className="absolute inset-0 bg-black/50" />
      <div className="container mx-auto px-4 relative">
        <div className="flex flex-col md:flex-row items-center justify-between min-h-[600px] py-16">
          <div className="text-white md:w-1/2 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
              <Clock className="text-yellow-400" />
              <span className="text-yellow-400 font-semibold">24/7 आपातकालीन सेवाएँ</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">पेशेवर प्लंबिंग सेवाएँ</h1>
            <p className="text-lg mb-8">आपकी सभी प्लंबिंग जरूरतों के लिए विश्वसनीय साथी। तेज, भरोसेमंद, और पेशेवर सेवा की गारंटी।</p>
            <div className="flex gap-4 justify-center md:justify-start">
              <button className="bg-yellow-400 text-black px-8 py-3 rounded-full font-semibold hover:bg-yellow-500 transition">
                अभी कॉल करें
              </button>
              <button className="border-2 border-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-black transition">
                हमारी सेवाएँ
              </button>
            </div>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0 flex flex-col items-center">
            <img 
              src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
              alt="Plumber"
              className="rounded-full w-64 h-64 object-cover border-4 border-yellow-400"
            />
            <h2 className="text-white text-2xl font-semibold mt-4">Sonu Kumar</h2>
            <p className="text-yellow-400">मास्टर प्लंबर</p>
          </div>
        </div>
      </div>
    </div>
  );
}
