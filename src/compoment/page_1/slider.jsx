/* eslint-disable react/no-unescaped-entities */
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './slider.scss'
import avtfb_1 from '../../assets/img/avatarfeedback1.png'
import avtfb_2 from '../../assets/img/avatarfeedback2.png'
import avtfb_3 from '../../assets/img/avatarfeedback3.png'


function CenterMode() {
    const settings = {
        className: "center",
        dots: true,
        centerMode: true,
        infinite: true,
        centerPadding: "30px",
        slidesToShow: 1,
        speed: 500,
        variableWidth: true,
    };
    return (
        <div className="slider-container">
            <Slider {...settings}>
                <div style={{ width: 700 }}>
                    <div className="slider-page slider-active" >
                        <div className="slider" style={{ width: "100%" }}>
                            <div className="slider-content  py-[0.625rem] px-5 ">
                                <div className="text-content">
                                    <h2 className="text-center font-semibold text-black pt-6 pb-2 text-lg leading-6">
                                        Chị Phạm Khánh Linh
                                    </h2>
                                    <h3 className="text-center font-semibold not-italic text-[#737588] pb-4 text-sm leading-5 ">
                                        Nhân viên kinh doanh
                                    </h3>
                                    <p className="text-center not-italic text-[#63A5F1] text-5xl leading-6">"</p>
                                    <p className="text-center not-italic font-normal pb-9 mt-4 px-14 text-base leading-6 text-black">
                                        Tôi không bỏ lỡ bất cứ deadline nào nhờ MYS, hệ thống sẽ nhắc việc khi đến hạn hoặc quá hạn nhờ đó mà vị trí bận rộn như tôi không bị lỡ mất bất cứ công việc quan trọng nào!
                                    </p>
                                </div>
                                <div className="inline-block img-avt">
                                    <div className="avt-img">
                                        <img className="p-2 w-16 mt-8 " src={avtfb_1} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div style={{ width: 700 }}>
                    <div className="slider-page" >
                        <div className="slider" style={{ width: "100%" }}>
                            <div className="slider-content py-[0.625rem] px-5 ">
                                <div className="text-content">
                                    <h2 className="text-center font-semibold text-black pt-6 pb-2 text-lg leading-6">
                                        Anh Lê Đắc Duy
                                    </h2>
                                    <h3 className="text-center font-semibold not-italic text-[#737588] pb-4 text-sm leading-5 ">
                                        Trưởng phòng Tài chính
                                    </h3>
                                    <i className="text-center not-italic text-[#63A5F1] text-5xl leading-6">"</i>
                                    <p className="text-center not-italic font-normal pb-9 mt-4 px-14 text-base leading-6 text-black">
                                        Thực sự cảm ơn MYS, nhờ MYS tôi đã giảm thiểu tần suất họp báo cáo công việc hàng ngày và hàng tuần rất nhiều, do tiến độ được cập nhật theo thời gian thực, tôi chỉ cần truy cập vào ứng dụng là thấy được tất cả.
                                    </p>
                                </div>
                                <div className="inline-block img-avt">
                                    <div className="avt-img">
                                        <img className="p-2 w-16 mt-8 " src={avtfb_2} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div style={{ width: 700 }}>
                    <div className="slider-page" >
                        <div className="slider" style={{ width: "100%" }}>
                            <div className="slider-content py-[0.625rem] px-5 ">
                                <div className="text-content">
                                    <h2 className="text-center font-semibold text-black pt-6 pb-2 text-lg leading-6">
                                        Chị Nguyễn Thị Phương Thảo
                                    </h2>
                                    <h3 className="text-center font-semibold not-italic text-[#737588] pb-4 text-sm leading-5 ">
                                        CEO
                                    </h3>
                                    <p className="text-center not-italic text-[#63A5F1] text-5xl leading-6">"</p>
                                    <p className="text-center not-italic font-normal pb-9 mt-4 px-14 text-base leading-6 text-black">
                                        Tôi không bỏ lỡ bất cứ deadline nào nhờ MYS, hệ thống sẽ nhắc việc khi đến hạn hoặc quá hạn nhờ đó mà vị trí bận rộn như tôi không bị lỡ mất bất cứ công việc quan trọng nào!
                                    </p>
                                </div>
                                <div className="inline-block img-avt">
                                    <div className="avt-img">
                                        <img className="p-2 w-16 mt-8 " src={avtfb_3} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Slider>
        </div>
    );
}


export { CenterMode };
