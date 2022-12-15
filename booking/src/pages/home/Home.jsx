import React from 'react'
import Featured from '../../components/featured/Featured'
import Header from '../../components/header/Header'
import Navbar from '../../components/navbar/Navbar'

const Home = () => {
  return (
    <div>
      <Header></Header>
      <div className="homeContainer">
        <Featured></Featured>
      </div>
    </div>
  )
}

export default Home