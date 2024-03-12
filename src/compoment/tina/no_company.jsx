import bot from '../../assets/img/bot.png'

function NoCompany() {
    return (
        <div className="no-company">
            <img src={bot} alt="Bot" width="160" height="180" decoding="async" loading="lazy" style={{ color: "transparent" }} />
            <div className="ml-7 pt-5 ">
                <div className="title__no-company mt-5">
                    Trang chủ của bạn đang được theo dõi và cập nhật
                </div>
                <div className="des__no-comapny mt-5">
                    Khi các thành viên ở các không gian làm việc để lại bình luận hay thả cảm xúc vào bảng công việc, tiến độ dự án hay các hoạt động quan trọng trọng khác sẽ được hiện thị ở đây.
                </div>
            </div>
        </div>
    )
}

export default NoCompany;