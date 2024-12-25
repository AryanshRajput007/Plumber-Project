import React from 'react';
import { Phone, Clock, Award } from 'lucide-react';

export default function EmergencyBar() {
  return (
    <div className="bg-yellow-400 py-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5" />
            <span className="font-semibold">24/7 आपातकालीन सेवाएँ</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="w-5 h-5" />
            <span className="font-semibold">+91 9939318056</span>
          </div>
          <div className="flex items-center gap-2">
            <Award className="w-5 h-5" />
            <span className="font-semibold">उच्च श्रेणी की सेवाएँ</span>
          </div>
        </div>
      </div>
    </div>
  );
}
