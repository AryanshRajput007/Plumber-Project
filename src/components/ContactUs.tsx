import React, { useState } from 'react';
import { Phone, MapPin, Clock } from 'lucide-react';

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.open(`https://wa.me/919939318056?text=${encodeURIComponent(
      `नाम: ${formData.name}\nफ़ोन: ${formData.phone}\nसंदेश: ${formData.message}`
    )}`);
  };

  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">हमसे संपर्क करें</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6">संपर्क करें</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-yellow-400 mt-1" />
                <div>
                  <h4 className="font-semibold">फ़ोन</h4>
                  <p>+91 9939318056</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-yellow-400 mt-1" />
                <div>
                  <h4 className="font-semibold">पता</h4>
                  <p>123 प्लंबिंग स्ट्रीट, शहर का नाम, राज्य, भारत</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Clock className="w-6 h-6 text-yellow-400 mt-1" />
                <div>
                  <h4 className="font-semibold">कार्य समय</h4>
                  <p>सोमवार - रविवार: सुबह 9 बजे - शाम 5 बजे</p>
                  <p>आपातकालीन सेवाएँ उपलब्ध: 24/7</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">नाम</label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-yellow-400"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">फ़ोन नंबर</label>
                <input
                  type="tel"
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-yellow-400"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">संदेश</label>
                <textarea
                  required
                  rows={4}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-yellow-400"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-yellow-400 text-black py-3 rounded-lg font-semibold hover:bg-yellow-500 transition"
              >
                संदेश भेजें
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
