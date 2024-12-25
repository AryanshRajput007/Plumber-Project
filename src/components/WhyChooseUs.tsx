import React from 'react';
import { Shield, ThumbsUp, DollarSign } from 'lucide-react';

const reasons = [
  {
    icon: <Shield className="w-16 h-16" />,
    title: 'लाइसेंस प्राप्त और बीमित',
    description: 'आपकी शांति के लिए पूरी तरह से लाइसेंस प्राप्त और बीमित।'
  },
  {
    icon: <ThumbsUp className="w-16 h-16" />,
    title: '100% संतुष्टि',
    description: 'हम अपनी सेवाओं से पूर्ण संतुष्टि की गारंटी देते हैं।'
  },
  {
    icon: <DollarSign className="w-16 h-16" />,
    title: 'नि:शुल्क अनुमान',
    description: 'काम शुरू होने से पहले विस्तृत अनुमान प्राप्त करें।'
  }
];

export default function WhyChooseUs() {
  return (
    <div className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">हमें क्यों चुनें</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="text-center">
              <div className="text-yellow-400 mb-4 flex justify-center">{reason.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{reason.title}</h3>
              <p className="text-gray-400">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
