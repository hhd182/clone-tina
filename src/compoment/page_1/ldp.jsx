import { StarOutlined, MailOutlined, ArrowUpOutlined } from '@ant-design/icons'
import { useState, useEffect } from 'react';
import './ldp.scss'

function scrollTo(location) {

    const headerElement = document.getElementById(location);
    if (headerElement) {
        headerElement.scrollIntoView({ behavior: 'smooth' });
    }
}


function LDP() {
    const [showButton, setShowButton] = useState(false)
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        < div className='group-fab-ldp' >
            <button className='btn-fab' onClick={() => scrollTo('benefit')}>
                <span className='title'>Ưu điểm</span>
                <StarOutlined className='icon-fab' />
            </button>

            <button className='btn-fab' onClick={() => scrollTo('contact')}>
                <span className='title'>Liên hệ</span>
                <span>
                    <MailOutlined className='icon-fab' />
                </span>
            </button>

            {showButton && (<button className='btn-fab' onClick={() => scrollTo('top-page')}>
                <span className='title'>Đầu trang</span>
                <span>
                    <ArrowUpOutlined className='icon-fab' />
                </span>
            </button>)}
        </ div>
    )
}
// eslint-disable-next-line react-refresh/only-export-components
export default LDP;