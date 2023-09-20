import { useParams } from "react-router-dom"

import Slider from "../components/Slider"

import { accomodationList } from "../datas/accomodationList"

import '../styles/pages/accomodation.scss'

function Accomodation() {
    const { id } = useParams();
    const currentAccomodation = accomodationList.find((accomodation) => accomodation.id === id)
    console.log(currentAccomodation);
    return (
        <div className="accomodation-container">
            <Slider
                totalImages={currentAccomodation.pictures.length}
                images={currentAccomodation.pictures}
            />
            <div>
                <h2 className="title">{currentAccomodation.title}</h2>
                <p className="location">{currentAccomodation.location}</p>
            </div>

        </div>
    )
}

export default Accomodation