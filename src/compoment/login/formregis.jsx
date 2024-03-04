import { Button, Form, Input } from 'antd';
import './formregis.scss'

function FormRegis({ handleChange, isLoggedIn }) {

    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };

    return (
        <Form
            name="normal_login"
            className="login-form"
            onFinish={onFinish}
        >
            <div className="header-wrapper">
                <div className="regis-text">
                    ĐĂNG KÝ
                </div>
            </div>

            <Form.Item className='mb-0'>
                <div className="title">
                    Họ và tên
                    <b className="text-orange-300">*</b>
                </div>
            </Form.Item>

            <Form.Item
                className='mb-4'
                name="name"
                rules={[
                    {
                        required: true,
                        message: 'Tên không được để trống!',
                    },
                ]}
            >

                <Input className='input-login' placeholder="Họ và tên" />
            </Form.Item>

            <Form.Item className='mb-0'>
                <div className="title">
                    Tên tài khoản
                    <b className="text-orange-300">*</b>
                </div>
            </Form.Item>

            <Form.Item
                className='mb-4'
                name="username"
                rules={[
                    {
                        required: true,
                        message: 'Tên tài khoản không được để trống!',
                    },
                ]}
            >

                <Input className='input-login' placeholder="Tên tài khoản" />
            </Form.Item>

            <Form.Item className='mb-0'>
                <div className="title">
                    Email
                    <b className="text-orange-300">*</b>
                </div>
            </Form.Item>

            <Form.Item
                className='mb-4'
                name="email"
                rules={[
                    {
                        required: true,
                        message: 'Email không được để trống!',
                    },
                ]}
            >
                <Input className='input-login' placeholder="Email" />
            </Form.Item>

            <Form.Item className='mb-0'>
                <div className="title">
                    Mật khẩu
                    <b className="text-orange-300">*</b>
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
                <div className="title">
                    Nhập lại mật khẩu
                    <b className="text-orange-300">*</b>
                </div>
            </Form.Item>

            <Form.Item
                className='mb-4'
                name="confirmPass"
                rules={[
                    {
                        required: true,
                        message: 'Mật khẩu nhập lại không được để trống!',
                    },
                ]}
            >

                <Input.Password
                    className='input-login'
                    type="password"
                    placeholder="Nhập lại mật khẩu"
                />
            </Form.Item>

            <Button type="submit" htmlType="submit" className="login-form-button text-white font-semibold text-base p-2 rounded-md justify-center items-center w-full h-11 bg-[#2082ff] hover:bg-[#3d95ff]">
                Đăng ký
            </Button>

            <div className='flex justify-center mt-4'>
                <span>Bạn đã có tải khoản?</span>
                <a href="#" onClick={() => handleChange(!isLoggedIn)} className='text-router-register'> Đăng nhập ngay</a>
            </div>
        </Form>
    );
}


export default FormRegis;