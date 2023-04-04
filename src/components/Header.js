import {useState} from 'react'
import MenuItems from './MenuItems';
import Title from './Title';

const Header = () => {
    const [abc, setAbc] = useState('ture')
    return (
        <>
            <div className="header">
                <Title />
                <MenuItems />
            </div>

        </>
    )
}

export default Header;