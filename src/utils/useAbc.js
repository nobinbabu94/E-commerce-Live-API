import {useState} from 'react'

const useAbc = () =>{
    const [abc,setAbc] = useState('hi')

    return [abc,setAbc]
}

export default useAbc;