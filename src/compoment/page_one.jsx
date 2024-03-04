/* eslint-disable react/no-unescaped-entities */
import './page_1/main.scss'
import './page_1/page_one.scss'
import Header from './page_1/header.jsx'
import Benefit from './page_1/benefit.jsx'
import { Collapse_1, Collapse_2, Collapse_3, Collapse_4 } from './page_1/collapse.jsx'
import { CenterMode } from './page_1/slider.jsx'
import Form_1 from './page_1/form.jsx'
import Footer from './page_1/footer.jsx'
import LDP from './page_1/ldp.jsx'
import pictureOne from "../assets/img/image-section-one.png"
import pictureTwo from "../assets/img/image-section-two.png"
import pictureThree from "../assets/img/image-section-three.png"
import pictureFour from "../assets/img/image-section-four.png"
import pictureFive from "../assets/img/image-section-five.png"
import iphone_7 from '../assets/img/iPhone-7.png'
import apple from '../assets/img/applestore.png'
import chplay from '../assets/img/chplay.png'
import backgroundNight from '../assets/img/background-night.png'
import iconBackgroundTen from '../assets/img/icon-bg-ten.89fbfafa.png'
import imgEle from '../assets/img/main-image-ele.png'
import { CheckCircleFilled, DownloadOutlined, CheckOutlined, StarFilled, } from '@ant-design/icons'

