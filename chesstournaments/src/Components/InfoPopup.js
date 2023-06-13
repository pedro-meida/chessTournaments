import React from 'react'
import './InfoPopup.css'
import { useState, useEffect } from 'react';

function PieceInfoPopup(Info) {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if (Info.trigger) {
            const timeoutId = setTimeout(() => {
                setIsOpen(true);
            }, 10);

            return () => clearTimeout(timeoutId);
        } else {
            setIsOpen(false);
        }
    }, [Info.trigger]);
    return (Info.trigger) ? (
        <div className={`basePopup ${isOpen ? 'active' : ''}`}>
            <div className='popup'>
                <button onClick={() => Info.setTrigger(false)} className='btnClosePopup'>X</button>
                {Info.children}
            </div>
        </div>
    ) : "";
}

export default PieceInfoPopup