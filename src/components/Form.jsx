import { useState } from 'react'
import '../styles/Form.css'

export default function Form() {

    const [person,setData] = useState({
        firstName:'John',
        lastName:'Doe',
        phoneNumber:123456789,
        email:'johndoe@business.com'
    });

    const fullName = person.firstName + ' ' + person.lastName;

    function handleDataUpdate(e) {
        setData ({
            ...person,
            [e.target.name]: e.target.value
        });
    }

    function FormField({labelText,inputName,inputValue}) {
        return (
            <div className='formData'>
                <label>{labelText}</label>
                <input
                    name={inputName}
                    value={inputValue}
                    onChange={handleDataUpdate}
                    />
            </div>
        )
    }

    return (
        <div className="form">
            <div className="formData">
                <label>First name:</label>
                <input
                    name="firstName"
                    value={person.firstName}
                    onChange={handleDataUpdate}
                    />
            </div>
            <div className="formData">
                <label>Last name:</label>
                <input
                    name="lastName"
                    value={person.lastName}
                    onChange={handleDataUpdate}
                    />
            </div>
            <div className="formData">
                <label>Phone number:</label>
                <input
                    name="phoneNumber"
                    type="number"
                    value={person.phoneNumber}
                    onChange={handleDataUpdate}
                    />
            </div>
            <div className="formData">
                <label>Email:</label>
                <input
                    name="email"
                    type="email"
                    value={person.email}
                    onChange={handleDataUpdate}
                    />
            </div>

            <h4> These are your data. They're updating in real time! </h4>
            <p> Your name is <b>{fullName}</b>.</p>
            <p> Your phoneNumber is <b>{person.phoneNumber}</b> and your email is <b>{person.email}</b>.</p> 
        </div>
    )
}