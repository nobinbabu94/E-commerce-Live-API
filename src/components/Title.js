import { IMG_CDN } from "../constants";

const Title = () => {
    return (
        <div className="logo">
            <img width={'100%'} alt="Logo" src={ IMG_CDN} />
        </div>
    )
}

export default Title;