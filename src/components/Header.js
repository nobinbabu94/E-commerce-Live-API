import { useState } from 'react'
import MenuItems from './MenuItems';
import Title from './Title';
import useOnline from '../utils/useOnline';

const Header = () => {
    const [loggedin, setLoggedin] = useState(true)

    const isOnline = useOnline()

    const logIn = () => {
        setLoggedin(false)
    }
    const logOut = () => {
        setLoggedin(true)
    }


    return (    
        <>
            <div className='flex bg-teal-800 justify-around items-center h-20 p-10 shadow-lg' >
                <Title />
                <MenuItems />
                {isOnline ? "" : "Offline🧡  "}
                <div className='Loginout'>
                    {loggedin === true ? <button className='text-white' onClick={logIn}>Login</button> : <button onClick={logOut}>Logout</button>}

                </div>
            </div>

        </>
    )
}

export default Header;