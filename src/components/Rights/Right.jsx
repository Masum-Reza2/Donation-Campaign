import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Right = ({ right }) => {
    let { id, picture, category, title, card_bg_color, text_button_bg_color, category_bg_color } = right;


    return (
        <Link to={`/${id}`}>
            <div className={`space-y-3 border pb-3 rounded-md transition-all duration-100 hover:-translate-y-1 cursor-pointer active:scale-105`} style={{ backgroundColor: card_bg_color }}>
                <div>
                    <img className='h-full md:h-[30vh] w-full' src={picture} alt="" />
                </div>
                <div className='space-y-1 font-bold pl-3' style={{ color: text_button_bg_color }}>
                    <p className={`py-1 px-3 w-fit rounded-md text-sm`} style={{ backgroundColor: category_bg_color }}>{category}</p>
                    <p>{title}</p>
                </div>
            </div>
        </Link>
    )
}

Right.propTypes = {
    right: PropTypes.object,
}
export default Right