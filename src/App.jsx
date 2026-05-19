import { BrowserRouter, Route, Routes } from "react-router-dom"
import Homepage from "./pages/Homepage"
import ChiSiamo from "./pages/ChiSiamo"
function App() {


  return (
    <>
      <BrowserRouter>
      <Routes>
      <Route path="/" element= {<Homepage />}/>
      <Route path="/ChiSiamo" element= {<ChiSiamo />} />


      

      </Routes>
      
      </BrowserRouter>
    </>
  )
}

export default App
