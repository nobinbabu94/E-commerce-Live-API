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
            <div className='md:flex sm:justify-center bg-teal-800 md:justify-around items-center p-2 ' >
                <Title />
                <MenuItems />
                {isOnline ? "" : <h5 className='text-white'>Offline🧡 </h5>}
                <div className='text-white flex justify-around m-5'>
                    {loggedin === true ? <button onClick={logIn}>Login</button> : <button onClick={logOut}>Logout</button>}

                </div>
            </div>

        </>
    )
}

export default Header;