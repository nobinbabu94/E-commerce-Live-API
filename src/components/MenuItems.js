import { Link } from "react-router-dom"

const MenuItems = () => {
    return (
        <>
        
            <ul className="flex justify-around gap-4 m-5" >
                <Link to='/' className='text-white '><li>Home</li></Link> 
                <Link to='/about' className='text-white'><li >About</li></Link> 
                <Link to='/contactus' className='text-white text-center'><li>Contact us</li></Link>
                <Link to='/instamart' className='text-white'><li>Instamart</li></Link>
            </ul>
        </>
    )
} 
export default MenuItems