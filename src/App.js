// import * as Obj from 'react';
import {createRoot} from 'react-dom/client';
import Header  from './components/Header';
import Body from './components/Body'
import {Footer} from './components/Footer'

const AppLayout = ()=>{
    return(
        <>
        <Header />
        <Body/> 
        <Footer />
        </>
    )
}


const root = createRoot(document.getElementById('root'));
root.render(<AppLayout/>)


//Reconciliation is a proceess which uses diffing algorithm to compare twon tress and determines which nodes got updated and only rerenders those nodes

