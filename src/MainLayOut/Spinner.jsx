import { Vortex } from "react-loader-spinner"

const Spinner = () => {
    return (
        <div>
            <Vortex
                visible={true}
                height="130"
                width="130"
                ariaLabel="vortex-loading"
                wrapperStyle={{}}
                wrapperClass="vortex-wrapper"
                colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']}
            />
        </div>
    )
}

export default Spinner