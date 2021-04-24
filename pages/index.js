import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="bg-maingray w-full h-full">
      <Head>
        <title>Keyroost farms</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="grid grid-cols-10 md:grid-cols-12">
        <div className="col-span-10 lg:col-span-7">
            <div className="flex flex-col h-full items-center justify-center bg-bottom bg-no-repeat" style={{backgroundImage: `url("/trees.svg")`}}>
                <div className="p-4 flex-grow justify-center flex-col items-center flex">
                   
                  <div className="text-sm md:text-3xl text-white text-center whitespace-nowrap ">
                      <span className="font-bold">Keyroost</span> helps farmers sell direct to customers
                  </div>
                 
                  <div className="hidden md:block text-sm md:text-2xl text-lightblue whitespace-nowrap">
                      without the expense and effort of running a farm shop
                  </div>

                  {/* mobile variant */} 
                  <div className="block md:hidden text-sm  text-lightblue whitespace-nowrap">
                      without the effort of running a farm shop
                  </div> 

                  <div className="hidden md:block pt-6 p-2 leading-5 text-white text-sm md:leading-7 md:p-6 md:text-lg md:w-copy " >
                    <span className="font-bold">Keyroost</span> is a smart key dispenser that lets you emulate a  <span className="font-bold text-pink">simple autonomous store </span>with just a few (dumb) padlocks.  Keyroost puts your products online and dispenses keys to customers when they have purchased a product.  It manages your inventory and updates you when products have been bought and picked up.
                 </div>

                 {/* mobile variant */} 
                 <div className="block md:hidden pt-6 p-2 mb-6 leading-5 text-white text-sm md:leading-7 md:p-6 md:text-xl md:w-copy " >
                    <span className="font-bold">Keyroost</span> is a smart key dispenser that lets you emulate a  <span className="font-bold text-pink">simple autonomous store </span>with just a few (dumb) padlocks.  Keyroost puts products online, dispenses keys and manages inventory. 
                 </div>
                
                </div>
                
                <div className="hidden md:block flex-grow-1 w-full">
                    <div className="h-16 bg-pink flex justify-center items-center">
                         <Link href="/unmanned"><a className="text-center md:text-base text-white md:font-bold p-6">unmanned click and collect</a></Link>
                         <Link href="/seasonal"><a className="text-center md:text-base text-white md:font-bold p-6">seasonal unmanned stores</a></Link>
                    </div>
                </div>

                {/* mobile variant */} 
                <div className="block md:hidden flex-grow-1 w-full">
                    <div className="h-8 bg-pink flex justify-center items-center">
                         <Link href="/unmanned"><a className="text-xs text-center md:text-base text-white md:font-bold p-6">click and collect</a></Link>
                         <Link href="/seasonal"><a className="text-xs text-center md:text-base text-white md:font-bold p-6">seasonal stores</a></Link>
                    </div>
                </div>
            </div>
        </div>
       
        {/* large screen variant */}
        <div className="hidden lg:block lg: col-span-3 bg-mustard">
          <div className="hidden lg:block text-charcoal text-sm xl:text-base xl:leading-10 p-8 leading-7 font-light">
          <span className="font-bold">Keyroost</span> runs off batteries.  That means it can be placed pretty much anywhere.  In the middle of a field, at the end of a driveway or at the entrance to an outbuilding.  It works with anything that can be locked with a padlock.  You can sell fresh produce using lockable containers in a fridge or large bulky items (firewood, plants) in lockable containers and cupboards. Keyroost is so versatile that you could run an unmanned click and collect store in the middle of a field on a busy weekend, test the market for new produce or run a permanent super-slick store. We know we haven't thought of all of the possibilities.  We cannot wait to see  how you use it! 
       </div>

        </div>
        <div className="hidden md:block md:col-span-2">
            <img src="/sideimage.svg"></img>
        </div>

      {/* end of grid*/}  
      </div>

      <div className="hidden md:block lg:hidden text-charcoal bg-lightblue text-sm leading-5 p-4 md:text-xl md:p-10 md:leading-8 font-light">
        <span className="font-bold">Keyroost</span> runs off batteries.  That means it can be placed pretty much anywhere.  In the middle of a field, at the end of a driveway or at the entrance to an outbuilding.  It works with anything that can be locked with a padlock.  You can sell fresh produce using lockable containers in a fridge or large bulky items (firewood, plants) in lockable containers and cupboards. Keyroost is so versatile that you could run an unmanned click and collect store in the middle of a field on a busy weekend, test the market for new produce or run a permanent super-slick store. We know we haven't thought of all of the possibilities.  We cannot wait to see  how you use it! 
      </div>
      {/* mobile variant */} 
      <div className="block md:hidden  text-charcoal bg-lightblue text-xs leading-5 p-4 pt-8 ">
        <span className="font-bold">Keyroost</span> runs off batteries.  That means it can be placed pretty much anywhere.   It works with anything that can be locked with a padlock.   
      </div>
      <div className="block md:hidden  text-charcoal bg-lightblue text-xs leading-5 pl-4 pr-4 pb-4 ">
      <span className="font-bold">Keyroost</span> is so versatile that you could run an unmanned click and collect store in the middle of a field on a busy weekend, test the market for new produce or run a permanent super-slick store. 
      </div>
     
    </div>
  )
}