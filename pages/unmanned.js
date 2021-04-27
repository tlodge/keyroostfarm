import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="bg-maingray w-full h-full">
      <Head>
        <title>Keyroost farms</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex justify-center items-center">
      <img src="/farmscenario.png"></img>
      </div>
    </div>
  )
}