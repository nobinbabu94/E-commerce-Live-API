import {useState} from 'react'
import MenuItems from './MenuItems';
import Title from './Title';
import useOnline from '../utils/useOnline';

const Header = () => {
    const [loggedin, setLoggedin] = useState(true)

    const isOnline = useOnline()

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
                <div>{isOnline }</div>
                <div className='Loginout'>
                    {loggedin === true ? <button onClick={logIn}>Login</button> : <button onClick={logOut}>Logout</button>}
                    
                </div>
            </div>

        </>
    )
}

export default Header;