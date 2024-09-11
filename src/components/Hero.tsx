import React from 'react';

const Hero: React.FC = () => {
  return (
    <main className="grid grid-cols-2 flex flex-col md:flex-row text-lg md:text-xl lg:text-2xl items-center p-10 w-full bg-gray-800 min-h-[400px] h-[400px]">
      {/* 右側文本 */}
      <div className="flex flex-col justify-center md:w-1/2 mb-8 md:mb-0">
        <h1 className="capitalize text-4xl font-extrabold text-white">OPEN CALL</h1>
        <p className="text-lg text-gray-300">
        第十三屆香港國際聾人電影節 ＆ 第三屆聾人電影短片比賽即將正式開始！😎
        </p>
        <div className="flex items-center gap-4 my-6 cursor-pointer">
          <div className="bg-blue-600 px-5 py-3 text-white rounded-lg w-2/4 text-center">
           <a href='https://forms.gle/CXVRa9HB37m4jL9L9'>立即報名</a>
          </div>
        </div>
      </div>
      {/* 左側 YouTube 視頻 */}
      <div className="flex flex-col justify-center md:w-1/2 mb-8 md:mb-0">
        <div className="flex flex-col w-full object-cover h-full justify-items-start border rounded-lg overflow-hidden">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/4s_j3eu1L_I" // 替換為您的 YouTube 視頻 ID
            title="YouTube video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </main>
  );
};

export default Hero;