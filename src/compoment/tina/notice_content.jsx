import NoData from '../../assets/img/NoData.png'


function NoContent() {
    return (
        <div className=" noti-empty p-5 flex flex-col justify-center items-center ">
            <div className=" empty-img ">
                <img src={NoData} style={{
                    height: "100px",
                    marginBottom: "8px",
                    objectFit: "cover",
                }} loading='lazy' alt="No data" />
                <div className="empty-des">
                    Không có dữ liệu
                </div>
            </div>

        </div>
    )
}
export { NoContent };