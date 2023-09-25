import { useContext, useEffect, useState } from "react"
import { donationsContext } from "../../MainLayOut/MainLayOut"
import { getStoredData } from "../../Utilities/LocalStorage"
import SelectedDonations from "./SelectedDonations";

const Donation = () => {
  const [allSelections, setAllSelections] = useState([]);

  const donationsData = useContext(donationsContext)
  const savedIds = getStoredData()

  useEffect(() => {
    let selectedDonations = []
    savedIds.forEach(element => {
      let selections = donationsData.find(item => item.id === element);
      selectedDonations.push(selections)
    })
    setAllSelections(selectedDonations)
  }, [])

  return (
    <div className="grid gap-5 grid-cols-1 md:grid-cols-2 py-5">
      {
        allSelections.map(item => <SelectedDonations key={item.id} item={item} />)
      }
    </div>
  )
}

export default Donation