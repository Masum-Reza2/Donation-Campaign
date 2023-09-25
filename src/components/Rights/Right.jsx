import PropTypes from 'prop-types';

const Right = ({ right }) => {
    let { id, picture, category, title, card_bg_color, text_button_bg_color } = right

    return (
        <div className={`space-y-3 border pb-3 rounded-md`} style={{backgroundColor:card_bg_color}}>
            <div>
                <img src={picture} alt="" />
            </div>
            <div className='space-y-1 font-bold pl-3' style={{color:text_button_bg_color}}>
                <p className={`py-1 px-3 w-fit rounded-md text-sm`} style={{backgroundColor:card_bg_color}}>{category}</p>
                <p>{title}</p>
            </div>
        </div>
    )
}

Right.propTypes = {
    right: PropTypes.object,
}
export default Right