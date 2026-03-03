import { useState } from 'react';
import Opener from './Opener.jsx';


function Card({ title, description }) {
    const [isActive, setIsActive] = useState(false);
    const marker = description.split(title);
    return (
        <div className="d-grid gap-2 d-md-block p-4">
            <Opener isActive={isActive} setIsActive={setIsActive} title={title} />
            {isActive ? <div className="card-body">{marker[0]}<mark>{title}</mark>{marker[1]}</div> : ''}
        </div>

    )

}

export default Card