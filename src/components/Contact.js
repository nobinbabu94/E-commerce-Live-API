import {useState} from 'react'

const Contact = () => {

    const [count,setCount] = useState(0)
    console.log('render')

    return (
        <>
            <h1>{count}</h1>
            <button onClick={()=>setCount(count+1)}>+</button>
        </>
    )
}

export default Contact;