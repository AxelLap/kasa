//hooks
import { useParams } from "react-router-dom"
import { Navigate } from "react-router-dom"
//components

import AccomodationContent from "../components/AccomodationContent"

//datas
import { accomodationList } from "../datas/accomodationList"

//style
//import '../styles/pages/accomodation.scss'

function Accomodation() {
    const { id } = useParams();
    const currentAccomodation = accomodationList.find((accomodation) => accomodation.id === id)
    console.log(currentAccomodation);


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