function Selection() {
    return (
        <>
            <div id='top-page' className="max-h-0"></div>
            <Header />
            <section className='section-one realative max-w-[112rem] mt-16'>
                <div className="section-one-container py-16 px-6">
                    <div className="flex item-center flex-col">
                        <h1 className="relative font-jakarta text-50 font-weight-normal">
                            <span className="relative">
                                Thay
                                <div className="absolute -top-5 -left-8 w-full h-full max-w-fit">
                                    <svg width="80%" height="80%" viewBox="0 0 62 67" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path className="lineCircle" strokeWidth="1.69062" strokeLinecap="round" d="M20.694 62.3197C14.8739 60.6864 8.7803 59.8625 2.86918 59.1077C1.59601 58.9495 0.413967 59.8326 0.323026 61.0766C0.141145 62.3216 1.05108 63.4601 2.2333 63.6183C7.96255 64.3449 13.8731 65.1226 19.4206 66.6949C20.6028 67.0358 21.8765 66.3339 22.2402 65.1262C22.6039 63.9194 21.8762 62.6616 20.694 62.3197Z" stroke="#FF5F55" />
                                        <path className="lineCircle" strokeWidth="1.69062" strokeLinecap="round" d="M38.3352 39.1642C28.9683 29.6055 18.4193 21.2772 9.23422 11.462C8.41575 10.5453 6.9607 10.4962 6.0513 11.352C5.14189 12.2086 5.05131 13.6491 5.96071 14.5658C15.1457 24.4091 25.6948 32.7648 35.0617 42.3518C35.9712 43.2466 37.4258 43.2593 38.3352 42.3789C39.1537 41.4996 39.2446 40.0592 38.3352 39.1642Z" stroke="#FF5F55" />
                                        <path className="lineCircle" strokeWidth="1.69062" strokeLinecap="round" d="M55.8886 2.39698C56.1614 7.86795 56.4336 13.3389 56.7065 18.8108C56.7065 20.064 57.7983 21.0316 59.0715 20.9706C60.3446 20.9088 61.2535 19.8421 61.2535 18.588C60.9807 13.1079 60.7083 7.62877 60.4356 2.14962C60.3446 0.896452 59.2532 -0.0647889 57.9801 0.00341648C56.7977 0.0716218 55.7976 1.14472 55.8886 2.39698Z" stroke="#FF5F55" />
                                    </svg>
                                </div></span>
                            đổi cách quản lý công việc
                        </h1>
                        <h1 className='relative font-jakarta text-60 font-bold'>
                            Mapping Your
                            <span className='relative'>
                                Success
                                <div className='absolute w-full h-full' style={{
                                    top: "0",
                                    left: "0"
                                }}>
                                    <svg width="110%" height="110%" viewBox="0 0 296 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path className="lineCircle" d="M123.477 56.5914C47.3723 64.5971 -12.4993 43.7699 4.85737 27.8086C26.5533 7.85694 230.104 -10.2483 280.993 12.2282C355.842 45.2872 99.9566 92.2446 15.646 54.0127" stroke="#FF5F55" strokeWidth="2" strokeLinecap="round"></path>
                                    </svg>
                                </div>
                            </span>
                        </h1>
                        <ul className='pt-3 flex flex-col row-gap'>
                            <li className="flex item-center column-gap">
                                <CheckCircleFilled
                                    style={{
                                        color: "#0007ff",
                                        fontSize: "20px"
                                    }}
                                />
                                <p className='font-jakarta text-section-one'>Quản lý mục tiêu của công ty, nhóm, nhân sự một cách dễ dàng và tiện lợi</p>
                            </li>
                            <li className="flex item-center column-gap">
                                <CheckCircleFilled
                                    style={{
                                        color: "#0007ff",
                                        fontSize: "20px"
                                    }}
                                />
                                <p className='text-section-one font-jakarta'>Cho phép lập mục tiêu theo chu kì năm, quý, tháng, tuần</p>
                            </li>
                            <li className="flex item-center column-gap">
                                <CheckCircleFilled
                                    style={{
                                        color: "#0007ff",
                                        fontSize: "20px"
                                    }}
                                />
                                <p className='text-section-one font-jakarta'>Quản lý checkin tiến độ mục tiêu, dự án của công ty, nhóm</p>
                            </li>
                            <li className="flex item-center column-gap">
                                <CheckCircleFilled
                                    style={{
                                        color: "#0007ff",
                                        fontSize: "20px"
                                    }}
                                />
                                <p className='text-section-one font-jakarta'>Tự động nhắc việc và thông báo đến những người liên quan</p>
                            </li>
                        </ul>
                        <div className="flex flex-col item-center mt-5">
                            <div className="flex item-center gap-x-3">
                                <a href="https://strapi.tinamys.com/uploads/MYS_profile_VN_5eb9d34a23.pdf" target="_blank " >
                                    <div className='btn-section-one btn-download row'>
                                        <DownloadOutlined
                                            style={{
                                                color: "white",
                                                marginRight: "8px"
                                            }}
                                        />
                                        <p>Tải Profile</p>
                                    </div>
                                </a>
                                <a href="/login">
                                    <div className='btn-section-one btn-try'>
                                        <p>Trải nghiệm ngay!</p>
                                    </div>

                                </a>
                            </div>
                            <div className='picture-section-one relative'>
                                <img className='mx-auto' src={pictureOne} alt="MSY ChPlay" />
                                <span className="absolute right-[5%] top-[50%]">
                                    <svg width="140px" height="160px" viewBox="0 0 181 169" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path className="lineGreenCircle" d="M176.5 16.8031C187 51.5 171.646 60.7893 155.701 66.3031C140.274 67.8169 130.726 68.0348 110.701 66.3031C101.334 65.6499 96.3342 65.4112 77.2013 59.8031C64.8166 53.9343 59.3993 50.8962 54.7013 46.3031C45.7938 34.6432 42.8911 27.6899 50.2013 12.8031C59.1955 1.56931 66.067 -0.417149 80.7013 1.80307C96.4772 6.41586 100.474 10.1144 107.201 16.8031C111.634 27.2472 120.27 35.5732 115.5 51.5C111.436 66.2491 108.74 71.2081 102.201 81.3031C94.0929 94.1934 89.5035 99.5284 80.7013 108.5C71.8991 117.472 71.8505 119.669 64.5 123.303C51.4896 132.959 39.943 134.42 28.5 131C23.7987 132.251 10.1649 128.806 6.70131 123.303C1.68038 113.125 1.85283 109.014 6.70131 104.303C15.2617 97.9011 26.2013 104.303 26.2013 104.303C26.2013 104.303 36.0763 111.693 37.7013 118.303C42.7083 126.614 35.7024 140.803 35.7024 140.803C35.7024 140.803 25.9704 155.751 26.2013 156.303L17.5 161.5L6.70131 164.5" stroke="#61CB8C" strokeWidth="2.5"></path>
                                        <path className="arrowLineGreenCircle" d="M4 157L1 168.5H11.5H16" stroke="#61CB8C" strokeWidth="2.5"></path>
                                    </svg>
                                </span>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <section className='section-two mt-10 pt-14 px-14 pb-10 mx-auto max-w-[112rem]'>
                <div className='flex flex-nowrap justify-center item-center gap-16 max-w-[80rem] mx-16'>
                    <div className='max-w-fit m-0 relative duration-300 img-sectione w-[50rem]'>
                        <img className='mx-auto realative' loading='lazy' style={{
                            color: "transparent",
                            width: "640px",
                            height: "342px"
                        }} src={pictureTwo} alt="Lập kế hoạch chi tiết theo chu kì năm, quý, tháng, tuần" />
                    </div>
                    <div className='w-2/5 pl-0 order-last'>
                        <h1 className='text-[39px] leading-[150%] pb-6 tracking-tighter font-semibold'>Lập mục tiêu theo chu kì năm, quý, tháng, tuần</h1>
                        <ul className="flex flex-col gap-x-7 gap-1-5">
                            <li className="flex gap-x-7">
                                <span><CheckOutlined
                                    style={{
                                        fontsize: "15px",
                                        color: "rgb(43, 89, 255)",
                                        marginTop: "5px"
                                    }}
                                /></span>
                                <p className='text-color text-xl'>Lập mục tiêu chi tiết theo năm, quý, tháng, tuần</p>
                            </li>
                            <li className="flex gap-x-7">
                                <span><CheckOutlined
                                    style={{
                                        fontsize: "15px",
                                        color: "rgb(43, 89, 255)",
                                        marginTop: "5px"
                                    }}
                                /></span>
                                <p className='text-color text-xl'>Tổ chức các hạng mục công việc, phân bổ nhân lực
                                    liên nhóm để thực hiện mục tiêu và quản lý tiến độ trên một nền tảng hợp nhất</p>
                            </li>
                            <li className="flex gap-x-7">
                                <span><CheckOutlined
                                    style={{
                                        fontsize: "15px",
                                        color: "rgb(43, 89, 255)",
                                        marginTop: "5px"
                                    }}
                                /></span>
                                <p className='text-color text-xl'>Tổ chức công việc theo dự án, báo cáo độc lập, theo dõi đầu việc đa chiều,
                                    cảnh báo tiến độ thông minh</p>
                            </li>

                        </ul>
                    </div>
                </div>
            </section>
            <section className='mt-10 pt-14 px-14 pb-10 mx-auto max-w-[112rem]'>
                <div className='flex flex-nowrap items-center gap-5 gap-x-10 max-w-[80rem] mx-auto'>
                    <div className='relative pl-5 w-1/2 widtd-40'>
                        <h1 className='pb-6 leading-[178%] text-[39px] tracking-tighter font-semibold '>Quản lý mục tiêu theo cấp bậc công ty, nhóm, nhân viên</h1>
                        <ul className="flex flex-col gap-x-7 gap-1-5">
                            <li className="flex gap-x-7">
                                <span><CheckOutlined
                                    style={{
                                        fontsize: "15px",
                                        color: "rgb(43, 89, 255)",
                                        marginTop: "5px"
                                    }}
                                /></span>
                                <p className='text-justify text-color font-normal text-xl'>Chia nhỏ mục tiêu theo cấp bậc từ công ty, nhóm đến từng nhân viên</p>
                            </li>
                            <li className="flex gap-x-7">
                                <span><CheckOutlined
                                    style={{
                                        fontsize: "15px",
                                        color: "rgb(43, 89, 255)",
                                        marginTop: "5px"
                                    }}
                                /></span>
                                <p className='text-justify text-color font-normal text-xl'>Giám sát tiến độ thực hiện mục tiêu, đánh giá hiệu quả, giúp cấp trên đưa ra quyết định chính xác và nhanh chóng</p>
                            </li>
                            <li className="flex gap-x-7">
                                <span><CheckOutlined
                                    style={{
                                        fontsize: "15px",
                                        color: "rgb(43, 89, 255)",
                                        marginTop: "5px"
                                    }}
                                /></span>
                                <p className='text-justify text-color font-normal text-xl'>Giao tiếp và trao đổi nội bộ trên từng công việc. Thông tin đồng bộ, kịp thời và dễ dàng phối hợp</p>
                            </li>
                            <li className="flex gap-x-7">
                                <span><CheckOutlined
                                    style={{
                                        fontsize: "15px",
                                        color: "rgb(43, 89, 255)",
                                        marginTop: "5px"
                                    }}
                                /></span>
                                <p className='text-justify text-color font-normal text-xl'>Quản lý mục tiêu, tiến độ hoàn thành của nhân viên cấp dưới trên một bảng chung</p>
                            </li>

                        </ul>
                    </div>
                    <div className=' relative max-w-fit w-3/5 m-0 img-sectione duration-300'>
                        <img loading='lazy' style={{
                            color: "transparent",
                            width: "100%",
                            height: "100%"
                        }} src={pictureThree} alt="Lập kế hoạch chi tiết theo chu kì năm, quý, tháng, tuần" />
                        <span className="absolute max-w-fit" style={{ left: "-25%" }}>
                            <svg width="13%" height="10%" viewBox="0 0 86 86" fill="none" xmlns="http://www.w3.org/2000/svg" >
                                <path d="M67.5901 57.6732L41.7803 85.7443L38.5969 47.2789L64.4067 19.2077L67.5901 57.6732Z" fill="#f37726"></path>
                                <path d="M38.5974 47.2789L64.4072 19.2077L25.8103 19.2586L0.000451041 47.3297L38.5974 47.2789Z" fill="#f37726"></path>
                            </svg>
                        </span>
                    </div>
                </div>
            </section>
            <section className='mt-10 pt-14 px-14 pb-10 max-w-[112rem] mx-auto'>
                <div className='flex flex-nowrap items-center justify-center gap-5 gap-x-16 max-w-[80rem] mx-auto'>
                    <div className='max-w-fit w-[50%] m-0 img-sectione duration-300 '>
                        <img className='mx-auto realative' loading='lazy' style={{
                            color: "transparent",
                            width: "100%",
                            height: "100%"
                        }} src={pictureFour} alt="Lập kế hoạch chi tiết theo chu kì năm, quý, tháng, tuần" />
                    </div>
                    <div span={12} className='widtd-40'>
                        <h1 className='pb-6' style={{
                            fontSize: "40px",
                            lineHeight: "150%",
                            letterSpacing: "-.05em",
                            fontWeight: "600"
                        }}>Kế hoạch công việc hàng ngày</h1>
                        <ul className="flex flex-col gap-x-7 gap-1-5">
                            <li className="flex gap-x-7">
                                <span><CheckOutlined
                                    style={{
                                        fontsize: "15px",
                                        color: "rgb(43, 89, 255)",
                                        marginTop: "5px"
                                    }}
                                /></span>
                                <p className='text-color text-xl'>Chia nhỏ mục tiêu thành các công việc hàng ngày</p>
                            </li>
                            <li className="flex gap-x-7">
                                <span><CheckOutlined
                                    style={{
                                        fontsize: "15px",
                                        color: "rgb(43, 89, 255)",
                                        marginTop: "5px"
                                    }}
                                /></span>
                                <p className='text-color text-xl'>Cho phép lên kế hoạch công việc một cách chi tiết và rõ ràng hơn</p>
                            </li>
                            <li className="flex gap-x-7">
                                <span><CheckOutlined
                                    style={{
                                        fontsize: "15px",
                                        color: "rgb(43, 89, 255)",
                                        marginTop: "5px"
                                    }}
                                /></span>
                                <p className='text-color text-xl'>Định hướng mục tiêu của mỗi công việc đang được thực hiện hàng ngày</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
            <section className='mt-10 pt-14 px-14 pb-10 max-w-[112rem] mx-auto'>
                <div className='flex flex-nowrap items-center gap-5 gap-x-16 max-w-[80rem] mx-auto'>
                    <div className='w-2/5 relative'>
                        <h1 className='pb-6' style={{
                            fontSize: "40px",
                            lineHeight: "150%",
                            letterSpacing: "-.05em",
                            fontWeight: "600"
                        }}>Checkin tiến độ công việc, mục tiêu
                        </h1>
                        <ul className="flex flex-col gap-x-7 gap-1-5">
                            <li className="flex gap-x-7">
                                <span><CheckOutlined
                                    style={{
                                        fontsize: "15px",
                                        color: "rgb(43, 89, 255)",
                                        marginTop: "5px"
                                    }}
                                /></span>
                                <p className='text-color text-xl'>Checkin tiến độ công việc định kỳ để giúp quản lý đưa ra quyết định chính xác</p>
                            </li>
                            <li className="flex gap-x-7">
                                <span><CheckOutlined
                                    style={{
                                        fontsize: "15px",
                                        color: "rgb(43, 89, 255)",
                                        marginTop: "5px"
                                    }}
                                /></span>
                                <p className='text-color text-xl'>Hệ thống tự động nhắc tiến độ công việc đến những người liên quan</p>
                            </li>
                            <li className="flex gap-x-7">
                                <span><CheckOutlined
                                    style={{
                                        fontsize: "15px",
                                        color: "rgb(43, 89, 255)",
                                        marginTop: "5px"
                                    }}
                                /></span>
                                <p className='text-color text-xl'>Hệ thống tự động cảnh báo công việc sắp đến hạn, quá hạn</p>
                            </li>
                            <li className="flex gap-x-7">
                                <span><CheckOutlined
                                    style={{
                                        fontsize: "15px",
                                        color: "rgb(43, 89, 255)",
                                        marginTop: "5px"
                                    }}
                                /></span>
                                <p className='text-color text-xl'>Quản lý mục tiêu, tiến độ hoàn thành của nhân viên cấp dưới trên một bảng chung</p>
                            </li>

                        </ul>
                    </div>
                    <div className='max-w-fit relative'>
                        <img className='mx-auto realative img-sectione duration-300' loading='lazy' style={{
                            color: "transparent",
                            width: "720px",
                            height: "390px"
                        }} src={pictureFive} alt="Lập kế hoạch chi tiết theo chu kì năm, quý, tháng, tuần" />
                        <div>
                            <span className='absolute svg-line' style={{ right: "-5%", top: "50%" }}>
                                <svg width="140px" height="160px" viewBox="0 0 296 197" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path className="line" d="M2.39893 60.9506C4.16683 54.8839 4.51647 48.2074 7.70264 42.7504C17.2995 26.3138 31.1018 20.4503 48.4017 13.8871C69.4425 5.90452 93.8513 0.816731 116.513 3.00044C142.012 5.45767 169.71 17.2816 188.085 35.2694C199.825 46.7623 208.47 62.611 209.746 79.1507C210.84 93.3161 206.574 101.347 196.682 110.415C191.169 115.469 208.872 101.66 215.497 98.1882C231.179 89.9685 254.331 83.1748 270.99 92.9403C288.85 103.41 288.604 132.785 285.171 150.22C282.844 162.036 277.406 173.306 269.706 182.545" stroke="#FD319E" strokeWidth="3" strokeLinecap="round"></path>
                                    <path className="arrowline" d="M260.507 177.446C262.159 183.143 263.176 188.857 264.351 194.662" stroke="#FD319E" strokeWidth="3" strokeLinecap="round"></path>
                                    <path className="arrowline" d="M264.017 194.829C269.995 192.267 276.534 190.849 282.738 188.979" stroke="#FD319E" strokeWidth="3" strokeLinecap="round"></path>
                                </svg>
                            </span>
                        </div>
                    </div>
                </div>
            </section >
            <div className="h-6-5 max-w-[112rem]"></div>
            <Benefit />
            <div className="h-[6.5rem]"></div>
            <section className='section-seven pt-10 pb-[80px] max-w-[112rem] mx-auto'>
                <div className='section-seven-body w-full mx-auto relative'>
                    <div className="img-phone pt-20">
                        <img className='hover:scale-105 duration-300' src={iphone_7} alt="Trải nghiệm ứng dụng mys" loading='lazy' style={{
                            color: "transparent",
                            width: "520px",
                            height: "520px"
                        }} />
                    </div>

                    <div className="section-seven-content">
                        <div className="title font-bold pb-[36px] text-5xl max-w-[690px]">
                            Trải nghiệm ứng dụng quản lý
                            <br />
                            công việc TinaMYS
                        </div>
                        <div className="inline-block description leading-7 text-lg font-medium text-justify">
                            Khám phá sức mạnh đột phá với TinaMYS - giải pháp quản trị mục tiêu, công việc cho doanh nghiệp: Đa chiều - thông minh - linh hoạt - hiệu quả
                        </div>
                        <div className="flex flex-row gap-5">
                            <a href="https://apps.apple.com/us/app/tinamys/id6449159582" target="_blank " className='w-44 h-14 mr-5'>
                                <img src={apple} alt="MYS App Store" loading='lazy' width={"179px"} height={"58px"} style={{
                                    width: "100%",
                                    height: "100%"
                                }} />
                            </a>

                            <a href="https://play.google.com/store/apps/details?id=com.tinasoft.mys&pli=1" target="_blank " className='w-44 h-14 mr-5'>
                                <img src={chplay} alt="MYS App Store" loading='lazy' width={"179px"} height={"58px"} style={{
                                    width: "100%",
                                    height: "100%"
                                }} />
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section-night max-max-w-[112rem] mx-auto">
                <div className="flex flex-col justify-center items-center mt-20 background relative mx-auto">
                    <div className="px-6 w-10/12">
                        <div className="section-night-body pt-6 pb-12 gap-6 justify-center items-center flex flex-wrap">
                            <div className="w-5/12 content-img max-w-fit">
                                <img src={backgroundNight} alt="Những đánh giá về mys" loading='lazy' style={{
                                    color: "transparent",
                                    width: "100%",
                                    height: "100%",
                                    maxWidth: "692px"
                                }} />
                            </div>
                            <div className='w-1/2 order-last'>
                                <div className="p-0 text-left">
                                    <div className='leading-[3.375rem] text-[45px] not-italic font-bold'>
                                        Những phản hồi
                                        <br />
                                        từ khách hàng
                                    </div>
                                    <div className="flex justify-start items-center gap-x-2 pt-5">
                                        <ul className='flex justify-start'>
                                            <li className='pr-2'><StarFilled style={{ color: '#f9f900', fontSize: '1.3rem' }} /></li>
                                            <li className='pr-2'><StarFilled style={{ color: '#f9f900', fontSize: '1.3rem' }} /></li>
                                            <li className='pr-2'><StarFilled style={{ color: '#f9f900', fontSize: '1.3rem' }} /></li>
                                            <li className='pr-2'><StarFilled style={{ color: '#f9f900', fontSize: '1.3rem' }} /></li>
                                            <li className='pr-2'><StarFilled style={{ color: '#f9f900', fontSize: '1.3rem' }} /></li>
                                        </ul>
                                    </div>

                                    <div className="font-inter pb-6 text-justify font-normal pr-5 pt-8 text-xl">
                                        "Một ứng dụng thú vị, nơi tôi có thể chia sẻ với bạn bè và những người xung quanh. Mong mô hình của app sẽ được nhân rộng và nhiều người biết đến"
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="section-night-slick pb-12 overflow-hidden">
                        <div className="slick-slider">
                            <CenterMode />
                        </div>
                    </div>
                </div>
            </section >
            <section className='section-ten max-w-[112rem] relative pb-32 items-center mx-auto'>
                <div className="absolute right-[5%] bottom-0">
                    <img width={"288px"} height={"164px"} src={iconBackgroundTen} alt="Lập kế hoạch mục tiêu ngày tháng năm mys" loading='lazy' style={{
                        color: 'transparent',
                        width: '100%',
                        height: '100%'
                    }} />
                </div>
                <div className='background-section-ten pb-0 px-0 '>
                    <div className='text-[39px] pt-28 leading-10 text-center font-black'>
                        Những câu hỏi về MYS
                    </div>
                </div>
                <div className="section-ten-content pt-24 px-6 gap-5 items-start flex flex-row w-[85%] justify-center mx-auto">
                    <div className="w-full">
                        <Collapse_1 />
                        <Collapse_2 />
                    </div>
                    <div className="w-full">
                        <Collapse_3 />
                        <Collapse_4 />
                    </div>
                </div>
                <div className="block text-center">
                    <p className="leading-6 not-italic font-normal text-base">
                        Chưa thể giải đáp những thắc mắc?
                        <a href="#contact">
                            <span className='leading-6 not-italic font-normal text-base pl-1 text-[#007bff]'>Liên hệ với chúng tôi</span>
                        </a>
                    </p>
                </div>

            </section>
            <div id="contact" className='h-24'></div>
            <section className='section-ele max-w-[112rem] mx-auto' id='contact'>
                <div className='w-[80%] px-16 bg-white gap-8 justify-center pb-11 flex flex-nowrap mx-auto items-center'>
                    <div className='w-1/2 max-w-fit mx-auto'>
                        <img src={imgEle} width="811" height="849" loading='lazy' alt="Liên hệ hỗ trợ mys" style={{
                            color: "transparent",
                            width: "100%",
                            height: "100%",
                            maxWidth: "542px",
                        }} />
                    </div>
                    <div className='w-3/5 mx-auto'>
                        <Form_1 />
                    </div>

                </div>
            </section>
            <Footer />
            <LDP />
        </>
    )
}

export default Selection;