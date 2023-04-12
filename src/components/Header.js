import {useState} from 'react'
import MenuItems from './MenuItems';
import Title from './Title';

const Header = () => {
    const [loggedin, setLoggedin] = useState(true)

    const logIn = () =>{
        setLoggedin(false)
    }
    const logOut = () =>{
        setLoggedin(true)
    }


    return (
        <>
            <div className="header">
                <Title />
                <MenuItems />
                <div className='Loginout'>
                    {loggedin === true ? <button onClick={logIn}>Login</button> : <button onClick={logOut}>Logout</button>}
                    
                </div>
            </div>

        </>
    )
}

export default Header;