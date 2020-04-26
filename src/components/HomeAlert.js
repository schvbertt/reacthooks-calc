import React from 'react'

export default function HomeAlert({homeAlert, handleHomeAlert}) {
    return (
        <div className={homeAlert ? 'homealert' : 'hideAlert'}>
            <span className="closebtnhome" onClick={handleHomeAlert}>&times;</span> 
            <span>
                This project was made with somebody's template.
                Everything from logical side was made by myself
                as is fully understandable for me.
                </span>
        </div>
    )
}
