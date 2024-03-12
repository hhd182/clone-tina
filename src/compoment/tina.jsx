import Navbar from './tina/navbar.jsx'
import Sidebar from './tina/sidebar.jsx';
import MainContent from './tina/main_conten.jsx';
import './tina/tina.scss'
import { useState } from 'react';


function Tina() {
    const [collapsed, setCollapsed] = useState(false);
    return (
        <>
            <div className="sticky">
                <Navbar />
            </div>
            <div className='flex'>
                <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />
                <MainContent collapsed={collapsed} />
            </div>
        </>
    )
}

export default Tina;