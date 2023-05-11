import Head from 'next/head'
import Image from 'next/image'
import Carousel from '../components/carousel'
import Welcome from '../components/Welcome'
import Schools from '../components/Schools'
import IndexHome from '../components/IndexHome'
import Difference from '../components/Difference'
import WhyChepkolon from '../components/WhyUs'
import Calendar from '../components/calendar'
import TopHeader from '../components/topHeader'
import NewsComponent from '../components/News'


export default function Home() {
  return (
        <>
          <Carousel />
          <Welcome />
          <Schools />
          {/* <WhyChepkolon /> */}
          {/* <Difference /> */}
          <NewsComponent />
          <TopHeader />
          <Calendar />
        </>  
  )
}
