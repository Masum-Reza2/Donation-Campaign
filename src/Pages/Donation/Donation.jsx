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
  }, [toggleBtn])

  return (
    <>
      <div className="grid gap-5 grid-cols-1 md:grid-cols-2 py-5">
        {
          allSelections.slice(0, displayLength).map((item,index) => <SelectedDonations key={index} item={item} />)
        }
      </div>

      <div className="text-center pb-5">
        {
          allSelections.length > 0 ?
            <div>
              {toggleBtn &&
                allSelections.length > 4 && <button className="bg-[#009444] text-white font-semibold px-3 py-1 rounded-md hover:-translate-y-[0.10rem] active:translate-y-[0.10rem]" onClick={handleSeeAll}>See All</button>
              }
            </div> : <div className="h-[50vh] flex flex-col items-center justify-center">
              <p className="font-bold text-lg md:text-2xl" style={{textShadow:'1px 1px 1px red'}}>No donations yet, please help the needy...</p>
              <p className="text-2xl md:text-5xl animate-bounce mt-5">❤️</p>
            </div>
        }

      </div>
    </>
  )
}

export default Donation