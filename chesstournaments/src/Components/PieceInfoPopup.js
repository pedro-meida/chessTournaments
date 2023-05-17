import React from 'react'
import './PieceInfoPopup.css'
import { useState, useEffect } from 'react';

function PieceInfoPopup(InfoPiece) {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if (InfoPiece.trigger) {
            // Delay setting isOpen to true to allow transition effect
            const timeoutId = setTimeout(() => {
                setIsOpen(true);
            }, 10);

            return () => clearTimeout(timeoutId);
        } else {
            setIsOpen(false);
        }
    }, [InfoPiece.trigger]);
    return (InfoPiece.trigger) ? (
        <div className={`basePopup ${isOpen ? 'active' : ''}`}>
            <div className='popup'>
                <button onClick={() => InfoPiece.setTrigger(false)} className='btnClosePopup'>X</button>
                {InfoPiece.children}
            </div>
        </div>
    ) : "";
}

export default PieceInfoPopup