<<<<<<< HEAD
import { useState, useContext } from 'react'
import Profile from './Profile'
import useAbc from '../utils/useAbc.js'
import { userContext } from '../utils/userContext'

const Contact = () => {

    const [count, setCount] = useState(0)
    const [abc, setAbc] = useAbc()
    const [email, setEmail] = useState('')
    const {user,setUser } = useContext(userContext)


    console.log(user , 'context')

    return (
        <div className='p-2'>

            <input value={email} onChange={e => setEmail(e.target.value)} />
            <h1>{email ? email : 'gmail.com'}</h1>
            {/* <button onClick={()=>setAbc('hello')}>+</button> */}
            <h1>{user}</h1>
            <input value={user} onChange={e => setUser(e.target.value)} />
            
            <ol className="list-disc list-inside">
                <li>hello</li>
                <li>hello</li>
            </ol>
            <ul className='list-decimal list-inside'>
                <li>Hello ul</li> 
            </ul>

          
        </div >
=======
import {useState} from 'react'
import Profile from './Profile'
import useAbc from '../utils/useAbc.js'

const Contact = () => {

    const [count,setCount] = useState(0) 
    const [abc,setAbc] = useAbc()

    console.log('render')

    return (
        <>
            <h1>{abc}</h1>
            
            <button onClick={()=>setAbc('hello')}>+</button>
       
        </>
>>>>>>> 04b0252172f2eace16a8cecea2fe0d797bebef0a
    )
}

export default Contact;