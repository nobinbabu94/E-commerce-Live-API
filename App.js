import React, { createElement } from "react";
import ReactDOM, { createRoot } from 'react-dom/client'



const NewComponent = (props) =>{
    console.log(props)
   return(
    
    <>
    <h1>{props.hello}</h1>
    </>
   )
}

const Apps = () =>(

   <React.Fragment>
    <NewComponent hello={"hello"} />
    
   </React.Fragment>
) 


const root = createRoot(document.getElementById("root"))

root.render(<Apps/>)