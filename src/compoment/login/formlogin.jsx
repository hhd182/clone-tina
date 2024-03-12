import './formlogin.scss'
import iconfb from '../../assets/img/iconFaceBook.png'
import icongg from '../../assets/img/iconGoogle.png'
import { Button, Form, Input } from 'antd';
import FormItem from 'antd/es/form/FormItem';

function FormLogin({ handleChange, isLoggedIn }) {

    const onFinish = (values) => {

        console.log('Success:', values);
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <Form
            name="normal_login"
            className="login-form"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
        >

            <div className="header-wrapper">
                <div className="login-text">
                    Đăng nhập
                </div>
                <p className="login-description">
                    Hoàn thành các thông tin chi tiết dưới đây
                </p>
            </div>

            <Form.Item className='mb-0'>
                <div className="title">
                    Email hoặc tên tài khoản
                </div>
            </Form.Item>

            <Form.Item
                className='mb-4'
                name="username"
                rules={[
                    {
                        required: true,
                        message: 'Email hoặc tên tài khoản không được để trống!',
                    },
                ]}
            >

                <Input className='input-login' placeholder="Email hoặc tên tài khoản" />
            </Form.Item>

            <Form.Item className='mb-0'>
                <div className="title">
                    Mật khẩu
                </div>
            </Form.Item>

            <Form.Item
                className='mb-4'
                name="password"
                rules={[
                    {
                        required: true,
                        message: 'Mật khẩu không được để trống!',
                    },
                ]}
            >
                <Input.Password
                    className='input-login'
                    type="password"
                    placeholder="Mật khẩu"
                />
            </Form.Item>

            <Form.Item className='mb-0'>
                <div className="flex items-center float-right mb-1">
                    <div role='button' className="forgot-pass">
                        Quên mật khẩu?
                    </div>
                </div>
            </Form.Item>

            {/* <a href="/home">
                <Button type="primary" htmlType="submit" className="login-form-button text-white font-semibold text-base p-2 rounded-md justify-center items-center w-full h-11 bg-[#2082ff] hover:bg-[#3d95ff]">
                    Đăng nhập
                </Button>
            </a> */}

            <Button type="primary" htmlType="submit" className="login-form-button text-white font-semibold text-base p-2 rounded-md justify-center items-center w-full h-11 bg-[#2082ff] hover:bg-[#3d95ff]">
                <a href="/home" className='block w-full h-full'>
                    Đăng nhập
                </a>
            </Button>

            <Button className='btn-login-social h-11 bg-white'>
                <img src={icongg} alt="" width={20} height={20} loading='lazy' />
                <div className="ml-2">
                    Đăng nhập với Google
                </div>
            </Button>

            <Button className='btn-login-social h-11 bg-white'>
                <img src={iconfb} alt="" width={10} height={20} loading='lazy' />
                <div className="ml-2">
                    Đăng nhập với Facebook
                </div>
            </Button>

            <div className='flex justify-center mt-4'>
                <span>Bạn chưa có tải khoản?</span>
                <a href="#" onClick={() => handleChange(!isLoggedIn)} className='text-router-register'> Đăng ký ngay</a>
            </div>
        </Form>
    );
}


export default FormLogin;