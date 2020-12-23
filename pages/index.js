import Head from 'next/head';
import Image from 'next/image';
import Layout from '@/components/Layout/Layout';
import Ring from '../public/assets/icons/ring.svg';
import Resepsi from '../public/assets/icons/resepsi.svg';
import Location from '../public/assets/icons/location.svg';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Wedding Invitation</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <section
          id="beranda"
          className="bg-cover bg-center  w-full h-screen flex items-start py-14"
          style={{ backgroundImage: 'url(/assets/prewedding-home.png)' }}
        >
          <div className="flex flex-col  w-full relative">
            <div className="absolute h-full w-full bg-dark-450 bg-blur-2px"></div>
            <div className="flex flex-col w-full text-white text-center h-auto  px-8 py-3.5 z-10">
              <p className="font-habibi ">Pernikahan dari</p>
              <h4 className="font-great-vibes text-5xl mb-4 mt-6">
                Bambang & Partini
              </h4>
              <p className="font-habibi ">01 Januari 2021</p>
            </div>
          </div>
        </section>
        <section
          id="resepsi"
          className="bg-dark-500 py-14 grid grid-flow-row gap-4 row-span-4 h-screen"
        >
          <div className="flex flex-col  w-full relative">
            <div className="absolute h-full w-full bg-dark-450 bg-blur-2px"></div>
            <div className="flex flex-col w-full text-white text-center h-auto  px-8 py-3.5 z-10">
              <p className="font-habibi ">Pernikahan dari</p>
              <h4 className="font-great-vibes text-5xl mb-4 mt-6">
                Bambang & Partini
              </h4>
              <p className="font-habibi ">01 Januari 2021</p>
            </div>
          </div>
          <div className="flex w-full px-8 text-white font-habibi text-sm">
            <div className="flex flex-col w-1/2 text-center px-2 break-words">
              <p>Putra dari</p>
              <p>Bapak Badril Munir</p>
              <p>Ibu Sartinah</p>
            </div>
            <div className="flex flex-col w-1/2 text-center px-2 break-words ">
              <p>Putra dari</p>
              <p>Bapak Badril Munir</p>
              <p>Ibu Sartinah</p>
            </div>
          </div>
          <div className="flex flex-col mx-auto h-40 items-center justify-center w-full px-8">
            <div className="flex w-full my-2 h-16">
              <Ring className="h-12 w-12 mr-6 my-auto" />
              <div className="flex flex-col text-white font-habibi justify-between h-full">
                <p className="text-md">Akad pernikahan </p>
                <p className="text-xs">Pukul 08.00 s.d 10.00 WIB</p>
              </div>
            </div>
            <div className="flex w-full my-2 h-16">
              <Resepsi className="h-12 w-12 mr-6 my-auto" />
              <div className="flex flex-col text-white font-habibi justify-between h-full">
                <p className="text-md">Resepsi </p>
                <p className="text-xs">Pukul 10.00 s.d Selesai</p>
              </div>
            </div>
          </div>
          <div className="flex mx-auto h-32 items-start justify-start w-full px-8">
            <button className="mt-6 px-6 py-2 flex justify-center items-center border-white border rounded-l-full rounded-r-full mx-auto text-white font-habibi text-sm">
              <Location className="h-8 w-8 mr-4" />
              Cek Lokasi
            </button>
          </div>
        </section>
        <section
          id="gallery"
          className="bg-dark-500 pt-8 pb-20 grid grid-flow-row gap-4 grid-rows-6 grid-cols-2 h-screen px-4"
        >
          <h1 className="col-span-2  text-5xl font-great-vibes my-auto mx-auto text-white">
            Gallery
          </h1>
          <div className="flex row-span-3 ">
            <Image
              src="/assets/gallery-mobile/photo-1.png"
              alt="Picture of the author"
              width={500}
              height={500}
              objectFit="cover"
              quality={100}
              loading="lazy"
            />
          </div>
          <div className="flex row-span-1 bg-white">
            <Image
              src="/assets/gallery-mobile/photo-2.png"
              alt="Picture of the author"
              width={500}
              height={500}
              objectFit="cover"
              quality={100}
              loading="lazy"
            />
          </div>
          <div className="flex row-span-3 ">
            <Image
              src="/assets/gallery-mobile/photo-3.png"
              alt="Picture of the author"
              width={500}
              height={500}
              objectFit="cover"
              quality={100}
              loading="lazy"
            />
          </div>
          <div className="flex row-span-1 ">
            <Image
              src="/assets/gallery-mobile/photo-4.png"
              alt="Picture of the author"
              width={500}
              height={500}
              objectFit="cover"
              quality={100}
              loading="lazy"
            />
          </div>
          <div className="flex row-span-1 col-span-2">
            <Image
              src="/assets/gallery-mobile/photo-5.png"
              alt="Picture of the author"
              width={500}
              height={500}
              objectFit="cover"
              quality={100}
              loading="lazy"
            />
          </div>
        </section>
      </Layout>
    </div>
  );
}
