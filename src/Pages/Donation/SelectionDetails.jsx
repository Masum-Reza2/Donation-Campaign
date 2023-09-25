import { useContext, useEffect, useState } from "react"
import { donationsContext } from "../../MainLayOut/MainLayOut"
import { useParams } from "react-router-dom"

const SelectionDetails = () => {
    const [showingElement, setShowingElement] = useState({})
    let { picture, price, title, description } = showingElement
    const detailElement = useContext(donationsContext)
    const { detailsId } = useParams()

    useEffect(() => {
        let requiredElement = detailElement.find(item => item.id === detailsId)
        setShowingElement(requiredElement)
    }, [])

    return (
        <div>
            <div className="w-[50vw] mx-auto">
                <img className="h-full w-full" src={picture} alt="" />
            </div>
        </div>
    )
}

export default SelectionDetails