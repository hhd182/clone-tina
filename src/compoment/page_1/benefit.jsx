import './main.scss'
import './benefit.scss'
import easy from '../../assets/img/easy.png'
import smartPhone from '../../assets/img/smartphone.png'
import cost from '../../assets/img/reduce-cost.png'
import target from '../../assets/img/target.png'
import intel from '../../assets/img/artificial-intelligence.png'

function Benefit() {
    return (
        <div id='benefit'>
            <div className="benefit mx-auto pb-16 max-w-[112rem]">
                <div className="benefit-container pt-7">
                    <ul className="benefit-grid grid grid-cols-3 w-8/12 gap-y-11 gap-x-8 mx-auto">
                        <li className='p-0'>
                            <div className="flex">
                            </div>
                            <div className="item-tilte">
                                <h3 className='pb-2 text-5xl font-bold'>
                                    Ưu điểm nổi trội của MYS
                                </h3>
                                <p className='text-lg font-normal pb-7 '>
                                    Với những ưu điểm và tính năng vượt trội của MYS, công nghệ và giải pháp của chúng tôi sẽ giúp bạn đạt được mục tiêu, tối ưu hoá năng suất của doanh nghiệp.
                                </p>
                            </div>
                        </li>
                        <li className='hover:scale-105 duration-300 p-10 benefit-item'>
                            <div className="flex">
                                <img className='pb-5' loading='lazy' style={{ color: 'transparent', width: '48px', height: '68px' }} src={easy} alt="" />
                            </div>
                            <div className="item-tilte">
                                <h3 className='pb-4 text-2xl font-medium'>
                                    Dễ sử dụng và tiện lợi và tiết kiệm thời gian
                                </h3>
                                <p className='text-base font-medium pb-7 opacity-80'>
                                    Giao diện đơn giản và thân thiện, giúp người dùng dễ dàng sử dụng và tiết kiệm thời gian
                                </p>
                            </div>
                        </li>

                        <li className='hover:scale-105 duration-300 p-10 benefit-item'>
                            <div className="flex">
                                <img className='pb-5' loading='lazy' style={{ color: 'transparent', width: '48px', height: '68px' }} src={smartPhone} alt="" />
                            </div>
                            <div className="item-tilte">
                                <h3 className='pb-4 text-2xl font-medium'>
                                    Hỗ trợ đa nền tảng
                                </h3>
                                <p className='text-base font-medium pb-7 opacity-80'>
                                    Ứng dụng hiện có mặt trên iOS, Android và Website
                                </p>
                            </div>
                        </li>

                        <li className='hover:scale-105 duration-300 p-10 benefit-item'>
                            <div className="flex">
                                <img className='pb-5' loading='lazy' style={{ color: 'transparent', width: '48px', height: '68px' }}
                                    src={cost} alt="" />
                            </div>
                            <div className="item-tilte">
                                <h3 className='pb-4 text-2xl font-medium'>
                                    Chi phí thấp
                                </h3>
                                <p className='text-base font-medium pb-7 opacity-80'>
                                    Cho phép người dùng sử dụng miễn phí các tính năng cơ bản
                                </p>
                            </div>
                        </li>

                        <li className='hover:scale-105 duration-300 p-10 benefit-item'>
                            <div className="flex">
                                <img className='pb-5' loading='lazy' style={{ color: 'transparent', width: '48px', height: '68px' }}
                                    src={target} alt="" />
                            </div>
                            <div className="item-tilte">
                                <h3 className='pb-4 text-2xl font-medium'>
                                    Hiệu quả
                                </h3>
                                <p className='text-base font-medium pb-7 opacity-80'>
                                    Giúp tăng hiệu suất công việc và đưa ra quyết định chính xác
                                </p>
                            </div>
                        </li>

                        <li className='hover:scale-105 duration-300 p-10 benefit-item'>
                            <div className="flex">
                                <img className='pb-5' loading='lazy' style={{ color: 'transparent', width: '48px', height: '68px' }}
                                    src={intel} alt="" />
                            </div>
                            <div className="item-tilte">
                                <h3 className='pb-4 text-2xl font-medium'>
                                    Hỗ trợ công nghệ AI
                                </h3>
                                <p className='text-base font-medium pb-7 opacity-80'>
                                    Người dùng sử dụng ứng dụng được hỗ trợ bởi công nghệ thông minh AI
                                </p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Benefit;