import NoCompany from "./no_company";

function MainContent({ collapsed }) {
    return (
        <div className={`main has-navbar has-sidebar ${!collapsed ? "sidebar-open" : ""}`}>
            <div className=" content ">
                <NoCompany />
            </div>
        </div>
    )
}

export default MainContent;