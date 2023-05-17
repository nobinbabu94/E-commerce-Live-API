<<<<<<< HEAD
import { useContext, useState } from 'react'
import MenuItems from './MenuItems';
import Title from './Title';
import useOnline from '../utils/useOnline';
import { userContext } from '../utils/userContext';
import {Link}from 'react-router-dom'

=======
import { useState } from 'react'
import MenuItems from './MenuItems';
import Title from './Title';
import useOnline from '../utils/useOnline';
>>>>>>> 04b0252172f2eace16a8cecea2fe0d797bebef0a

const Header = () => {
    const [loggedin, setLoggedin] = useState(true)

    const isOnline = useOnline()
<<<<<<< HEAD
    const {user } = useContext(userContext)

=======
>>>>>>> 04b0252172f2eace16a8cecea2fe0d797bebef0a

    const logIn = () => {
        setLoggedin(false)
    }
    const logOut = () => {
        setLoggedin(true)
    }


    return (    
        <>
            <div className='md:flex sm:justify-center bg-teal-800 md:justify-around items-center p-2 ' >
<<<<<<< HEAD
                <Title />  
                <MenuItems />
                
=======
                <Title />
                <MenuItems />
>>>>>>> 04b0252172f2eace16a8cecea2fe0d797bebef0a
                {isOnline ? "" : <h5 className='text-white'>Offline🧡 </h5>}
                <div className='text-white flex justify-around m-5'>
                    {loggedin === true ? <button onClick={logIn}>Login</button> : <button onClick={logOut}>Logout</button>}

                </div>
            </div>

        </>
    )
}

export default Header;