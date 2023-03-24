





const heading1 = React.createElement('h1',{
    key : 1,
    id : "title" 
 },"papa")

 const heading2 = React.createElement('h1',{
     key : 2,
    id : "title2" 
 },"mummy")
 //heading is a react element
 //and what is a react element => Object
 //so basically heading is a object
 
 
 
 const root = ReactDOM.createRoot(document.getElementById('root'));

 const container = React.createElement('div',
 {     
 
 },[heading1,heading2])
 
 console.log(container)
 
 root.render(container); 
 
 //what is root rendering here
 //it is rendering an element of react which is an object
 //WHAT DOES RENDER DOES ?
 //it takes the react element and injects it in our DOM
 //it will override  the content of code with the value we pass here in render 
 //<h1 id = "title">Not Rendered</h1>
 //above is GOOD PRACTICE TO DEAL WITH ISSUE WHEN WE ARE NOT ABLE TO GET THE REACT 
 
 