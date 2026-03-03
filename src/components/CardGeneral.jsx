import { useState } from 'react';
import Opener from './Opener.jsx';
import Marker from './Marker.jsx';


function Card({ title, description }) {
    const [isActive, setIsActive] = useState(false);
    return (
        <div className="d-grid gap-2 d-md-block p-4">
            <Opener isActive={isActive} setIsActive={setIsActive} title={title} />
            {isActive ? <div className="card-body"><Marker title={title} description={description} /></div> : ''}
        </div>

    )

}

export default Card