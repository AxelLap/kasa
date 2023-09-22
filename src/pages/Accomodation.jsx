//hooks
import { useParams } from "react-router-dom"
//components
import Slider from "../components/Slider"
import Host from "../components/Host"
import Tags from "../components/Tags"
import Ratings from "../components/Ratings"
import Collapse from "../components/Collapse"

//datas
import { accomodationList } from "../datas/accomodationList"

//style
//import '../styles/pages/accomodation.scss'

function Accomodation() {
    const { id } = useParams();
    const currentAccomodation = accomodationList.find((accomodation) => accomodation.id === id)
    console.log(currentAccomodation);
    const hostData = currentAccomodation.host;

    return (
        <div className="accomodation-container">
            <Slider
                totalImages={currentAccomodation.pictures.length}
                images={currentAccomodation.pictures}
            />
            <div className="info-wrapper">
                <div className="titleWrapper">
                    <h2 className="title">{currentAccomodation.title}</h2>
                    <p className="location">{currentAccomodation.location}</p>
                </div>
                <Host
                    name={hostData.name}
                    picture={hostData.picture}
                />
            </div>
            <div className="tagsAndRatingsWrapper">
                <Tags
                    name={hostData.name}
                    tagsList={currentAccomodation.tags}
                />
                <Ratings
                    rating={currentAccomodation.rating}
                />
            </div>
            <div className="descriptionAndEquipements">
                <div className="description">
                    <Collapse
                        title="Description"
                        description={currentAccomodation.description}
                    />
                </div>
                <div className="equipement">
                    <Collapse
                        title="Équipements"
                        description={currentAccomodation.equipments.map((equipement, index) => (
                            <li className="item" key={index}>{equipement}</li>
                        ))}
                    />
                </div>

            </div>
        </div>
    )
}

export default Accomodation