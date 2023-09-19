import { useState } from 'react';
import arrow from '../assets/arrow-down.svg'
import '../styles/components/collapse.scss'

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
                <button onClick={handleCollapsing}>
                    <img src={arrow} alt='flèche ouverture' className='arrow' />
                </button>

            </div>
            {
                open &&
                //<div className={open ? "content-show" : "content-hide"}>
                <div className='collapse-content'>
                    <p>{description}</p>
                </div>
                //</div>

            }
        </div>
    )
}

export default Collapse