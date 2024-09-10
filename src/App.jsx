import { useState } from 'react'
import Form from './components/Form'
import Resume from './components/Resume'
import './App.css'

function App() {

  const [personalData, setPersonalData] = useState({
    firstName: "John",
    lastName: "Doe",
    phoneNumber: 635892532,
    email: "johndoe@business.com"
  })

  const handleDataUpdate = e => {
    setPersonalData ({
        ...personalData,
        [e.target.name]: e.target.value
    });
}

  return (
    <>
      <Form 
        person = {personalData}
        handleDataUpdate = {handleDataUpdate}
      />
      <Resume
        person = {personalData}
      />
    </>
  )
}

export default App
