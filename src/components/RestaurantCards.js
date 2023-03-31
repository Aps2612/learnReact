import {URL} from '../config'

const RestaurantCards = ({name,cuisines,cloudinaryImageId,totalRatingsString})=>{
    return (
        <div className = "cards">
        <img src = {URL + cloudinaryImageId}/>
        <h1>{name}</h1>
        <h2>{cuisines.join(', ')}</h2> 
        <h3>{totalRatingsString}</h3> 
        </div>
    )
}

export default RestaurantCards;