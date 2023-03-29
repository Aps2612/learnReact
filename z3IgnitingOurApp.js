import React from 'react';
import ReactDOM  from 'react-dom/client';

//why it will give error at first  place 
//because it was not reading import
//because we were not using type="module" 
//using that will make it as a module

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



  /**
   * 
   * If someone asks me How do you build a production ready app
   * We use bundlers for that purpose 
   * Our React uses webpackage bundler for this purpose
   * 
   * PARCEL
   * Created a server for me 1234//localhost
   * -HMR - HOT Module Replacement
   * File watcher Algorithm - C++
   * BUNDLING
   * MINIFY
   * CLEANING THE CODE
   * manages DEV and Production field 
   * Super Fast
   * biggest difficulty parcel faces is that with respect to images.They are large files
   * Parcel does image optimization
   * Parcel also does caching while development
   * It also does compression
   * makes our code compatible with older versions of browser
   * It adds polyfills
   * HTTPS On Development build 
   * How to do that - npx parcel index.html --https
   * 
   * Should I kepp my parcel-cache in .gitignore?
   * Yes anything that is auto generated on server is pushed inside our gitignore 
   * 
   * What is TRANSITIVE DEPENDENCIES
   * chain of dependencies that make our app are transitive dependency
   * 
   * why is React fatser 
   * 1.One is that it uses virtual dom
   * 2.It uses bundler,basically webpackage 
   * 3.transitive dependencies
   * 
   * PARTIAL IS A ZERO CONFIG BUNDLER
   * we do not require anything else and hence it is a zero config builder
   */
  
  /**
   * whenever we are saving the page it automatically reloads
   * Who is doing it ? Parcel
   * What is this functionality called ?  Hot Module Reloading 
   * How does HMR Work - File Watcher Algorithm(C++  )
   * 
   * what will happen if i write npx parcel index.html
   * this is a development build
   * local server will do the work
   * parcel-cache create hoga
   * dist folder create hoga is folder me wo saare code hain jo website ko minify ,console ko remove aur different things that helps our website become production ready
   * 
   *
   * what will happen if i write npx parcel build index.html
   * this is a production build
   * 1. agar maine entry pint index.html kiya hai ya kuch ni kiya hai define to chalega aur producton ready o jayega mera code
   * Production ke liye ready ke liye ye saare code ko teen file me le lega
   * html,css,and js to ye bundle kar diya saare files ko 3file me so in way it minified our files
   * siliye parcel bundler kehlata hai
   * compress kar dega go and see in dist folder U wii understand
   * 
   * 2. Nahi to error dega aur package.json se hatana padega
   * 
   * does nodemodule goes into our production?
   * No it is present at server side and server uses code from that
   * 
   * what is Browser List ?
   * Itis folder in node modules and it will make my code compatible for different browsers 
   * 
   * Parcel also does TREE SHAKING
   * TREE SHAKING means removing unwanted code
   * 
   * 

  **/


  /**
   * sUPERPOWERS OF PARCEL
   * 
   * Parcel is a bundler that bundles our whole code in three files,html,css,js
   * it minifies our code
   * It bundels our code in three files html css and js
   * it makes oyur code faster
   * It makes ou app development and produnction ready
   * 1. npx parcel index.html
   * 2.npx parcel build index.html
   * it optimises our image
   * it cleans the code removes the condole.log
   * it compresses our code
   * it makes our code compatible with different browser
   * Babel is a transpiler it uses to convert our code to make it compatinble with different browsers
   * Babel contains Browser List(it is present in package.json) which defines on which browsers do we require our code to run 
   * How does it do it?
   * It uses polyfills which basically write a replacement code for our newer features ,for e.g.like how we write polyfiils for map,filter,reduce
   * It also does caching which makes our website faster on development environment
   * It uses HMR which is Hot Module Replacement which enables live reloading of our code
   * whih algorithm does HMR USES - File Watcher Algorithm(written in C++)

   */

  
  















// const heading = React.createElement('h1',{
//      title : "aps"
// },[childrens])

//second paramtetre jo hota hai wo attribute hota hai
//ye hum react se apne html ko pass karte hain
//React me hum ise props kehte hai
//ye properties hoti hai hamare element ki jo ki hum banate hain

//third parameter jo hota hai wo childrens hote hain
//ek fragment ke andar jitne bhi html display karan eho hum aise hi pass karte hain

