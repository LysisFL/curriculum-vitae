import { useState } from "react";
import '../App.css';

export default function FormSection({title, children}) {
    const [isActive,setIsActive] = useState('false');

    return (
        <section className="form-section">
            <button onClick={() => setIsActive(!isActive)}>
                <h2> {title} </h2>
            </button>
            {isActive ? children : <p>Show more</p>}
        </section>
    );
  }