import '../styles/components/banner.scss'

function Banner(props) {

    return (
        <div className='banner'>
            <img src={props.imgSrc} alt={props.alt} />
            <div className='overlay'></div>
            <h1>{props.title}</h1>
        </div>
    )
}

export default Banner;