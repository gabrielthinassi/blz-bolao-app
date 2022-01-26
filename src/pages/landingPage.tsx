import '../styles/landingPage.module.css'
import logo from '../../public/images/logo.png'
import Image from 'next/image'

export default function LandingPage() {
  return (
    <div className='flex w-20 h-20 justify-center items-center'>
      <Image src={logo} alt="Logo" />
    </div>
  )
}