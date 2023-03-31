import { restaurantList } from '../config.js'
import RestaurantCards from './RestaurantCards.js'



const Body = ()=>{
    return (
   <div className = "body">
    {restaurantList.map((rest)=> (<RestaurantCards  {...rest.data} key={rest.data.id}/>))}
   </div>
    )

}

export default Body;