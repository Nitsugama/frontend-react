import React from 'react'
import Header from "../layout/Header"
import Footer from "../layout/Footer"
import Sidebar from "../layout/Sidebar"
import Content from "../layout/Content"


const Home = () => {
  return (
    <>
        <Header /> 
            <div id="main">
                <Sidebar />
                <Content />
            </div>
        <Footer />
    </>
  )
}

export default Home