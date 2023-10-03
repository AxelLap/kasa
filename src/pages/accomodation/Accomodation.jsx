import { useParams } from "react-router-dom"
import { Navigate } from "react-router-dom"

import AccomodationContent from "../../components/accomodationcontent/AccomodationContent"

import { accomodationList } from "../../datas/accomodationList"

function Accomodation() {
    const { id } = useParams();
    const currentAccomodation = accomodationList.find((accomodation) => accomodation.id === id)

    if (currentAccomodation === undefined) { return (<Navigate to="/*" />) } else {
        return (
            <div>
                <AccomodationContent
                    currentAccomodation={currentAccomodation}
                />
            </div>
        )
    };
}

export default Accomodation
