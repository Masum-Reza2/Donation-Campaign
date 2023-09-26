import Banner from "../../components/Header/Banner/Banner"
import Rights from "../../components/Rights/Rights"
import { useContext, useState } from "react"
import { donationsContext } from "../../MainLayOut/MainLayOut"

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = () => {
  const donations = useContext(donationsContext)

  const [searchText, setSearchText] = useState('')
  const [toggleDep, setTogDep] = useState(true)

  const handleChange = (e) => {
    setSearchText(e.target.value)
  }
  const handleBtn = () => {
    setTogDep(!toggleDep)

    !searchText && toast.info('Write something first!', {
      position: "top-right",
      autoClose: 2500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    })
  }

  return (
    <div>
      <Banner handleChange={handleChange} handleBtn={handleBtn} />
      <Rights donations={donations} searchText={searchText} toggleDep={toggleDep} />

      <ToastContainer
        position="top-right"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  )
}

export default Home