"use client"

import React, { useState, useEffect } from 'react';
import { Instagram, Mail, Phone, MapPin } from 'lucide-react';

// Banner Images (replace with actual makeup-related images)
const bannerImages = [
  '/api/placeholder/1200/600',
  '/api/placeholder/1200/600',
  '/api/placeholder/1200/600'
];

const MakeupArtistPortfolio = () => {
  const [currentBanner, setCurrentBanner] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % bannerImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white text-gray-800">
      {/* Floating Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#e4007c] text-white px-4 py-3 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold">Makeup Artistry</div>
          <div className="space-x-4">
            <a href="#home" className="hover:text-gray-200">Home</a>
            <a href="#about" className="hover:text-gray-200">About</a>
            <a href="#portfolio" className="hover:text-gray-200">Portfolio</a>
            <a href="#contact" className="hover:text-gray-200">Contact</a>
          </div>
        </div>
      </nav>

      {/* Banner Section */}
      <section id="home" className="relative h-screen pt-16">
        <div className="relative h-full overflow-hidden">
          {bannerImages.map((image, index) => (
            <div 
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentBanner ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img 
                src={image} 
                alt={`Banner ${index + 1}`} 
                className="w-full h-full object-cover"
              />
            </div>
          ))}
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-5xl font-bold mb-4">Professional Makeup Artistry</h1>
              <p className="text-xl">Transform Your Look, Elevate Your Confidence</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="container mx-auto py-16 px-4 flex items-center gap-8">
        <div className="w-1/2">
          <img 
            src="/api/placeholder/600/400" 
            alt="Makeup Artist" 
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="w-1/2">
          <h2 className="text-3xl font-bold mb-4 text-[#e4007c]">About Me</h2>
          <p className="mb-4">
            Hi! I'm a professional makeup artist with over 10 years of experience 
            in bridal, editorial, and special occasion makeup. My passion is helping 
            you look and feel your absolute best.
          </p>
          <p>
            I specialize in creating personalized looks that highlight your 
            unique beauty and style.
          </p>
        </div>
      </section>

      {/* Portfolio/Services Section */}
      <section id="portfolio" className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-[#e4007c]">My Services</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { 
                title: 'Bridal Makeup', 
                description: 'Magical looks for your special day',
                image: '/api/placeholder/400/300'
              },
              { 
                title: 'Editorial Makeup', 
                description: 'Professional photoshoot looks',
                image: '/api/placeholder/400/300'
              },
              { 
                title: 'Special Occasion', 
                description: 'Perfect makeup for any event',
                image: '/api/placeholder/400/300'
              }
            ].map((service, index) => (
              <div 
                key={index} 
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
              >
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-[#e4007c]">{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-[#e4007c] text-white py-12">
        <div className="container mx-auto px-4 grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Contact Me</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5" />
                <span>info@makeupartistry.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                <span>Los Angeles, CA</span>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <a href="#home" className="block hover:text-gray-200">Home</a>
              <a href="#about" className="block hover:text-gray-200">About</a>
              <a href="#portfolio" className="block hover:text-gray-200">Services</a>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4">Follow Me</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-gray-200">
                <Instagram className="w-6 h-6" />
              </a>
              {/* Add more social media icons as needed */}
            </div>
          </div>
        </div>
        <div className="text-center mt-8 border-t border-white/20 pt-4">
          © 2024 Makeup Artistry. All Rights Reserved.
        </div>
      </footer>
    </div>
  );
};

export default MakeupArtistPortfolio;