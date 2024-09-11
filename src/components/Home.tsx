import React from 'react';

const Home: React.FC = () => {
  return (
    <section
      id="home"
      className="relative bg-cover bg-center"
      style={{ backgroundImage: 'url(/images/filmcover.png)', opacity: 0.8 }}
    >
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div className="relative z-10 text-white h-[600px] flex flex-col justify-center items-center px-8">
        <h2 className="text-4xl font-bold mb-4">歡迎來到香港國際聾人電影節</h2>
        <p className="text-xl">我們致力於展示優秀的聾人電影作品，推動文化交流。</p>
      </div>
    </section>
  );
};

export default Home;