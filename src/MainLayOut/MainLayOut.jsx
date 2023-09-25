import { Outlet, useNavigation } from "react-router-dom"
import Navbar from "../components/Header/Navbar"
import Spinner from "./Spinner";

const MainLayOut = () => {
    const navigation = useNavigation();

    return (
        <div className="w-[90%] mx-auto">
            <Navbar />
            <div className="min-h-[80vh]">
                {
                    navigation.state === 'loading' ?
                        <div className="h-[80vh] flex items-center justify-center"><Spinner /></div>
                        :
                        <Outlet />
                }
            </div>
        </div>
    )
}

export default MainLayOut