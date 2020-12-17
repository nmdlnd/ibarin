import Head from "next/head";
import Layout from "../components/Layout/Layout";

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
          className="bg-cover bg-center  w-full min-h-screen flex items-start py-14"
          style={{ backgroundImage: "url(/assets/prewedding-home.png)" }}
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
          className="bg-dark-500 py-14 grid grid-flow-row gap-4 row-span-4 min-h-screen"
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
            <div className="flex flex-col w-1/2 text-center px-4 break-words">
              <p>Putra dari</p>
              <p>Bapak Badril Munir</p>
              <p>Ibu Sartinah</p>
            </div>
            <div className="flex flex-col w-1/2 text-center px-4 break-words ">
              <p>Putra dari</p>
              <p>Bapak Badril Munir</p>
              <p>Ibu Sartinah</p>
            </div>
          </div>
          <div className="flex flex-col">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            expedita quos tempora dolores hic? Cumque quos aspernatur esse,
            obcaecati voluptas ullam nam at neque labore eveniet adipisci est
            amet ex.
          </div>
          <div className="flex flex-col">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            expedita quos tempora dolores hic? Cumque quos aspernatur esse,
            obcaecati voluptas ullam nam at neque labore eveniet adipisci est
            amet ex.
          </div>
        </section>
      </Layout>
    </div>
  );
}
