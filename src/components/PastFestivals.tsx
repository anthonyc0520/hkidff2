import React from 'react';

const posters = [
  'images/fest01.png', // 替換為實際海報圖片的 URL
  'images/fest02.png',
  'images/fest03.png',
  'images/fest04.png',
  'images/fest05.png',
  'images/fest06.png',
  'images/fest07.png',
  'images/fest08.png',
  'images/fest09.png',
  'images/fest10.png',
  'images/fest11.png',
  'images/fest12.png',
];

const pdfFiles = [
  'leaflet/leaflet01.pdf', // 對應的 PDF 檔案
  'leaflet/leaflet02.pdf',
  'leaflet/leaflet03.pdf',
  'leaflet/leaflet05.pdf',
  'leaflet/leaflet05.pdf',
  'leaflet/leaflet06.pdf',
  'leaflet/leaflet07.pdf',
  'leaflet/leaflet08.pdf',
  'leaflet/leaflet09.pdf',
  'leaflet/leaflet10.pdf',
  'leaflet/leaflet11.pdf',
  'leaflet/leaflet12.pdf',
];

const PastFestivals: React.FC = () => {
  return (
    <div className="p-10 bg-gray-100">
      <h1 className="text-3xl font-bold text-center mb-8">歷屆電影節</h1> {/* 更新標題 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {posters.map((poster, index) => (
          <div 
            key={index} 
            className="overflow-hidden rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 cursor-pointer"
            onClick={() => window.open(pdfFiles[index], '_blank')} // 點擊圖片時打開 PDF
          >
            <img src={poster} alt={`Poster ${index + 1}`} className="w-full h-auto" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PastFestivals;