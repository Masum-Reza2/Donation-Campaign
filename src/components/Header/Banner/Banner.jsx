import PropTypes from 'prop-types';
import bannerBg from '../../../../src/assets/Resources/doctors.jpg'

const Banner = ({ handleChange, handleBtn }) => {


    return (
        <div className="h-[50vh] md:h-[70vh] w-[100%]  flex flex-col items-center justify-center rounded-md relative">
            <img className='h-[50vh] absolute md:h-[70vh] top-0 -z-10 opacity-10 w-fit' src={bannerBg} alt="" />

            <div className='space-y-5'>
                <h1 className='font-bold text-xl md:text-4xl text-center'>I Grow By Helping People In Need</h1>
                <div className='flex flex-col md:flex-row md:gap-0 items-center gap-2 justify-center'>
                    <input onChange={handleChange} className='py-2 text-center rounded-md md:rounded-none md:rounded-l-md focus:outline-none placeholder:text-center md:placeholder:text-start md:placeholder:px-2 border' type="text" placeholder='search here' />
                    <button onClick={handleBtn} className='text-white bg-[#FF444A] px-3 py-2 rounded-md md:rounded-none md:rounded-r-md hover:-translate-y-[0.10rem] active:translate-y-[0.10rem]'>Search</button>
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