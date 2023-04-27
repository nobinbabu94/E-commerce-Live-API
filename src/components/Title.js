import { IMG_CDN } from "../constants";

const Title = () => {


    return (
        <div className='flex justify-around '>
            <a href="/" >
                <img width={50} alt="Logo" src={IMG_CDN} />

            </a>
        </div>
    )
}

export default Title;