import './Banner.css'

const Banner = () => {
    return (
        <div className="h-[60vh] bg-gray-400 flex flex-col items-center justify-center rounded-md">
            <div className='space-y-5'>
                <h1 className='font-bold text-xl md:text-2xl text-center'>I Grow By Helping People In Need</h1>
                <div className='flex flex-col md:flex-row md:gap-0 items-center gap-2 justify-center'>
                    <input className='py-1 rounded-sm focus:outline-none placeholder:text-center md:placeholder:text-start md:placeholder:px-2' type="text" placeholder='search here' />
                    <button className='text-white bg-[#FF444A] px-3 py-1 rounded-md md:rounded-none md:rounded-r-md'>Search</button>
                </div>
            </div>
        </div>
    )
}

export default Banner