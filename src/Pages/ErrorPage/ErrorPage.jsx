import { Link, useRouteError } from "react-router-dom"

const ErrorPage = () => {
    const error = useRouteError()
    return (
        <div className="h-screen flex items-center justify-center ">
            <div className="p-5 shadow-md shadow-gray-500 space-y-3 text-center rounded-md">
                <h1 className="text-red-700 font-bold md:text-2xl">Oops something Wrong!!!</h1>
                <p>
                    <i>{error.statusText || error.message}</i>
                </p>

                <div>
                    <Link to={'/'}>
                        <button className="px-3 py-1 shadow-md shadow-gray-500 rounded-sm hover:-translate-y-[0.10rem] active:translate-y-[0.10rem]">Goto Home</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ErrorPage