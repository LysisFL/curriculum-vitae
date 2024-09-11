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

  const [educationExperience, setEducationExperience] = useState([{
    beginDate: '07/2021',
    endDate: '07/2023',
    location: 'Seoul, S.Korea',
    title: 'League of Legends master course',
    subtitle: 'How to reach Challenger in 90 days'
    },{
    beginDate: '07/2017',
    endDate: '05/2021',
    location: 'Chicago, US',
    title: 'Bachelor in quantum physics',
    subtitle: 'PhD in metarefractive nanolasers'
    }
  ])

  const [laboralExperience, setLaboralExperience] = useState([{
    beginDate: '08/2023',
    location: 'Chengdu, China',
    title: 'KT Main Roster player',
    subtitle: 'Support x3 LPL Champion'
    }
  ])

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
        educationExperience={educationExperience}
        laboralExperience={laboralExperience}
      />
      <Resume
        person = {personalData}
        educationExperience = {educationExperience}
        laboralExperience={laboralExperience}
      />
    </>
  )
}

export default App
