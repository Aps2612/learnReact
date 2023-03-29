//how can i USE JS TO MANIPULATE THE DOM

// const input = document.createElement('input');

// input.placeholder = "Hello World"

// document.getElementById('root').appendChild(input)



////////////////////////////////
//USE REACT TOMANIPULATE THE DOM

//1.USED CDN LINKS
//2.CREATE AN REACT

const heading1 = React.createElement('h1',
{
   title : "aps"
},"hello world")

const heading2 = React.createElement('h1',
{
   title : "aps"
},"hello world2")

const heading3=  React.createElement('button',
{
   type : "submit",
   hello : "works"
},"Submit")

const container = React.createElement('div',{

},[heading1,heading2,heading3])

const root = ReactDOM.createRoot(document.getElementById('root'));

// console.log(root)

root.render(container)


//create element takes first argument as Tag,second element as attributes and third element as children

// const heading = React.createElement('h1',{
//      title :  "hi"
// },"hello")


// const root1 = ReactDOM.createRoot(document.getElementById('root'));

// root1.render(container)
