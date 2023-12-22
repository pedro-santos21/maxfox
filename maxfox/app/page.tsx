import Image from 'next/image'

export default function Home() {
  return ( 
    <main className="flex min-h-screen flex-col items-center bg-white">
      <Image className='scroll-py-8' src="/maxfox.png" alt="max fox" width={400} height={400} />
      <h1 className="text-center text-3xl text-black"><b>Max Fox</b></h1>
    </main>
  )
}
