import Head from 'next/head'
import Feed from '../components/Feed'
import NavBar from '../components/Navbar'
import News from '../components/News'
import Profile from '../components/Profile'

export default function Home() {
  return (
    <div className='bg-gray-200 h-screen'>
      <Head>
        <title>Social Media UI Clone</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <div className='flex justify-around bg-gray-200'>
        <Profile />
        <Feed />
        <News />
      </div>
    </div>
  )
}
