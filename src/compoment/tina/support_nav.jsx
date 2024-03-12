import { Dropdown } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';


function Support() {

    const items = [
        {
            key: '1',
            label: (
                <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                    1st menu item
                </a>
            ),
        },
        {
            key: '2',
            label: (
                <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
                    2nd menu item
                </a>
            ),
        },
        {
            key: '3',
            label: (
                <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
                    3rd menu item
                </a>
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
                    paddingTop: 17,
                }}
                className='rounded-none bg-white'
            >
                <QuestionCircleOutlined style={{ fontSize: "20px" }} />
            </Dropdown>
        </>
    )
}

export default Support;