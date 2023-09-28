function Host(props) {
    const { name, picture } = props;

    return (
        <div className="hostWrapper">
            <p className="hostName">{name}</p>
            <img className="hostPicture" src={picture} alt="" />
        </div>
    )
}

export default Host