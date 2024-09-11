import { useState } from 'react'
import '../styles/Form.css'
import FormField from './FormField';
import FormSection from './FormSection';

export default function Form({
    person,
    handleDataUpdate,
    educationExperience,
    laboralExperience,
    onDataEdit
}) {
    const {firstName,lastName,phoneNumber,email} = person;

    return (
        <div className="form">
            <h2> Personal details </h2>
            <FormField 
                labelText="First name:"
                inputName="firstName"
                inputValue={firstName}
                onChange={handleDataUpdate}
            />
            <FormField 
                labelText="Last name:"
                inputName="lastName"
                inputValue={lastName}
                onChange={handleDataUpdate}
            />
            <FormField 
                labelText="Phone number:"
                inputName="phoneNumber"
                inputValue={phoneNumber}
                inputType='tel'
                onChange={handleDataUpdate}
            />
            <FormField 
                labelText="Email:"
                inputName="email"
                inputValue={email}
                inputType='email'
                onChange={handleDataUpdate}
            />
            <FormSection
                title="Education"
            >
                {educationExperience && educationExperience.map((entry, index) => (
                        <div className='row' key={index}>
                            <h4>{entry.title}</h4>
                            <button>Edit</button>
                        </div>
                ))}
            </FormSection>
            <FormSection
                title="Job experience"
            >
                {laboralExperience && laboralExperience.map((entry, index) => (
                <div className='row' key={index}>
                    <h4>{entry.title}</h4>
                    <button>Edit</button>
                </div>
            ))}
            </FormSection>
        </div>
    )
}