export default function ResumeSection({educationExperience, laboralExperience, title}) {
    return (
        <div>
            <h2>{title}</h2>
            {educationExperience!=undefined && educationExperience.map((entry, index) => (
                <div key={index}>
                    <h3>{entry.title}</h3>
                    <p>{entry.subtitle}</p>
                    <p>{entry.beginDate} - {entry.endDate ? entry.endDate : "current"}</p>
                    <p>{entry.location}</p>
                </div>
            ))}
            {laboralExperience!=undefined && laboralExperience.map((entry, index) => (
                <div key={index}>
                    <h3>{entry.title}</h3>
                    <p>{entry.subtitle}</p>
                    <p>{entry.beginDate} - {entry.endDate ? entry.endDate : "current"}</p>
                    <p>{entry.location}</p>
                </div>
            ))}
        </div>
    );
}