import Head from 'next/head'

export default function Home() {
  return (
    <div className="bg-maingray w-full h-full">
      <Head>
        <title>Keyroost farms</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex justify-center items-center h-54">
        <img src="/bigroost.svg"></img>
      </div>
    
      <div className="grid grid-cols-10 bg-roost">
          <div className="col-span-3 flex flex-col bg-lightroost justify-center items-center"></div>
          <div className="col-span-7 bg-roost text-center p-6 md:p-10 md:text-2xl text-white font-bold">our <span className="opacity-30">future</span> team</div>

          <div className="col-span-3 flex flex-col bg-lightroost justify-center items-center md:p-6">
                <div className="p-4"><img src="/tomprofile.png"></img></div>
                <div className="text-white opacity-70 text-xs md:text-sm text-center p-2"> developer / founder </div>
          </div>
          <div className="col-span-7 text-white p-4 text-xs md:text-lg md:leading-8 leading-6 md:pt-10">
          <strong>Dr Tom Lodge</strong> is a developer and research fellow at <strong>Horizon Digital Economy Research</strong>, University of Nottingham.  He has led technical development on many government-funded projects, in collaboration with companies including the <strong>BBC, Microsoft Research, BT and Unilever.</strong>  He is the co-author of publications in leading technical and  design conferences.
          </div>
          <div className="col-span-3 flex  bg-lightroost  flex-col justify-center items-center md:p-6">
                <div className="p-4"><img src="/farmprofile.png"></img></div>
                <div className="text-white opacity-70 text-xs md:text-sm text-center p-2"> farm / retail specialist </div>
          </div>
          <div className="col-span-7 text-white p-4 text-xs md:text-lg md:leading-8  leading-6 md:pt-10">
          Our farm / retail specialist(s) have a deep and passionate understanding of rural retail. They are well connected and respected in farming circles. They are passionate about the role that technology can play in shrinking the journey from farm to fork.
          </div>
          <div className="col-span-3  bg-lightroost  flex flex-col justify-center items-center md:p-6">
                <div className="p-4"><img src="/productprofile.png"></img></div>
                <div className="text-white opacity-70 text-xs md:text-sm text-center p-2"> hardware product manager </div>
          </div>
          <div className="col-span-7 text-white p-4 text-xs md:text-lg md:leading-8 leading-6 md:pt-10">
          Our hardware product manager has over five years of experience managing the full product lifecycle, from initial prototyping through to production and assembly.   He has experience shipping and iterating on successful consumer / small business products. 
          </div>
      </div>
    </div>
  )
}