import React from 'react';

const Header = () => {
  return (
    <div className="hidden lg:block fixed top-0 right-0 left-0 bg-transparent  px-8   z-20">
      <div className="max-w-screen-2xl w-full mx-auto grid grid-cols-2">
        <ul className="flex w-full text-sm lg:text-base text-white bg-dark-500 py-4 rounded-l-full rounded-r-full">
          <li className="py-3 px-4 xl:px-8 border border-white rounded-l-full rounded-r-full mx-1 xl:mx-3 text-sm xl:text-base cursor-pointer">
            {' '}
            Beranda
          </li>
          <li className="py-3 px-4 xl:px-8 border border-transparent hover:border-white rounded-l-full rounded-r-full mx-1 xl:mx-3 cursor-pointer">
            {' '}
            Akad & Resepsi
          </li>
          <li className="py-3 px-4 xl:px-8 border border-transparent hover:border-white rounded-l-full rounded-r-full mx-1 xl:mx-3 cursor-pointer">
            {' '}
            Galeri
          </li>
          <li className="py-3 px-4 xl:px-8 border border-transparent hover:border-white rounded-l-full rounded-r-full mx-1 xl:mx-3 cursor-pointer">
            {' '}
            Ucapan
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
