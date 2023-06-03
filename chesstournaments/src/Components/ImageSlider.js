import React from 'react'
import InfoPopup from '../Components/InfoPopup';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa'
import { useState } from 'react';

const ImageSlider = ({ slides }) => {
    const [current, setCurrent] = React.useState(0)
    const [prev, setPrev] = React.useState(5)
    const [next, setNext] = React.useState(1)
    const [popup, setPopup] = useState(false);
    const [currentPopup, setCurrentPopup] = useState(0);
    const [piece, setPiece] = useState('');
    const slidesData = slides;

    const nextSlide = () => {
        setPrev(prev === 5 ? 0 : prev + 1)
        setNext(next === 5 ? 0 : next + 1)
        setCurrent(current === 5 ? 0 : current + 1)
        if (popup === true) {
            popupFunction(currentPopup === 5 ? 0 : currentPopup + 1);
        }
    }

    const prevSlide = () => {
        setPrev(prev === 0 ? 5 : prev - 1)
        setCurrent(current === 0 ? 5 : current - 1)
        setNext(next === 0 ? 5 : next - 1)
        if (popup === true) {
            popupFunction(currentPopup === 0 ? 5 : currentPopup - 1);
            console.log(currentPopup);
        }
    }

    const popupFunction = (valueDataPiece) => {
        setCurrentPopup(valueDataPiece);
        setPopup(true);
        setPiece(slidesData[valueDataPiece]);
    }

    return (
        <>
            <section className='slider'>
                <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide} />
                <div className='carousel' >

                    <img
                        src={slidesData[prev].image}
                        alt='Imagem da Peça de Xadrez da Esquerda'
                        className='imgSlider'
                        onClick={() => popupFunction(prev)}
                    />

                    <img
                        src={slidesData[current].image}
                        alt='Imagem da Peça de Xadrez do Meio'
                        className='imgSlider'
                        onClick={() => popupFunction(current)}
                    />

                    <img
                        src={slidesData[next].image}
                        alt='Imagem da Peça de Xadrez da Direita'
                        className='imgSlider'
                        onClick={() => popupFunction(next)}
                    />

                </div>
                <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide} />
            </section>

            <p className='txtInformationTop'>There are six different types of chess pieces.</p>
            <p className='txtInformationMed'>Each side starts with 16 pieces:
                eight <span onClick={() => popupFunction(0)} className='txtChessPieces'>pawns</span>,
                two <span onClick={() => popupFunction(1)} className='txtChessPieces'>bishops</span>,
                two <span onClick={() => popupFunction(2)} className='txtChessPieces'>knights</span>,
                two <span onClick={() => popupFunction(3)} className='txtChessPieces'>rooks</span>,
                one <span onClick={() => popupFunction(4)} className='txtChessPieces'>queen</span>, and
                one <span onClick={() => popupFunction(5)} className='txtChessPieces'>king</span>.</p>
            <p className='txtInformationBot'>Let's meet them!</p>

            <InfoPopup trigger={popup} setTrigger={setPopup}>
                <h2 className='txtChessPopupTitle'>{piece.title}</h2>
                <img src={piece.image} alt='Imagem da Peça de Xadrez' className='imgChessPopup' />
                <div className='txtChessPopupDescription'>
                    <p className='txtChessPopupDescriptionTop'>{piece.firstText}</p>
                    <p className='txtChessPopupDescriptionBot'>{piece.secondText}</p>
                </div>
            </InfoPopup>
        </>
    )
}

export default ImageSlider