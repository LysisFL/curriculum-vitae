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
    id:1,
    beginDate: '07/2021',
    endDate: '07/2023',
    location: 'Seoul, S.Korea',
    title: 'League of Legends master course',
    subtitle: 'How to reach Challenger in 90 days'
    },{
    id:2,
    beginDate: '07/2017',
    endDate: '05/2021',
    location: 'Chicago, US',
    title: 'Bachelor in quantum physics',
    subtitle: 'PhD in metarefractive nanolasers'
    }
  ])

  const [laboralExperience, setLaboralExperience] = useState([{
    id:1,
    beginDate: '08/2023',
    location: 'Chengdu, China',
    title: 'KT Main Roster player',
    subtitle: 'Support x3 LPL Champion'
    }
  ])

  const handlePersonalDataUpdate = e => {
    setPersonalData ({
        ...personalData,
        [e.target.name]: e.target.value
    });
  }


  const updateEducationExperience = (experienceId, field, value) => {
    setEducationExperience(prevExperience => 
      prevExperience.map(experience =>
        experienceId === experience.id // Ensure the comparison is correct
          ? { ...experience, [field]: value } 
          : experience 
      )
    );
  };

  const updateLaboralExperience = (index, field, value) => {
    setLaboralExperience(prevExperience => 
      prevExperience.map((experience, i) =>
        i === index
          ? { ...experience, [field]: value } 
          : experience 
      )
    );
  };

  return (
    <>
      <Form 
        person = {personalData}
        handlePersonalDataUpdate = {handlePersonalDataUpdate}
        educationExperience = {educationExperience}
        updateEducationExperience = {updateEducationExperience}
        laboralExperience = {laboralExperience}
        updateLaboralExperience = {updateLaboralExperience}
      />
      <Resume
        person = {personalData}
        educationExperience = {educationExperience}
        laboralExperience = {laboralExperience}
      />
    </>
  )
}

export default App
