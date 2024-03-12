import logo from '../../assets/img/logo.png'
import { SearchOutlined, BellOutlined } from '@ant-design/icons';
import { Input, Tooltip, Button, Badge, Dropdown } from 'antd';
// import './navbar.scss'
import { useRef, useState, useEffect } from 'react';
import Noti from './notification_nav.jsx';
import Support from './support_nav.jsx';
import Profile from './profile_nav.jsx';

function Navbar() {

    const [isOpen, setIsOpen] = useState(false)
    const ref = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (ref.current && !ref.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [ref]);


    return (
        <>
            <div className="navbar-m flex items-center px-7">
                <div className="flex items-center navbar-left">
                    <a href="#">
                        <img className='img-nav' src={logo} alt="" loading='lazy' style={{ color: "transparent" }} />
                    </a>
                </div>
                <div className="flex ml-3 gap-x-3 ">

                    {/* <div className={`input-search-container cursor-pointer transition-all border-none w-8`}>
                            <Input className='p-0 border-none' placeholder="Tìm kiếm" prefix={<SearchOutlined style={{ fontSize: isOpen ? "16px" : "20px" }} className='input-icon border-none bg-inherit h-8 p-3' />} />
                        </div> */}

                    <div ref={ref} className={`input-search-container cursor-pointer transition-all border-none ${isOpen ? 'w-[500px]' : 'w-8'}`} onClick={() => setIsOpen(true)}>
                        <Input className='p-0 border-none' placeholder="Tìm kiếm" prefix={<SearchOutlined style={{ fontSize: isOpen ? "16px" : "20px" }} className='input-icon border-none bg-inherit h-8 p-3' />} />
                    </div>

                    <Tooltip title="Hướng dẫn" className='border-none' placement='bottom'>
                        <Button shape="circle" className='shadow-none p-0'>
                            <svg width={30} height={30} viewBox="0 0 24.00 24.00" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#000000" strokeWidth="1">
                                <path d="M3.84299 8.12534L11.1877 4.86101C11.7049 4.63118 12.2951 4.63118 12.8123 4.86101L20.157 8.12534C20.4817 8.26962 20.4817 8.73038 20.157 8.87466L12.8123 12.139C12.2951 12.3688 11.7049 12.3688 11.1877 12.139L3.84299 8.87466C3.51835 8.73038 3.51835 8.26962 3.84299 8.12534Z" stroke="#242424" strokeWidth="1"></path>
                                <path d="M20.5 8.5V12.5" stroke="#242424" strokeWidth="1"></path>
                                <path d="M6.5 10.5V15.5C6.5 15.5 7 17.5 12 17.5C17 17.5 17.5 15.5 17.5 15.5V10.5" stroke="#242424" strokeWidth="1"></path>
                            </svg>
                        </Button>
                    </Tooltip>
                    <Noti />
                    <Support />
                    <Profile />

                </div>
            </div>
        </>
    )
}

export default Navbar;