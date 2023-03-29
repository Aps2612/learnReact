import React from 'react'
import ReactDOM from 'react-dom/client'


const Heading =() => (
    <div id = "title" key="1">
    <h1>Hello World</h1>
    </div> 
)
const root = ReactDOM.createRoot(document.getElementById('root'))

// root.render(heading)

// console.log(heading);

//what are components

//what are functional components 
//functional components are js functions that returns some piece of JSX or createElement
const obj = [ 
    {key : 1,name : "ayush"},
    {key : 2,name : "anand"},
]

const HeaderComponent = () =>( 
     <>
     {<Heading></Heading>}
     
    <h1>Hi</h1>
    <h2>Pi</h2>
    </>
)

console.log(< HeaderComponent />)
root.render(< HeaderComponent />)

/**
 * Rules
 * GOOD PRACTICE - Use  Capiyal letter to start the name*  
 * 
 * Funtional components are normal functions that return some piece of JSX code
 * mandatory to wrap inside parenthesis for multiple lines of react code
 * 
 * functional components are normal js functions that returns some piece of JSX code 
 * <Title />
 * Inside our component {},we can write any piece of JavaScript code here
 * What is Component Composition
 * nested component or component inside component is component composition
 * passing inside a component
 * 
 */