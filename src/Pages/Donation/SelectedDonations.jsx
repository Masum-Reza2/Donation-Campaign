import PropTypes from 'prop-types';

const SelectedDonations = ({ item }) => {
    let { card_bg_color, category, id, picture, price, text_button_bg_color, title } = item
    return (
        <div className='flex flex-col lg:flex-row lg:justify-normal lg:items-center justify-center border rounded-md' style={{ backgroundColor: card_bg_color }}>
            <div>
                <img className='w-full h-full lg:w-[80%]' src={picture} alt="" />
            </div>
            <div className='space-y-1 mt-5 pl-5 lg:pl-0 pb-5 lg:pb-0 lg:mt-0 lg:-translate-x-10'>
                <p className='font-semibold w-fit px-2 rounded-sm' style={{color:text_button_bg_color, backgroundColor:card_bg_color}}>{category}</p>
                <p className='font-bold xl:text-xl'>{title}</p>
                <p className='font-bold' style={{color:text_button_bg_color}}>${price}</p>
                <button className='text-white px-3 py-2 rounded-md hover:-translate-y-[0.10rem] active:translate-y-[0.10rem]' style={{backgroundColor:text_button_bg_color}}>View Details</button>
            </div>
        </div>
    )
}

SelectedDonations.propTypes = {
    item: PropTypes.object,
}
export default SelectedDonations