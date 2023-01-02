import React, { useContext } from 'react'
import { FaBars } from 'react-icons/fa'
import { AppContext, UseGlobalContext } from './context'

const Home = () => {
  // const data = useContext(AppContext)
  const { openSidebar, openModal } = UseGlobalContext()

  return (
    <main>
      <button className="sidebar-toggle" onClick={openSidebar}>
        <FaBars />
      </button>
      <button className="btn" onClick={openModal}>
        show modal
      </button>
    </main>
  )
}

export default Home
