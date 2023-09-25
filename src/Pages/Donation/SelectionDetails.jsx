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
            <div className="w-full mx-auto py-5 relative">
                <img className="h-full w-full" src={picture} alt="" />
                <div className="bg-[#0B0B0B80] w-full h-[25%] md:h-[20%] absolute bottom-5 flex items-center">
                    <button className="text-white bg-[#FF444A] ml-6 px-3 py-1 rounded-sm hover:-translate-y-[0.10rem] active:translate-y-[0.10rem]">Donate ${price}</button>
                </div>
            </div>
            <div className="space-y-3 pb-5">
                <h1 className="font-bold text-xl md:text-2xl">{title}</h1>
                <p className="text-justify">{description}</p>
            </div>
        </div>
    )
}

export default SelectionDetails