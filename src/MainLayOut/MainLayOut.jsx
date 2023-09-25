import { Outlet, useLoaderData, useNavigation } from "react-router-dom"
import Navbar from "../components/Header/Navbar"
import Spinner from "./Spinner";
import { createContext } from "react";
export const donationsContext = createContext()

const MainLayOut = () => {

    const navigation = useNavigation();
    const donations = useLoaderData()

    return (
        <donationsContext.Provider value={donations}>
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
        </donationsContext.Provider>
    )
}

export default MainLayOut