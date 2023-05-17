import { useRouteError } from "react-router-dom"

const Error = () =>{
    const errorMessage = useRouteError()

    console.log(errorMessage.data)
    return(
        <div className="h-96 p-80 flex-col">
        <h3 className="font-bold text-4xl flex justify-center item-center">{errorMessage.status+" "+errorMessage.statusText}</h3>
        <h3 className="font-bold text-4xl flex justify-center item-center">{errorMessage.data}</h3>
        
        </div>
    )
}

export default Error