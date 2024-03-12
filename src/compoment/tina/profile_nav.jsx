import { Dropdown } from 'antd';
import avt from '../../assets/img/hhdavt.png'

function Profile() {

    const items = [
        {
            key: '1',
            label: (
                <div className="flex justify-center py-5 px-4 border-b border-[#dcdcdc] ">
                    <div className="profile-img relative inline-block" width={48} height={48}>
                        <img src={avt} alt="Avatar user" loading='lazy' style={{
                            height: "48px",
                            objectFit: "cover",
                            borderRadius: "50%",
                        }} />
                    </div>
                    <div className="flex flex-col justify-center items-start ml-3 ">
                        <span className=' font-normal text-lg leading-5 '>
                            dương hoàng
                        </span>

                        <span className=' font-light text-sm leading-5 '>
                            hhd010802@gmail.com
                        </span>
                    </div>
                </div>
            ),
        },
        {
            key: '2',
            label: (
                <div className=' flex flex-col justify-center items-start text-[#555] '>
                    <button type='button' className=' flex w-full items-center font-normal leading-normal text-base py-2 px-4 hover:bg-[#f6f6f6] '>
                        Giới thiệu
                    </button>

                    <button type='button' className=' flex w-full items-center font-normal leading-normal text-base py-2 px-4 hover:bg-[#f6f6f6] '>
                        Thông tin tài khoản
                    </button>

                    <button type='button' className=' flex w-full items-center font-normal leading-normal text-base py-2 px-4 hover:bg-[#f6f6f6] '>
                        Đánh giá
                    </button>

                    <button type='button' className=' border-b border-[#dcdcdc] flex w-full items-center font-normal leading-normal text-base py-2 px-4 hover:bg-[#f6f6f6] '>
                        Chính sách về quyền riêng tư
                    </button>

                    <button type='button' className=' flex w-full items-center font-normal leading-normal text-base py-2 px-4 hover:bg-[#f6f6f6] '>
                        Language
                    </button>

                    <button type='button' className=' flex w-full items-center font-normal leading-normal text-base py-2 px-4 hover:bg-[#f6f6f6] '>
                        Đổi mật khẩu
                    </button>
                </div>
            ),
        },
        {
            key: '3',
            label: (
                <div className="py-2 text-[#555">
                    <button type="button" className='flex w-full items-center font-normal leading-normal text-base py-2 px-4 hover:bg-[#f6f6f6]'>
                        Đăng xuất
                    </button>
                </div>
            ),
        },
    ];

    return (
        <>
            <Dropdown
                menu={{
                    items,
                }}
                placement="bottomRight"
                trigger={['click']}
                overlayStyle={{
                    paddingTop: 10,
                }}
                className='rounded-none bg-white flex justify-center items-center'
            >
                <div className="avt-img w-8 h-8 cursor-pointer">
                    <img src={avt} alt="avatar user" style={{
                        height: "31px",
                        objectFit: "cover",
                        borderRadius: "100%"
                    }} />
                </div>
            </Dropdown>
        </>
    )
}

export default Profile;