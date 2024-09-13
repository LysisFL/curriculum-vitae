import { useState } from "react";
import '../App.css'

/* eslint-disable react/prop-types */
export default function Experience({experience, id, onChange}) {
    const {beginDate,endDate,location,title,subtitle} = experience;
    const [isEditing, setIsEditing] = useState(false)

    const handleDataUpdate = (field) => (e) => {
        console.log("id:" + id + ", field: " + field + ",value: "+ e.target.value)
        onChange(id, field, e.target.value); 
    };


    return (    
        <>    
            <div className='row'>
                <h4>{title}</h4>
                {!isEditing && <button onClick={() => setIsEditing(true)}>Edit</button>}
            </div>
            {isEditing &&
            <div className="column">
                <input
                    type="text"
                    value={title}
                    name="title"
                    onChange={handleDataUpdate("title")}
                />
                <input
                    type="text"
                    value={beginDate}
                    name="beginDate"
                    onChange={handleDataUpdate("beginDate")}
                />
                <input
                    type="text"
                    value={endDate}
                    name="endDate"
                    onChange={handleDataUpdate("endDate")}
                />
                <input
                    type="text"
                    value={location}
                    name="location"
                    onChange={handleDataUpdate("location")}
                />
                <input
                    type="text"
                    value={subtitle}
                    name="subtitle"
                    onChange={handleDataUpdate("subtitle")}
                />
                <button onClick={() => setIsEditing(false)}>Exit</button>
            </div>
            }
        </>
    )
}