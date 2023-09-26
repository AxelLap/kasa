import Slider from "../components/Slider"
import Host from "../components/Host"
import Tags from "../components/Tags"
import Ratings from "../components/Ratings"
import Collapse from "../components/Collapse"

function AccomodationContent(props) {

    const { currentAccomodation } = props;
    const hostData = currentAccomodation.host;

    return (
        <div className="accomodation-container">

            <Slider
                totalImages={currentAccomodation.pictures.length}
                images={currentAccomodation.pictures}
            />

            <div className="info-wrapper">
                <div className="accomodation-info">

                    <div className="titleWrapper">
                        <h2 className="title">{currentAccomodation.title}</h2>
                        <p className="location">{currentAccomodation.location}</p>
                    </div>

                    <Tags
                        name={hostData.name}
                        tagsList={currentAccomodation.tags}
                    />


                </div>

                <div className="host-info">

                    <Host
                        name={hostData.name}
                        picture={hostData.picture}
                    />
                    <Ratings
                        rating={currentAccomodation.rating}
                    />
                </div>
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
export default AccomodationContent
