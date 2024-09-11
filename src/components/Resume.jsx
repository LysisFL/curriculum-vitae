import { useState } from "react";
import ResumeSection from "./ResumeSection";

export default function Resume({person, educationExperience,laboralExperience}) {
    const {firstName,lastName,phoneNumber,email} = person;
    return (
        <div className="resume">
            <div className="personalInfo">
                <h2> {firstName} {lastName} </h2>
                <p> Tel: {phoneNumber} </p>
                <p> Email: {email} </p>
            </div>
            <ResumeSection
                title="Professional Experience"
                laboralExperience={laboralExperience}
                />
            <ResumeSection
                title="Education"
                educationExperience={educationExperience}
                />
        </div>
    )
}