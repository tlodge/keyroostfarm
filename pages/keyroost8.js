import Head from 'next/head'

export default function Home() {
  return (
    <div className="bg-white w-full h-full">
      <Head>
        <title>Keyroost 8</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="grid grid-cols-12">
        <div className="col-span-12 md:col-span-8 bg-mustard">
          <div className="flex justify-center items-center bg-charcoal p-10">
            <img src="/keyroost8.png"></img>
          </div>
          <div className="bg-black text-sm text-white pt-6 pb-6 antialiased	font-bold text-center md:text-base lg:text-xl shadow-lg"> The <strong>keyroost 8</strong> provides capacity for eight keys.</div>
          <div className="bg-mustard">
              <div className="grid grid-cols-10">
                  <div className="hidden md:flex md:col-span-4 lg:col-span-3 justify-center">
                    <img src="/mobile.png"></img>
                  </div>
                  <div className="col-span-10  md:col-span-5  lg:col-span-6 flex flex-col items-center justify-center bg-mustard p-4 leading-6 text-charcoal   ">  
                    <div className="text-sm md:text-lg leading-6 lg:text-2xl lg:leading-10">
                        Even though it is stuffed with tech; kitted out with Bluetooth LE and 2G connectvity, the <strong>keyroost 8</strong> runs off batteries, meaning that it can be installed with little of no reliance on fixed infrastructure.  The chassis is shake proof and constructed from strong lightweight materials to resist vandalism.
                    </div>
                    <div className="mt-4 text-sm md:text-lg leading-6 lg:text-2xl lg:leading-10">
                        The <strong>keyroost 8</strong> works with both iPhone and Android phones. It can  be configured to work as a simple key manager, a smart locker controller or autonomous store. It integrates with popular e-commerce platforms such as Shopify.
                    </div>
                  </div>
              </div>
          </div>
        </div>
        <div className="hidden md:flex lg:hidden col-span-4 bg-pink p-4">
           <img src="cabinetwhite.svg"></img>
        </div>
        <div className="hidden lg:flex col-span-4 bg-pink p-4">
                <div className="w-big p-6">
                  <img className="object-contain" src="cabinetwhite.svg"></img>
                </div>
        </div>
      </div>
    </div>
  )
}