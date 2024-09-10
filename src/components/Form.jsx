import { useState } from 'react'
import '../styles/Form.css'
import FormField from './FormField';
import FormSection from './FormSection';

export default function Form({
    person,
    handleDataUpdate
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
                This is the education section!
            </FormSection>
            <FormSection
                title="Experience"
            >
                This is the experience section!
            </FormSection>
        </div>
    )
}