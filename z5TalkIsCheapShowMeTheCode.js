import React from 'react';
import { createRoot } from 'react-dom/client';
import Logo from './vills.png'

const url = [
    'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/qlrgb6tidtiqm0bsxeap',
    'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/1293a58ab5610f4c730c3d8cb6ac1b65',
    'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/s18pogvibjbumrnnabxr',
     'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/exd0x5wjdxovdwbnfqiz'
]


const restaurantList = [
    {id : 1,name : "Sardar Ji ke Chole Bhature",image : url[0] ,rating:"4",cuisines: ["Indian","Thali"]},
    {id : 2,name : "Mc Donald",image : url[1],rating:"4.3",cuisines: ["american"]},
    {id : 3,name : "Neelkanth Sweets",image : url[2],rating:"4.1",cuisines: ["sweet","snacks"]},
    {id : 4,name : "PizzaHut",image : url[3],rating:"4.5",cuisines: ["pizzas","burger"]},
    {id : 5,name : "PizzaHut",image : url[3],rating:"4.5",cuisines: ["pizzas","burger"]},
    {id : 6,name : "PizzaHut",image : url[3],rating:"4.5",cuisines: ["pizzas","burger"]}
]





const RestaurantCards = ({ name,image,rating,cuisines } ) =>{

    return  (
       <div className = "card">  
         <img src = {image} />
        <h2>{name}</h2>
        <h3>{cuisines.join(',')}</h3>  
        <h4>{rating} stars</h4>
        </div> 
    )
}


   


const Title = ()=> {
    return (
    <a href="/">
    <img 
    className = "logo"
    src = {Logo} 
    alt ="logo"
    />
    </a>
    
)}

const obj = {
    backgroundColor : "red"
}


const HeaderComponent = ()=>{
    return (
        <div className ="header">
           <h1><Title /></h1> 
            <div className = "nav-items">
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact Us</li>
                <li>Cart</li>
            </ul>
            </div>
            </div>
            )
        }

const BodyComponent =()=>{
    return(
        <div className = "body">
        
        {restaurantList.map((rest) =>  (<RestaurantCards {...rest}  key = {rest.id}/>))}
        
        
         
        </div>
    )
} 

const FooterComponent =()=>{ 
    return (
        <>
        <h2>Footer</h2>
        </>
    )

}

const AppLayout = () =>{
    return(
        <div>
        {/**
         * Header
         * Body
         *  - Search Bar
         *  - List of Restaurabnts 
         * Footer
         */}
        <HeaderComponent />
        <BodyComponent />
        <FooterComponent />
        </div>
    )
}

const root = createRoot(document.getElementById('root'))

root.render(<AppLayout/>)

//map is the best way to do functional programming
//we do not use for loop