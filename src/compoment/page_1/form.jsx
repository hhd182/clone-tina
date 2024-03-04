import { Form, Input } from 'antd';
import TextArea from 'antd/es/input/TextArea';
/* eslint-enable no-template-curly-in-string */

const onFinish = (values) => {
    console.log(values);
};
const Form_1 = () => (
    <Form
        name="nest-messages"
        onFinish={onFinish}
        style={{
            maxWidth: 600,
        }}
    >
        <div>
            <h1 className='text-5xl mb-16 justify-start text-black font-bold flex relative z-10 '>
                Liên hệ với chúng tôi
                <svg className="absolute -bottom-[22%] -z-10" width="228" height="16" viewBox="0 0 228 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.97461 12.9513C56.6422 4.19511 151.592 -1.43388 224.869 8.57321" stroke="#08F2C5" strokeWidth="5.54249" strokeLinecap="round"></path>
                </svg>
            </h1>
        </div>
        <div className='flex gap-x-4'>
            <Form.Item
                className='form-item-custom'
                name={['user', 'name']}
                rules={[
                    {
                        required: true,
                        message: "Họ và tên không được để trống"
                    },
                ]}
            >
                <Input className='input-contact' placeholder='Họ và tên*' />
            </Form.Item>
            <Form.Item
                name={['user', 'phone']}
                rules={[
                    {
                        required: true,
                        message: "Số điện thoại không được để trống"
                    },
                ]}
            >
                <Input className='input-contact' placeholder='Số điện thoại*' />
            </Form.Item>
        </div>
        <Form.Item
            name={['user', 'email']}
            rules={[
                {
                    required: true,
                    message: "Email không được để trống"
                },
            ]}
        >
            <Input className='input-contact' placeholder='Email*' />
        </Form.Item>

        <Form.Item
            name={['message']}
            rules={[
                {
                    required: true,
                    message: "Lời nhắn không được để trống"
                },
            ]}
        >
            <TextArea placeholder='Lời nhắn*' style={{
                overflowY: "hidden",
                height: "97.6px",
                resize: "none",
                minHeight: "97.6px",
                maxHeight: "119.6px",
            }} />
        </Form.Item>
        <button className='w-48 h-14 text-white text-sm font-medium px-3 p-2 rounded-2xl justify-center items-center inline-flex bg-[#1c7fff]'>
            Gửi lời nhắn
        </button>
    </Form>
);
export default Form_1;