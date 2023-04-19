import { useEffect, useState } from 'react'

const Contact = () => {

    const [count, setCount] = useState(55)
    const [timeout, setTimeout] = useState(2)
    console.log('render')

    useEffect(() => {
        let timeoutCount = setInterval(() => {
            setCount(count + 1)
            console.log('hello')
        }, 1000);
  
        return () => clearInterval(timeoutCount)
    })
    if (count === 60) {
        setCount(0)
        setTimeout(timeout - 1)
    }
    



    return (
        <>
            <h1>{count}</h1>
            <h3>{timeout}</h3>
            <button onClick={() => setCount(count + 1)}>+</button>
            <h3></h3>
        </>
    )
}

export default Contact;