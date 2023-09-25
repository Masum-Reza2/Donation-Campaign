import { Outlet } from "react-router-dom"

const MainLayOut = () => {
    return (
        <div className="w-[90%] mx-auto">
            navbar here
            <div className="min-h-[80vh]">
                <Outlet />
            </div>
        </div>
    )
}

export default MainLayOut