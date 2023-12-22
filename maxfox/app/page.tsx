import MaxFoxPfp from "./components/MaxFoxPfp"
import SocialMediaBanner from "./components/SocialMediaBanner"
import QuoteBox from "./components/QuoteBox"

export default function Home() {
  return ( 
    <main className="flex min-h-screen flex-col items-center bg-white py-8">
      <MaxFoxPfp />
      <h1 className="text-center text-3xl text-black drop-shadow-lg pt-1"><b>Max Fox</b></h1>
      <p className="text-black font-light pt-1 pb-1">Entrepreneur, Developer, Thinker, Investor, Artist</p>
      <SocialMediaBanner />
      <div className="py-7">
        <QuoteBox text='The internet is full of pretentious asswipes.' author='Max Fox'/>
      </div>
      
    </main>
  )
}
