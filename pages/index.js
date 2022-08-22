import Head from 'next/head'
import Image from 'next/image'
import Carousel from '../components/carousel'
import Welcome from '../components/welcome'
import Schools from '../components/schools'


export default function Home() {
  return (
        <>
          <Carousel />
          <Welcome />
          <Schools />
        </>  
  )
}
