import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const SelectedDonations = ({ item }) => {
    let { card_bg_color, category_bg_color, category, id, picture, price, text_button_bg_color, title } = item
    return (
        <div className='flex flex-col lg:flex-row lg:justify-center lg:items-center 2xl:gap-5 justify-center border rounded-md ' style={{ backgroundColor: card_bg_color }}>
            <div className='h-full w-full lg:flex-1 '>
                <img className='w-full h-full lg:w-[18vw] rounded-l-md' src={picture} alt="image" />
            </div>
            <div className='space-y-1 mt-5 pl-5 lg:pl-0 pb-5 lg:pb-0 lg:mt-0  lg:flex-1 lg:pr-16'>
                <p className='font-semibold w-fit px-2 rounded-sm text-sm py-1' style={{ color: text_button_bg_color, backgroundColor: category_bg_color }}>{category}</p>
                <p className='font-bold lg:text-lg'>{title}</p>
                <p className='font-bold' style={{ color: text_button_bg_color }}>${price}</p>
                <Link to={`/${id}`}>
                    <button className='text-white px-3 py-2 rounded-md hover:-translate-y-[0.10rem] active:translate-y-[0.10rem]' style={{ backgroundColor: text_button_bg_color }}>View Details</button>
                </Link>

            </div>
        </div>
    )
}

SelectedDonations.propTypes = {
    item: PropTypes.object,
}
export default SelectedDonations