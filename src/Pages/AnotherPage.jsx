import React from 'react'
import { useState, useEffect } from "react";


const AnotherPage = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Panggil fungsi handleResize saat komponen dipasang dan setiap kali layar diubah ukurannya
    handleResize();
    window.addEventListener('resize', handleResize);

    // Bersihkan event listener saat komponen dibongkar
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setIsMobile(!isMobile);
  };

  return (
    <div className="bg-blue-500 p-4">
      <div className="container mx-auto">
        <nav className="flex items-center justify-between">
          {/* Logo atau brand */}
          <div className="text-white font-bold text-lg">Logo</div>

          {/* Menu navigasi */}
          {isMobile ? (
            // Tampilan menu hamburger
            <div className="flex items-center">
              <button
                className="text-white p-2 focus:outline-none"
                onClick={toggleMenu}
              >
                ☰
              </button>
              {isMobile && (
                <div className={`absolute top-full left-0 mt-2 bg-white p-4 rounded shadow ${isMobile ? 'block' : 'hidden'}`}>
                  <a href="#" className="block text-gray-800 py-2">Beranda</a>
                  <a href="#" className="block text-gray-800 py-2">Tentang Kami</a>
                  <a href="#" className="block text-gray-800 py-2">Layanan</a>
                  <a href="#" className="block text-gray-800 py-2">Kontak</a>
                </div>
              )}
            </div>
          ) : (
            // Tampilan menu desktop
            <div className="flex space-x-4">
              <a href="#" className="text-white">Beranda</a>
              <a href="#" className="text-white">Tentang Kami</a>
              <a href="#" className="text-white">Layanan</a>
              <a href="#" className="text-white">Kontak</a>
            </div>
          )}
        </nav>
      </div>
    </div>
  );
}


export default AnotherPage