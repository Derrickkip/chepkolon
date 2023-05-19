import Welcome from '../components/Welcome'
import Schools from '../components/Schools'
import Calendar from '../components/calendar'
import TopHeader from '../components/topHeader'
import HeroImage from '../components/heroimage'
import Header from '../components/header'


export default function Home() {
  return (
        <>
          <Header/>
          <HeroImage/>
          <Welcome />
          <Schools />
          <TopHeader />
          {/* <Calendar /> */}
        </>  
  )
}
