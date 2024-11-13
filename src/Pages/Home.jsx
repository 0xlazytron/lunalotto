import Hero from './Hero'
import Mint from './Mint'

import Roadmap from './Roadmap'
import Collection from './Collection'
import Faqs from './Faqs'
import Prizes from './Prizes'
import Tickets from './Tickets'
function Home() {
  return (
    <div className=" bg11 overflow-x-hidden ">
      <Hero />
      <Mint />
      <Tickets />
      <Prizes />
      <Collection />

      <Roadmap />
      <Faqs />
    </div>
  )
}

export default Home
