import { useRouteError } from "react-router-dom"

const Error = () =>{
    const errorMessage = useRouteError()

    console.log(errorMessage)
    return(
        <>
        <h3>{errorMessage.status+""+errorMessage.statusText}</h3>
        </>
    )
}

export default Error