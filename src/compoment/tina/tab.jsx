import React from 'react';
import { Tabs } from 'antd';
import { NoContent } from './notice_content';
const onChange = (key) => {
    console.log(key);
};
const items = [
    {
        key: '1',
        label: 'Cá nhân',
        children: <div className=" list-noti custom-scrollbar ">
            <NoContent />
        </div>,
    },
    {
        key: '2',
        label: 'Nhóm',
        children: <div className=" list-noti custom-scrollbar ">
            <NoContent />
        </div>,
    },
    {
        key: '3',
        label: 'Công ty',
        children: <div className=" list-noti custom-scrollbar ">
            <NoContent />
        </div>,
    },
    {
        key: '4',
        label: 'Hệ thống',
        children: <div className=" list-noti custom-scrollbar ">
            <NoContent />
        </div>,
    },
];
const Tab = () => <Tabs className='flex justify-between items-center' defaultActiveKey="1" items={items} onChange={onChange} />;
export default Tab;