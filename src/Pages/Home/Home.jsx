import Banner from "../../components/Header/Banner/Banner"
import Rights from "../../components/Rights/Rights"
import { useContext, useState } from "react"
import { donationsContext } from "../../MainLayOut/MainLayOut"

const Home = () => {
  const donations = useContext(donationsContext)

  const [searchText, setSearchText] = useState('')
  const [toggleDep, setTogDep] = useState(true)

  const handleChange = (e) => {
    setSearchText(e.target.value)
  }
  const handleBtn = () => {
    setTogDep(!toggleDep)
  }

  return (
    <div>
      <Banner handleChange={handleChange} handleBtn={handleBtn} />
      <Rights donations={donations} searchText={searchText} toggleDep={toggleDep} />
    </div>
  )
}

export default Home