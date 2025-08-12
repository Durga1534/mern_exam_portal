import {Routes, Route } from 'react-router-dom'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Home from './pages/Homepage'
import ExamPage from './pages/ExamPage'
import ResultPage from './pages/ResultPage'

const App = () => {
  return (
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/exam" element={<ExamPage />} />
        <Route path="/result" element={<ResultPage />} />
      </Routes>
  )
}

export default App
