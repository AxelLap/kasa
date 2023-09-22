//hooks
import { useState } from "react";
//images
import vectorLeft from '../assets/vector-left.svg'
import vectorRight from '../assets/vector-right.svg'
//style
//import '../styles/components/slider.scss'

function Slider(props) {
    const { totalImages, images } = props;

    const [currentNumber, setCurrentNumber] = useState(1);
    const [currentImage, setCurrentImage] = useState(0)

    const handleNextBtn = () => {
        setCurrentNumber(currentNumber !== totalImages ? currentNumber + 1 : 1)
        setCurrentImage(currentImage !== (totalImages - 1) ? currentImage + 1 : 0)
    }
    const handlePrevBtn = () => {
        setCurrentNumber(currentNumber !== 1 ? currentNumber - 1 : totalImages)
        setCurrentImage(currentImage !== 0 ? currentImage - 1 : (totalImages - 1))
    }
    return (
        <>
            <div className="sliderWrapper">
                <img src={images[currentImage]} alt="" className="sliderImg" />
                <div>
                    <button className="sliderBtn left" onClick={handlePrevBtn}>
                        <img src={vectorLeft} alt="" />
                    </button>
                    <button className="sliderBtn right" onClick={handleNextBtn}>
                        <img src={vectorRight} alt="" />
                    </button>
                </div>
                <span className="counter">{currentNumber}/{totalImages}</span>
            </div>


        </>

    )
}
export default Slider