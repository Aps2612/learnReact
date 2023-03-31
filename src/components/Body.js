import { restaurantList } from "../config.js";
import RestaurantCards from "./RestaurantCards.js";
import { useState } from 'react';



function filterData(searchText,List){
    const data = List.filter((ele) => {
        return ele.data.name.includes(searchText);
    })

    return data;

}



const Body = () => {
    const [searchText,setSearchText] = useState('')
    const [List,setList] = useState(restaurantList);
  return (
    <>
      <div className="search">
      <input
        type="text"
        placeholder="Search for restaurant,cuisines or dish"
        value={searchText}
        onChange = {(e) => {
            setSearchText(e.target.value);
        }}
        
      ></input>
     
     
      <button className="button" type ="submit" onClick={(dc)=>{
            setList(List.filter((ele) => ele.data.name.includes(searchText)))
      }}>Search</button>
     </div>
      <div className="body">
        {List.map((rest) => (
          <RestaurantCards {...rest.data} key={rest.data.id} />
        ))}
      </div>
    </>
  );
};

export default Body;
