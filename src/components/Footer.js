import { useContext } from "react";
import { userContext } from "../utils/userContext";

const Footer = () =>{

    const {user } = useContext(userContext)

    return(
        <div className="bg-teal-800 h-20 flex justify-center items-center text-white">
<<<<<<< HEAD
               
        <h1 className="text-white"> {user }</h1>
  
=======
>>>>>>> 04b0252172f2eace16a8cecea2fe0d797bebef0a
        <h1 className="font-bold text-xl">Footer</h1>
        </div>
    )
}

export default Footer;