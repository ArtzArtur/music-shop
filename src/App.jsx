import TheHeader from "./components/TheHeader"
import {Routes,Route} from 'react-router-dom'
import CartView from './components/CartView'
import Home from "./components/Home"
import TheFooter from "./components/TheFooter"

function App() {
  return (
    <div className="App">
      <TheHeader />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="CartView" element={<CartView />} ></Route>
      </Routes>
      <TheFooter />
    </div>
  )
}

export default App
