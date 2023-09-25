import PropTypes from 'prop-types';
import Right from './Right';

const Rights = ({ donations }) => {
    return (
        <>
            <div className="py-5 grid gap-5 grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
                {
                    donations.map(right => <Right key={right.id} right={right} />)
                }
            </div>
        </>
    )
}

Rights.propTypes = {
    donations: PropTypes.array,
}

export default Rights