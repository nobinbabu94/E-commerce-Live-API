import React, { createElement } from "react";
import ReactDOM, { createRoot } from 'react-dom/client'

const Apps = () =>(

    <h1>Hello Nobin </h1>
) 


const root = createRoot(document.getElementById("root"))

root.render(<Apps/>)