import { Badge, Dropdown } from 'antd';
import { BellOutlined } from '@ant-design/icons';
import Tab from './tab';

function Noti() {

    const items = [
        {
            key: '1',
            label: (
                <div className='flex p-3 items-center justify-between border-b border-solid border-slate-200 '>
                    <p className='text-base font-normal '>Thông báo</p>
                    <button type="button">
                        <div className="font-normal text-sm text-blue-500 items-center flex">
                            Đánh dấu tất cả là đã đọc
                            <span role="img" aria-label="check-circle" className="anticon anticon-check-circle ml-1">
                                <svg viewBox="64 64 896 896" focusable="false" data-icon="check-circle" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                                    <path d="M699 353h-46.9c-10.2 0-19.9 4.9-25.9 13.3L469 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H325c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8a31.8 31.8 0 0051.7 0l210.6-292c3.9-5.3.1-12.7-6.4-12.7z"></path>
                                    <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path>
                                </svg>
                            </span>
                        </div>
                    </button>
                </div>
            ),
        },
        {
            key: '2',
            label: (
                <Tab />
            ),
        }
    ];

    return (
        <>
            <Badge count={0} className='flex items-center justify-center'>
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
                    <BellOutlined style={{ fontSize: "20px" }} />
                </Dropdown>
            </Badge>
        </>
    )
}

export default Noti;

