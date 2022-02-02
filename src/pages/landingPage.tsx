import '../styles/landingPage.module.css'
import PopUpBox from '../components/template/PopUpBox'
import { useState } from 'react'

export default function LandingPage() {

  const [ trigger, setTrigger ] = useState(false)

  return (
    <div className='flex justify-center'>
      <button onClick={() => setTrigger(true)}>Abrir PopUpBox</button>
      <PopUpBox titulo='Titulo do Landing Page' trigger={trigger} setTrigger={setTrigger}>
        <span>teste1</span>
        <span>teste2</span>
        <span>teste3</span>
      </PopUpBox>
    </div>
  )
}