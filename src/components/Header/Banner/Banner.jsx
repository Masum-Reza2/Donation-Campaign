import './Banner.css'
import PropTypes from 'prop-types';

const Banner = ({ handleChange, handleBtn }) => {


    return (
        <div className="h-[70vh] bg-[#0B0B0B80] flex flex-col items-center justify-center rounded-md">
            <div className='space-y-5'>
                <h1 className='font-bold text-xl md:text-2xl text-center'>I Grow By Helping People In Need</h1>
                <div className='flex flex-col md:flex-row md:gap-0 items-center gap-2 justify-center'>
                    <input onChange={handleChange} className='py-1 text-center rounded-sm focus:outline-none placeholder:text-center md:placeholder:text-start md:placeholder:px-2' type="text" placeholder='search here' />
                    <button onClick={handleBtn} className='text-white bg-[#FF444A] px-3 py-1 rounded-md md:rounded-none md:rounded-r-md hover:-translate-y-[0.10rem] active:translate-y-[0.10rem]'>Search</button>
                </div>

            </div>
        </div>
    )
}


Banner.propTypes = {
    handleChange: PropTypes.func,
    handleBtn: PropTypes.func,
}
export default Banner