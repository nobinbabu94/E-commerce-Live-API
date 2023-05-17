import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import store from "../utils/store"

const MenuItems = () => {

    const cartItems = useSelector(store=>store.cart.items)

    return (
        <>
        
            <ul className="flex justify-around gap-4 m-5" >
                <Link to='/' className='text-white '><li>Home</li></Link> 
                <Link to='/about' className='text-white'><li >About</li></Link> 
                <Link to='/contactus' className='text-white text-center'><li>Contact us</li></Link>
                <Link to='/instamart' className='text-white'><li>Instamart</li></Link>
<<<<<<< HEAD
                <Link to='/cart' className='text-white'><h1 >Cart({cartItems.length})</h1></Link> 
=======
>>>>>>> 04b0252172f2eace16a8cecea2fe0d797bebef0a
            </ul>
        </>
    )
} 
export default MenuItems