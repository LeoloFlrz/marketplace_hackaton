import { useState } from 'react'
import './App.css'
import Cardetail from './assets/Components/Cardetail'

function App() {
  const [] = useState(0)

  return (
    <>
    
    <Cardetail _id={0} image_url={''} model={''} make={''} price={0} doors={0} year={0} city={''} type={''} seats={0} horsepower_rpm={0} transmission={''} fuel_tank_capacity={0} />

    </>
  )
}

export default App
