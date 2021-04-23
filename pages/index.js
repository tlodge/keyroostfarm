import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="bg-maingray w-full h-full">
      <Head>
        <title>Keyroost farms</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="grid grid-cols-12">
        <div className="col-span-10">
            <div className="flex flex-col h-full items-center justify-center bg-bottom bg-no-repeat" style={{backgroundImage: `url("/trees.svg")`}}>
                <div className="flex-grow justify-center flex-col items-center flex">
                   
                <div className="text-4xl text-white text-center whitespace-nowrap ">
                        <span className="font-bold">Keyroost</span> helps farmers sell direct to customers
                    </div>
                    <div className="text-3xl text-lightblue text-center ">
                        without the expense and effort of running a farm shop
                    </div>
                  
                  
                      <div className="p-6 text-xl text-white w-copy leading-7" >
                        <span className="font-bold">Keyroost</span> is a smart key dispenser that lets you emulate a  <span className="font-bold text-pink">simple autonomous store </span>with just a few (dumb) padlocks.  Keyroost puts your products online and dispenses keys to customers when they have purchased a product.  It manages your inventory and updates you when products have been bought and picked up.
                      </div>
                </div>
                
                <div className="flex-grow-1 w-full">
                    <div className="h-16 bg-pink flex justify-center items-center">
                         <Link href="/unmanned"><a className="text-white text-bold p-4">unmanned click and collect</a></Link>
                         <Link href="/seasonal"><a className="text-white text-bold p-4">seasonal unmanned stores</a></Link>
                    </div>
                </div>
            </div>
        </div>
       
        <div className="col-span-2">
            <img src="/sideimage.svg"></img>
        </div>
        
      </div>
      <div className="text-white text-xl p-10 leading-8 font-light">
      <span className="font-bold">Keyroost</span> runs off batteries.  That means it can be placed pretty much anywhere.  In the middle of a field, at the end of a driveway or at the entrance to an outbuilding.  It works with anything that can be locked with a padlock.  You can sell fresh produce using lockable containers in a fridge or large bulky items (firewood, plants) in lockable containers and cupboards.  Keyroost is so versatile that you could run an unmanned click and collect store in the middle of a field on a busy weekend, test the market for new produce or run a permanent super-slick store.   We know we haven't thought of all of the possibilities.  We cannot wait to see  how you use it!  
      </div>
    </div>
  )
}