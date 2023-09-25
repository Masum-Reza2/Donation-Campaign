import Banner from "../../components/Header/Banner/Banner"
import Rights from "../../components/Rights/Rights"
import { useContext } from "react"
import { donationsContext } from "../../MainLayOut/MainLayOut"

const Home = () => {

  const donations = useContext(donationsContext)

  return (
    <div>
      <Banner />
      <Rights donations={donations} />
    </div>
  )
}

export default Home