import Header from "./Header"
import Footer from "./Footer"
import Sidebar from "./Sidebar"
import Content from "./Content"

import "./App.css"

const App = () => {
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

export default App