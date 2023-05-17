import { useState } from 'react'

const Section = ({ title, description, visibleSec, setVisibleSec }) => {

<<<<<<< HEAD
=======
    // console.log(visibleSec)
    console.log(setVisibleSec,'setter')
    console.log(visibleSec,'visibleSec')
    console.log(!visibleSec,'not visibleSec')


>>>>>>> 04b0252172f2eace16a8cecea2fe0d797bebef0a
    return (

        <div className='border-2 border-zinc-500 m-2 p-2'>
            <h1 className="font-bold m-2">{title}</h1>

<<<<<<< HEAD
            {!visibleSec ? <button onClick={() => setVisibleSec()}
                className=" text-white bg-black rounded w-16 ">show</button> :
                <button
                    onClick={() => setVisibleSec()} className=" text-white bg-black rounded w-16 ">
                    hide
                </button>}

            {visibleSec === true ? <h5 className="m-2">{description}</h5> : ''}
            <h1>Heloo guys</h1>
=======
            {!visibleSec ? <button onClick={() => setVisibleSec(false)} className=" text-white bg-black rounded w-16 ">show</button> :
                <button onClick={() => setVisibleSec(true)} className=" text-white bg-black rounded w-16 ">hide</button>}

            {visibleSec === true ? <h5 className="m-2">{description}</h5> : ''}
>>>>>>> 04b0252172f2eace16a8cecea2fe0d797bebef0a
        </div>
    )
}


const Instamart = () => {
<<<<<<< HEAD
    const [visibleSec, setVisibleSec] = useState('about')

    console.log(visibleSec, 'after setter')
=======
    const [visibleSec, setVisibleSec] = useState('')

    console.log(visibleSec,'after setter')
>>>>>>> 04b0252172f2eace16a8cecea2fe0d797bebef0a


    return (
        <div className="p-5 ">
<<<<<<< HEAD
            <h1>Chunking </h1>
=======
            <h1>Chunking</h1>
>>>>>>> 04b0252172f2eace16a8cecea2fe0d797bebef0a

            <Section title={"About"}
                description={'About descriptions Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book'}
                visibleSec={visibleSec === 'about'}
                setVisibleSec={() => setVisibleSec(visibleSec === 'about' ? 0 : 'about')}
            />

            <Section title={"Team"}
                description={'team descriptions Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book'}
                visibleSec={visibleSec === 'team'}
                setVisibleSec={() => setVisibleSec(visibleSec === 'team' ? "" : 'team')}

            />

            <Section title={"Career"}
                description={'Career descriptions Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book'}
                visibleSec={visibleSec === 'career'}
<<<<<<< HEAD
                setVisibleSec={() => setVisibleSec(visibleSec === 'career' ? "" : 'career' )}
=======
                setVisibleSec={() => setVisibleSec(visibleSec === 'career' ? "" : 'career')}
>>>>>>> 04b0252172f2eace16a8cecea2fe0d797bebef0a

            />



        </div>
    )
}

export default Instamart;