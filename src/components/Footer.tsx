import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 text-center">
      <div className="mt-6">
        <div className="font-bold">策劃</div>
        <p>第十三屆香港國際聾人電影節籌委會</p>
      </div>
      <div className='justify-items-start'>
        <div className="mt-4">
          <div className="font-bold">主辦</div>
          <img src="/images/accesswuslogo.png" alt="留映社" className="mx-auto my-2" style={{ width: '200px' }} />
        </div>

        <div className="mt-4">
          <div className="font-bold">資助</div>
          <img src="/images/ADC.png" alt="香港藝術發展局" className="mx-auto my-2" style={{ width: '200px' }} />
        </div>
      </div>
      <p className="text-center text-sm text-slate-500">Copyright © 2024 香港國際聾人電影節. 版權所有.</p>
      <p className="text-center text-xs text-slate-500 mt-1">Made by 
        <a href="http://awuspro.com"
          rel="noopener"
          className="hover:underline">留映製作
        </a>
      </p>
    </footer>
  );
};

export default Footer;