import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import About from './pages/about/About'
import Homepage from './pages/homepage/Homepage'
import AppNavBar from './components/appNavBar/AppNavBar'

function App() {

  return (
    <div className="App">
    <Router basename='/myPortfoliov2/'>
      <AppNavBar />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </Router>
    </div>
  )
}

export default App
