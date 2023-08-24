import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from './components/pages/Home';
import Page404 from './components/pages/Page404'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="*" element={<Page404/>}/>
    </Routes>
  )
}

export default App