import React from 'react';

const Header = () => {
  return (
    <div className="hidden lg:grid fixed top-0 right-0 left-0 bg-brown-500 py-4 px-8  grid-flow-col lg:grid-cols-2 z-20">
      <ul className="flex w-full text-sm lg:text-base">
        <li className="py-2 px-4 border border-white rounded-l-full rounded-r-full mx-3 ">
          {' '}
          Beranda
        </li>
        <li className="py-2 px-4 border border-white rounded-l-full rounded-r-full mx-3 ">
          {' '}
          Akad & Resepsi
        </li>
        <li className="py-2 px-4 border border-white rounded-l-full rounded-r-full mx-3 ">
          {' '}
          Galeri
        </li>
        <li className="py-2 px-4 border border-white rounded-l-full rounded-r-full mx-3 ">
          {' '}
          Ucapan
        </li>
      </ul>
    </div>
  );
};

export default Header;
