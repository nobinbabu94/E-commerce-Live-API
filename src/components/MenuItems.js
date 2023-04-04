import { Link } from "react-router-dom"

const MenuItems = () => {
    return (
        <>
            <ul className="menus">
                <Link to='/' style={{ textDecoration: 'none',color:'white' }}><li>Home</li></Link> 
                <Link to='/about' style={{ textDecoration: 'none',color:'white' }}><li >About</li></Link> 
                <Link to='/contactus' style={{ textDecoration: 'none',color:'white' }}><li>Contact us</li></Link>
            </ul>
        </>
    )
}
export default MenuItems