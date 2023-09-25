import { useContext, useEffect, useState } from "react"
import { donationsContext } from "../../MainLayOut/MainLayOut"
import { getStoredData } from "../../Utilities/LocalStorage"
import SelectedDonations from "./SelectedDonations";

const Donation = () => {
  const [allSelections, setAllSelections] = useState([]);
  const [displayLength, setLength] = useState(4)
  const [toggleBtn, setToggleBtn] = useState(true)

  const donationsData = useContext(donationsContext)
  const savedIds = getStoredData()

  const handleSeeAll = () => {
    setLength(allSelections.length)
    setToggleBtn(!toggleBtn)
  }

  useEffect(() => {
    let selectedDonations = []
    savedIds.forEach(element => {
      let selections = donationsData.find(item => item.id === element);
      selectedDonations.push(selections)
    })
    setAllSelections(selectedDonations)
  }, [])

  return (
    <>
      <div className="grid gap-5 grid-cols-1 md:grid-cols-2 py-5">
        {
          allSelections.slice(0, displayLength).map(item => <SelectedDonations key={item.id} item={item} />)
        }
      </div>

      <div className="text-center pb-5">
        {toggleBtn &&
          allSelections.length > 4 && <button className="bg-[#009444] text-white font-semibold px-3 py-1 rounded-md hover:-translate-y-[0.10rem] active:translate-y-[0.10rem]" onClick={handleSeeAll}>See All</button>
        }
      </div>
    </>
  )
}

export default Donation