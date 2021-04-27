import Head from 'next/head'

export default function Home() {
  return (
    <div className="bg-white w-full h-full">
      <Head>
        <title>Keyroost 8</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

     <div className="grid grid-cols-12">
        
        <div className="col-span-12 md:col-span-9 bg-mustard">  
            <div className="flex flex-row">
                <div className="w-48">
                    <img className="bg-charcoal" src="/ruler.svg"></img>
                </div>
                <div className="flex justify-center items-center bg-charcoal p-4">
                        <img src="/keyroost8.png"></img>
                </div>
            </div>
            <div className="flex flex-col bg-lightblue">
                <div className="block justify-center items-center bg-mustard p-10 lg:text-xl">
                    Even though it is stuffed with tech; kitted out with Bluetooth LE and 2G connectvity, the <strong>keyroost 8</strong> runs off batteries, meaning that it can be installed with little of no reliance on fixed infrastructure.  The chassis is shake proof and constructed from strong lightweight materials to resist vandalism.
                </div>
                <div className="block justify-center items-center bg-white pt-6 pb-6 pl-16 pr-16 lg:text-xl lg:p-16">
                The <strong>keyroost 8</strong> works with both iPhone and Android phones. It can  be configured to work as a simple key manager, a smart locker controller or autonomous store. It integrates with popular e-commerce platforms such as Shopify.
                </div>
            </div>
        </div>
       
        <div className="hidden md:flex col-span-3 bg-lightroost p-4">
            <div className="w-big">
                <img className="bg-right" src="cabinetblack.png"></img>
            </div>
        </div>

  </div> 
  </div>
  )
}


