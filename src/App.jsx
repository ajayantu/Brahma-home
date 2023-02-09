import { useState, React } from 'react'
import './App.css'
import Counter from './Components/Counter/Counter'
import Socials from './Components/Socials/Socials'
import Title from './Components/Title/Title'

function App() {

  return (
    <>
    <Title />
    <Counter endDate={new Date("2023-02-10")} />
    <Socials />
    </>
  )
}

export default App
