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
    )
}

export default Contact;