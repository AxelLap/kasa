import { useState } from "react";

import vectorLeft from '../../assets/vector-left.svg'
import vectorRight from '../../assets/vector-right.svg'

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
                    <button className={totalImages === 1 ? "hiden" : "sliderBtn left"} onClick={handlePrevBtn}>
                        <img src={vectorLeft} alt="" />
                    </button>
                    <button className={totalImages === 1 ? "hiden" : "sliderBtn right"} onClick={handleNextBtn}>
                        <img src={vectorRight} alt="" />
                    </button>
                </div>
                <span className={totalImages === 1 ? "hiden" : "counter"}>{currentNumber}/{totalImages}</span>
            </div>
        </>

    )
}
export default Slider
