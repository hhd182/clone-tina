import './footer.scss'
import footer_1 from '../../assets/img/footer-shape-1.fcf37f00.png'
import footer_2 from '../../assets/img/footer-shape-2.e79c086e.png'
import footer_3 from '../../assets/img/footer-shape-3.6a2740c0.png'
import logo from '../../assets/img/logo.png'
import apple from '../../assets/img/apple.png'
import chplay from '../../assets/img/gg-play.png'
import { Button } from 'antd';


const Footer = () => {
    return (
        <>
            <footer className="footer relative mt-12">
                <svg width="100%" height="100%" className="absolute top-[-48%] right-[-5%] left-[-4%] z-0 w-[24%]" viewBox="0 0 338 338" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="168.891" cy="168.685" r="168.574" fill="#ffffff1a">
                    </circle>
                </svg>
                <div className="footer-container pt-20 overflow-hidden">
                    <div className="footer-content flex relative pb-6 px-14">
                        <div className="w-fit">
                            <img className='absolute w-[5%] left-[8%] top-[65%] z-10' src={footer_1} alt="" style={{
                                color: "transparent",
                                height: "auto"
                            }} width="67" height="68" loading='lazy' />
                        </div>
                        <div className='w-fit'>
                            <img className='absolute w-[10%] right-[8%] top-[-20%] rounded-full z-10 ' src={footer_2} alt="" style={{
                                color: "transparent",
                                width: "auto",
                                height: "auto",
                                maxWidth: "166px",
                            }} width="166" height="166" loading='lazy' />
                        </div>
                        <div className='w-fit'>
                            <img className='absolute w-[10%] right-[5%] bottom-[12%] z-10 ' src={footer_3} alt="" style={{
                                color: "transparent",
                                width: "auto",
                                height: "auto",
                                maxWidth: "166px"
                            }} width="166" height="166" loading='lazy' />
                        </div>
                        <div className="text-content-f contact pb-7">
                            <a href="#">
                                <img className='pt-2 pb-2' src={logo} alt="" width={160} height={115} />
                            </a>
                            <div className='flex flex-col items-start max-w-[19rem] text-white'>
                                <a className="cursor-pointer" href="https://mail.google.com/mail/?view=cm&amp;fs=1&amp;to=contact@tinasoft.vn" target="_blank" rel="noreferrer">
                                    Email:
                                    <span>contact@tinasoft.vn</span>
                                </a>
                                <a href="tel:+(84) 246 329 5589">
                                    Số điện thoại:
                                    <span>+(84) 246 329 5589</span>
                                </a>
                                <p className="cursor-text text-white">
                                    Địa chỉ văn phòng:
                                    <span className='text-white'> Tầng 4, Tòa nhà Ellipse Tower, 110 Trần Phú, Hà Đông, Hà Nội</span>
                                </p>
                            </div>
                        </div>
                        <div className="product-services pt-6 pb-7">
                            <div className="flex justify-start gap-0">
                                <div className="w-full">
                                    <h3 className="text-white text-2xl pb-8 title">
                                        About MYS
                                    </h3>
                                    <ul className="grid">
                                        <li>
                                            <a href="">
                                                <p className="opacity-[0.85] hover:opacity-100 text-white text-base font-normal leading-6">Giới thiệu</p>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="">
                                                <p className="opacity-[0.85] hover:opacity-100 text-white text-base font-normal leading-6">Tính năng</p>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="w-full">
                                    <h3 className="text-white text-2xl pb-8 title">
                                        Solution
                                    </h3>
                                    <ul className="grid">
                                        <li>
                                            <a href="">
                                                <p className="opacity-[0.85] hover:opacity-100 text-white text-base font-normal leading-6">Đăng ký dùng thử</p>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="">
                                                <p className="opacity-[0.85] hover:opacity-100 text-white text-base font-normal leading-6">FAQs</p>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="">
                                                <p className="opacity-[0.85] hover:opacity-100 text-white text-base font-normal leading-6">Help Center</p>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="dowloadapp pt-5 pb-7">
                            <h3 className=' title text-white text-2xl pb-8 '>
                                Trải nghiệm ứng dụng!
                            </h3>
                            <div className="flex flex-col gap-5">
                                <Button type="primary" className='flex items-center text-center btn-store'>
                                    <img className='pr-3' src={apple} alt="" width={25} height={25} loading='lazy' />
                                    <span>App Store</span>
                                </Button>

                                <Button type="primary" className='flex items-center text-center btn-store'>
                                    <img className='pr-3' src={chplay} alt="" width={25} height={25} />
                                    <span>Play Store</span>
                                </Button>
                            </div>
                        </div>

                    </div>
                    <div className="w-10/12 mx-auto opacity-30 line"></div>
                    <div className="flex justify-between mx-auto w-10/12  py-6">
                        <a href="https://tinasoft.vn/vi/" className="opacity-80 hover:opacity-100 text-white" target="_blank ">
                            © 2023 TINASOFT VIỆT NAM
                        </a>
                        <div className="flex items-center">
                            <p className="opacity-[0.84] hover:opacity-100 text-white">Privacy Policy</p>
                            <svg width="6px" height="100%" className="mx-6" viewBox="0 0 338 338" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="168.891" cy="168.685" r="168.574" fill="#2B59FF"></circle>
                            </svg>
                            <p className="opacity-[0.84] hover:opacity-100 text-white">Refund Policy</p>
                        </div>
                    </div>
                </div>
            </footer >
        </>
    )
}

export default Footer;