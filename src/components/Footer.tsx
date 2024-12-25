import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">हमारे बारे में</h3>
            <p className="text-gray-400">
              10 से अधिक वर्षों के अनुभव के साथ पेशेवर प्लंबिंग सेवाएं। आपकी सभी प्लंबिंग आवश्यकताओं के लिए 24/7 उपलब्ध।
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">त्वरित लिंक</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-yellow-400">होम</a></li>
              <li><a href="#" className="hover:text-yellow-400">सेवाएं</a></li>
              <li><a href="#" className="hover:text-yellow-400">संपर्क करें</a></li>
              <li><a href="#" className="hover:text-yellow-400">आपातकाल</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">हमसे जुड़ें</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-yellow-400">
                <Facebook />
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-400">
                <Instagram />
              </a>
              
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} पेशेवर प्लंबिंग सेवाएं। सभी अधिकार सुरक्षित।</p>
        </div>
      </div>
    </footer>
  );
}
