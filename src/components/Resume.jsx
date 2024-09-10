import { useState } from "react";

export default function Resume({person}) {
    const {firstName,lastName,phoneNumber,email} = person;
    return (
        <div className="personalInfo">
            <h2> {firstName} {lastName} </h2>
            <p> Tel: {phoneNumber} </p>
            <p> Email: {email} </p>
        </div>
    )
}