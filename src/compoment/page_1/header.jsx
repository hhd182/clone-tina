import logo from '../../assets/img/logo.png'
import apple from '../../assets/img/applestore.png'
import chplay from '../../assets/img/chplay.png'
import flagvn from '../../assets/img/vietnam_flags.png'
import flagus from '../../assets/img/us_flags.png'
import flagchina from '../../assets/img/china_flags.png'
import './header.scss'
import './main.scss'
import { Dropdown, Space } from 'antd';
const items = [
    {
        key: '1',
        label: (
            <a className='row height-center' target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                <img src={flagus} alt="" />
                <p className='ml-10'>English</p>
            </a>
        ),
    },
    {
        key: '2',
        label: (
            <a className='row height-center' target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
                <img src={flagvn} alt="" />
                <p className='ml-10'>Tiếng Việt</p>
            </a>
        ),
    },
    {
        key: '3',
        label: (
            <a className='row height-center' target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
                <img src={flagchina} alt="" />
                <p className='ml-10'>中国人</p>
            </a>
        ),
    },
];


function Header() {
    return (
        <div id='header'>
            <div className="navbar">
                <div className="navbar-container ">
                    <a className='ml-6' href="#">
                        <img className="logo" src={logo} alt="" />
                    </a>
                    <div>
                        <div className="flex ">
                            <div className="flex item-center">
                                <div className='flex button-container'>
                                    <a href="https://apps.apple.com/us/app/tinamys/id6449159582" target="_blank ">
                                        <img className='button-img item-center flex' src={apple} alt="" />
                                    </a>
                                    <a href="https://play.google.com/store/apps/details?id=com.tinasoft.mys&pli=1" target="_blank ">
                                        <img className='button-img item-center flex' src={chplay} alt="" />
                                    </a>
                                </div>
                                <a href="/login" className='button-img height-center text-center br-button text-button'>
                                    Trải nghiệm
                                </a>

                                <div className="flex item-center">
                                    <svg width="16" height="16" viewBox="0 0 23 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.9586 5.25C14.9354 5.44057 15.833 5.91826 16.5367 6.62194C17.2404 7.32561 17.7181 8.22326 17.9086 9.2M13.9586 1.25C15.9879 1.47544 17.8802 2.38417 19.3249 3.82701C20.7695 5.26984 21.6806 7.16101 21.9086 9.19M20.9086 17.17V20.17C20.9098 20.4485 20.8527 20.7242 20.7411 20.9793C20.6296 21.2345 20.4659 21.4636 20.2607 21.6519C20.0555 21.8401 19.8132 21.9835 19.5494 22.0727C19.2855 22.1619 19.006 22.1951 18.7286 22.17C15.6515 21.8356 12.6956 20.7841 10.0986 19.1C7.68245 17.5647 5.63396 15.5162 4.09862 13.1C2.4086 10.4912 1.35687 7.52099 1.02862 4.43C1.00364 4.15347 1.0365 3.87476 1.12512 3.61162C1.21375 3.34849 1.3562 3.10669 1.54339 2.90162C1.73059 2.69655 1.95843 2.53271 2.21242 2.42052C2.4664 2.30833 2.74097 2.25026 3.01862 2.25H6.01862C6.50393 2.24522 6.97442 2.41708 7.34239 2.73353C7.71036 3.04999 7.9507 3.48945 8.01862 3.97C8.14525 4.93007 8.38007 5.87273 8.71863 6.78C8.85317 7.13792 8.88229 7.52691 8.80253 7.90088C8.72278 8.27485 8.53749 8.61811 8.26862 8.89L6.99862 10.16C8.42218 12.6635 10.4951 14.7364 12.9986 16.16L14.2686 14.89C14.5405 14.6211 14.8838 14.4358 15.2577 14.3561C15.6317 14.2763 16.0207 14.3055 16.3786 14.44C17.2859 14.7786 18.2286 15.0134 19.1886 15.14C19.6744 15.2085 20.118 15.4532 20.4352 15.8275C20.7523 16.2018 20.9208 16.6796 20.9086 17.17Z" stroke="#447EFC"></path></svg>
                                    <div className="flex flex-col ml-2 text-contact">
                                        <p>Liên hệ với chúng tôi</p>
                                        <p>+(84) 246 329 5589</p>
                                    </div>
                                    <Dropdown
                                        menu={{
                                            items,
                                        }}
                                    >
                                        <a onClick={(e) => e.preventDefault()}>
                                            <Space>
                                                <img className="flag-main ml-6" src={flagvn} alt="" />
                                            </Space>
                                        </a>
                                    </Dropdown>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;