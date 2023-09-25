import { Outlet } from "react-router-dom"
import Navbar from "../components/Header/Navbar"

const MainLayOut = () => {
    return (
        <div className="w-[90%] mx-auto">
            <Navbar />
            <div className="min-h-[80vh]">
                <Outlet />
            </div>
        </div>
    )
}

export default MainLayOut