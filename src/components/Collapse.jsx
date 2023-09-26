//hooks
import { useState } from 'react';
//images
import arrow from '../assets/arrow-inactive.svg'
//style
//import '../styles/components/collapse.scss'

function Collapse(props) {
    const [open, setOPen] = useState(false);
    const { title, description } = props;



    const handleCollapsing = () => {
        setOPen(!open)
    }


    return (
        <div className='collapse-wrapper'>
            <div className='collapse-header'>
                <h2>{title}</h2>
                <button onClick={handleCollapsing} >
                    <div className={open ? "arrow-active" : "arrow-inactive"}>
                        <img src={arrow} alt='flèche ouverture' className='arrow' />
                    </div>
                </button>
            </div>


            <div className={open ? `content-show ${title}` : "content-hide"}>
                <div className="collapse-content">
                    <p>{description}</p>
                </div>
            </div>


        </div>
    )
}

export default Collapse