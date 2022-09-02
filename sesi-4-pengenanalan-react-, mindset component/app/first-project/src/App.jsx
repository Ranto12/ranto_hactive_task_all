import { AboutMeetup, CardPastMeetups, Footer, Member, Navbar, NextMeetup, Profil } from './Component'
import { Line } from './Component/atoms'

function App() {
  return (
    <div className=''>
      <Navbar/>
      <Profil/>
      <NextMeetup/>
      <AboutMeetup/>
      <Member/>
      <div className=" mx-10">
        <div className='flex justify-between'>
            <p className="font-bold text-xl mt-5 mb-4">Past Meetups</p>
            <p className="font-bold text-xl mt-5 mb-4 mr-10">See all</p>
        </div>
      <div className=' flex flex-wrap'>
          <CardPastMeetups />
          <CardPastMeetups />
          <CardPastMeetups />
      </div>
      </div>
      <Footer />
    </div>
  )
}

export default App
