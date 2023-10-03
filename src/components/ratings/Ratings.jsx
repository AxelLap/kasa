import activeStar from '../../assets/active-star.svg'
import inactiveStar from '../../assets/inactive-star.svg'

function Ratings(props) {
    const { rating } = props;

    return (

        <div className='starWrapper'>
            <img src={activeStar} className='star' alt='' />
            <img src={rating < 2 ? inactiveStar : activeStar} className='star' alt='' />
            <img src={rating < 3 ? inactiveStar : activeStar} className='star' alt='' />
            <img src={rating < 4 ? inactiveStar : activeStar} className='star' alt='' />
            <img src={rating < 5 ? inactiveStar : activeStar} className='star' alt='' />
        </div>

    )
}
export default Ratings
