import React from 'react';
import  {createRoot}  from 'react-dom/client';
import Logo from './logo.png'; 
import Icon from './userIcon.png'; 

// const container = React.createElement('div',{
//     className : "title"
// },[
//     React.createElement('h1',{key : 1},"H1"),
//     React.createElement('h2',{key : 2},"H2"),
//     React.createElement('h3',{key : 3},"H3"),
// ])

// const TitleComponent = () =>{
//     return (
//     <div>
//         <h1 key ="1">Hello India</h1>
//         <h2 key ="2">Hello India2</h2>
//         <h3 key ="3">Hello India3</h3>
//     </div>
//     )
// }

// const ContainerComponent = () =>{
//     return (
//         <div className='title'>
//         {TitleComponent()}
//         <h1 key ="1">Hello World</h1>
//         <h2 key ="2">Hello World2</h2>
//         <h3 key ="3">Hello World3</h3>
//         </div>
//     );
// }
//Container I have implemented Composition of component that is nesting of component

// const root = createRoot(document.getElementById('root'));

// root.render(ContainerComponent())

/**
 * Create a Nested header Element using React.createElement(h1,h2,h3 inside a div with class “title”) -> Done
 * Create the same element using JSX -> Done
 * Create a functional component of the same with JSX -> Done
 * Pass attributes into the tag in JSX -> Done
 * Composition of Component(Add a component inside another)
 * {TitleComponent} vs {<TitleComponent/>} vs {<TitleComponent></TitleComponent>} in JSX
 **/

/**ASSIGNMENT 2
 * Create a Header Component from scratch using Functional Components with JSX
 * Add a Logo on left
 * Add a search bar in middle
 * Add User icon on right
 * Add CSS to make it look nice

 */

const HeaderComponent = ()=>{
    return(
        <div>

        <img src={Logo} id = "id" align = "left"/>
        <input type ="search" className ="displayed" />
        <button type= "submit">Submit</button>
        <img src = {Icon} className = "icon" align = "right"/>
           
        </div>
    )
}

const root = createRoot(document.getElementById('root'));

root.render(<HeaderComponent />);


