import { CaretRightOutlined, RightOutlined } from '@ant-design/icons';
import { Collapse, theme } from 'antd';
import { useState } from 'react';


const Collapse_1 = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    const getItems = (panelStyle) => [
        {
            key: '1',
            label:
                <div className="header-colapse flex px-5 justify-between">
                    <p className='header-colapse-text text-base leading-5 not-italic font-bold flex items-center'>MYS có dễ dàng sử dụng không?</p>
                    <RightOutlined id='icon-colapse' style={{
                        fontSize: "19px",
                        color: isExpanded ? "#eef4fe" : "#2a6df5",
                        backgroundColor: isExpanded ? "#2a6df5" : "#eef4fe",
                        borderRadius: "50%",
                        padding: "10px",
                        marginright: "38px",
                        transform: isExpanded ? "rotate(90deg)" : "rotate(0deg)",
                    }}
                    />
                </div>,
            children: <p className='px-5'>Ứng dụng hoàn toàn thân thiện với người dùng, các tính năng được bố trí rõ ràng, logic giúp người dùng dễ dàng tương tác. Đội ngũ hỗ trợ 24/7 sẵn sàng giải đáp mọi thắc mắc của người dùng.</p>,
            style: panelStyle,
            showArrow: false,
        },

    ];

    const { token } = theme.useToken();
    const panelStyle = {
        marginBottom: 24,
        background: "#fff",
        borderRadius: token.borderRadiusLG,
        border: 'none',
    };

    return (
        <Collapse
            bordered={false}
            onChange={handleExpand}
            expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
            style={{
                background: token.colorBgContainer,
            }}
            items={getItems(panelStyle)}
        />
    );
};

const Collapse_2 = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    const getItems = (panelStyle) => [
        {
            key: '1',
            label:
                <div className="header-colapse flex px-5 justify-between">
                    <p className='header-colapse-text text-base leading-5 not-italic font-bold flex items-center'>MYS có trên những nền tảng nào?</p>
                    <RightOutlined id='icon-colapse' style={{
                        fontSize: "19px",
                        color: isExpanded ? "#eef4fe" : "#2a6df5",
                        backgroundColor: isExpanded ? "#2a6df5" : "#eef4fe",
                        borderRadius: "50%",
                        padding: "10px",
                        marginright: "38px",
                        transform: isExpanded ? "rotate(90deg)" : "rotate(0deg)",
                    }}
                    />
                </div>,
            children: <p className='px-5'>MYS đã sẵn sàng được sử dụng trên web và có mặt tại ứng dụng Android & IOS.</p>,
            style: panelStyle,
            showArrow: false,
        },

    ];

    const { token } = theme.useToken();
    const panelStyle = {
        marginBottom: 24,
        background: "#fff",
        borderRadius: token.borderRadiusLG,
        border: 'none',
    };

    return (
        <Collapse
            bordered={false}
            onChange={handleExpand}
            expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
            style={{
                background: token.colorBgContainer,
            }}
            items={getItems(panelStyle)}
        />
    );
};

const Collapse_3 = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    const getItems = (panelStyle) => [
        {
            key: '1',
            label:
                <div className="header-colapse flex px-5 justify-between">
                    <p className='header-colapse-text text-base leading-5 not-italic font-bold flex items-center'>Tính năng chính của MYS?</p>
                    <RightOutlined id='icon-colapse' style={{
                        fontSize: "19px",
                        color: isExpanded ? "#eef4fe" : "#2a6df5",
                        backgroundColor: isExpanded ? "#2a6df5" : "#eef4fe",
                        borderRadius: "50%",
                        padding: "10px",
                        marginright: "38px",
                        transform: isExpanded ? "rotate(90deg)" : "rotate(0deg)",
                    }}
                    />
                </div>,
            children: <p className='px-5'>Xác lập, quản lý mục tiêu, người tham gia và dễ dàng theo dõi tiến độ, nhận thông báo mỗi khi có cập nhật, can thiệp kịp thời.</p>,
            style: panelStyle,
            showArrow: false,
        },

    ];

    const { token } = theme.useToken();
    const panelStyle = {
        marginBottom: 24,
        background: "#fff",
        borderRadius: token.borderRadiusLG,
        border: 'none',
    };

    return (
        <Collapse
            bordered={false}
            onChange={handleExpand}
            expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
            style={{
                background: token.colorBgContainer,
            }}
            items={getItems(panelStyle)}
        />
    );
};

const Collapse_4 = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    const getItems = (panelStyle) => [
        {
            key: '1',
            label:
                <div className="header-colapse flex px-5 justify-between">
                    <p className='header-colapse-text text-base leading-5 not-italic font-bold flex items-center'>Những ưu điểm của MYS?</p>
                    <RightOutlined id='icon-colapse' style={{
                        fontSize: "19px",
                        color: isExpanded ? "#eef4fe" : "#2a6df5",
                        backgroundColor: isExpanded ? "#2a6df5" : "#eef4fe",
                        borderRadius: "50%",
                        padding: "10px",
                        marginright: "38px",
                        transform: isExpanded ? "rotate(90deg)" : "rotate(0deg)",
                    }}
                    />
                </div>,
            children: <p className='px-5'>Dễ sử dụng và tiện lợi, hỗ trợ trên mọi nền tảng, chi phí thấp, hiệu quả sử dụng cao và được hỗ trợ công nghệ AI</p>,
            style: panelStyle,
            showArrow: false,
        },

    ];

    const { token } = theme.useToken();
    const panelStyle = {
        marginBottom: 24,
        background: "#fff",
        borderRadius: token.borderRadiusLG,
        border: 'none',
    };

    return (
        <Collapse
            bordered={false}
            onChange={handleExpand}
            expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
            style={{
                background: token.colorBgContainer,
            }}
            items={getItems(panelStyle)}
        />
    );
};

export { Collapse_1, Collapse_2, Collapse_3, Collapse_4 };