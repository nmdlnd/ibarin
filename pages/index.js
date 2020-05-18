import Layout from "../component/Layout";
import Head from 'next/head'
export default () => (

  <>
  <Head>
  <title>Kerja Mantul</title>
  </Head>
  <Layout>
    <div className="p-4 shadow rounded bg-white">
    <h1 className="text-purple-500 leading-normal">Next.js</h1>
    <p className="text-gray-500">with Tailwind CSS</p>
  </div>
  </Layout>
  </>
)