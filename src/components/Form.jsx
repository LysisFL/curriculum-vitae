/* eslint-disable react/prop-types */
import '../styles/Form.css'
import FormField from './FormField';
import FormSection from './FormSection';
import Experience from './Experience';

export default function Form({
    person,
    handlePersonalDataUpdate,
    educationExperience,
    updateEducationExperience,
    laboralExperience,
    updateLaboralExperience
}) {
    const {firstName,lastName,phoneNumber,email} = person;

    return (
        <div className="form">
            <h2> Personal details </h2>
            <FormField 
                labelText="First name:"
                inputName="firstName"
                inputValue={firstName}
                onChange={handlePersonalDataUpdate}
            />
            <FormField 
                labelText="Last name:"
                inputName="lastName"
                inputValue={lastName}
                onChange={handlePersonalDataUpdate}
            />
            <FormField 
                labelText="Phone number:"
                inputName="phoneNumber"
                inputValue={phoneNumber}
                inputType='tel'
                onChange={handlePersonalDataUpdate}
            />
            <FormField 
                labelText="Email:"
                inputName="email"
                inputValue={email}
                inputType='email'
                onChange={handlePersonalDataUpdate}
            />
            <FormSection
                title="Education"
            >
                {educationExperience && educationExperience.map((entry) => (
                    <Experience
                        id={entry.id}
                        key={entry.id}
                        experience={entry} 
                        onChange={updateEducationExperience}/>
                ))}
                <button> Add </button>
            </FormSection>
            {/*}
            <FormSection
                title="Job experience"
            >
                {laboralExperience && laboralExperience.map((entry) => (
                    <Experience
                        id={entry.id}
                        key={entry.id}
                        experience={entry}
                        onChange={updateLaboralExperience} />
            ))}
            </FormSection> {*/}
        </div>
    )
}