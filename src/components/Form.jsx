import { useState } from 'react'
import '../styles/Form.css'
import FormField from './FormField';
import FormSection from './FormSection';

export default function Form() {

    const [person,setData] = useState({
        firstName:'John',
        lastName:'Doe',
        phoneNumber:123456789,
        email:'johndoe@business.com'
    });

    const fullName = person.firstName + ' ' + person.lastName;

    {/*}

    function handleDataUpdate(e) {
        setData ({
            ...person,
            [e.target.name]: e.target.value
        });
    } {*/}

    const handleDataUpdate = e => {
        setData ({
            ...person,
            [e.target.name]: e.target.value
        });
    }

    return (
        <div className="form">
            <h2> Personal details </h2>
            <FormField 
                labelText="First name:"
                inputName="firstName"
                inputValue={person.firstName}
                onChange={handleDataUpdate}
            />
            <FormField 
                labelText="Last name:"
                inputName="lastName"
                inputValue={person.lastName}
                onChange={handleDataUpdate}
            />
            <FormField 
                labelText="Phone number:"
                inputName="phoneNumber"
                inputValue={person.phoneNumber}
                inputType='tel'
                onChange={handleDataUpdate}
            />
            <FormField 
                labelText="Email:"
                inputName="email"
                inputValue={person.email}
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
            <h4> These are your data. They're updating in real time! </h4>
            <p> Your name is <b>{fullName}</b>.</p>
            <p> Your phoneNumber is <b>{person.phoneNumber}</b> and your email is <b>{person.email}</b>.</p> 
        </div>
    )
}