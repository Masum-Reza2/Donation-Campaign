import PropTypes from 'prop-types';
import Right from './Right';
import { useEffect, useState } from 'react';


const Rights = ({ donations, searchText, toggleDep }) => {
    const [health, setHealth] = useState([])
    const [education, setEducation] = useState([])
    const [food, setFood] = useState([])
    const [cloth, setCloth] = useState([])

    const [displayDonation, setDisplayDonation] = useState([])

    useEffect(() => {
        let healthDonation = donations.filter(item => item.category.includes('Health'))
        setHealth(healthDonation)

        let eduDonation = donations.filter(item => item.category.includes('Education'))
        setEducation(eduDonation)

        let foodDonation = donations.filter(item => item.category.includes('Food'))
        setFood(foodDonation)

        let clothDonation = donations.filter(item => item.category.includes('Clothing'))
        setCloth(clothDonation)

        setDisplayDonation(donations)

        if (searchText === 'health'.toLowerCase() || searchText === 'health'.toUpperCase() || searchText === 'Health') {
            setDisplayDonation(health)
        }
        else if (searchText === 'education'.toLowerCase() || searchText === 'education'.toUpperCase() || searchText === 'Education') {
            setDisplayDonation(education)
        }
        else if (searchText === 'food'.toLowerCase() || searchText === 'food'.toUpperCase() || searchText === 'Food') {
            setDisplayDonation(food)
        }
        else if (searchText === 'cloth'.toLowerCase() || searchText === 'cloth'.toUpperCase() || searchText === 'cloth') {
            setDisplayDonation(cloth)
        }
        else if (searchText !== 'ZogaKhichuri') {
            setDisplayDonation(donations)
        }


    }, [toggleDep])


    return (
        <>
            <div className="py-5 grid gap-5 grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
                {
                    displayDonation.map(right => <Right key={right.id} right={right} />)
                }
            </div>
        </>
    )
}

Rights.propTypes = {
    donations: PropTypes.array,
    searchText: PropTypes.string,
    toggleDep: PropTypes.bool,
}

export default Rights