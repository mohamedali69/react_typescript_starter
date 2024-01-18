import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import FetchingData from './components/FetchingData'
import Hooks from './components/Hooks'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hooks/>} />
        <Route path="/fetching" element={<FetchingData/>} />
        
      </Routes>
    </Router>
  )
}

export default App
