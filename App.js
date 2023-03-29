import React from 'react'
import ReactDOM from 'react-dom/client'


const Heading =() => (
    <div id = "title" key="1">
    <h1>Hello World</h1>
    </div> 
)
const root = ReactDOM.createRoot(document.getElementById('root'))

const HeaderComponent = () =>( 
    <>
    {<Heading></Heading>}
    
   <h1>Hi</h1>
   <h2>Pi</h2>
   </>
)

console.log(< HeaderComponent />)
root.render(< HeaderComponent />)