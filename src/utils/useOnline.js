import { useEffect, useState } from "react";


const useOnline = () => {

    const [online,setOnline] = useState(true)

    const isOnline = () =>{
        setOnline(true)
    }
    const IsOffline = () =>{
        setOnline(false)
    }

    useEffect(()=>{
        window.addEventListener('online',isOnline)
        window.addEventListener('offline',IsOffline)
     

        return ()=>{
           
            window.removeEventListener('online',isOnline)
            window.removeEventListener('offline',IsOffline)

        

        }
    })

    return online
}

export default useOnline;