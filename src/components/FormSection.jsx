import { useState } from "react";

export default function FormSection({title, children}) {
    const [isActive,setIsActive] = useState('false');

    return (
        <section>
            <button onClick={() => setIsActive(!isActive)}>
                <h2> {title} </h2>
                {isActive ? <p>{children}</p> : <p>Show more</p>}
            </button>
        </section>
    );
  }