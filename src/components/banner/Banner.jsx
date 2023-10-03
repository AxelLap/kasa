function Banner(props) {
    const { title, alt, imgSrc } = props;
    return (
        <div className='banner'>
            <img src={imgSrc} alt={alt} />
            <div className='overlay'></div>
            <h1>{title}</h1>
        </div>
    )
}

export default Banner;
