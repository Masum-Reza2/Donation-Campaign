import { useLoaderData } from "react-router-dom"
import Banner from "../../components/Header/Banner/Banner"
import Rights from "../../components/Rights/Rights"

const Home = () => {

  const donations = useLoaderData()

  return (
    <div>
      <Banner />
      <Rights donations={donations} />
    </div>
  )
}

export default Home