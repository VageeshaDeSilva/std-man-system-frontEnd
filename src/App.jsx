import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import AddStudent from './components/AddStudent'
import AboutUs from './pages/AboutUs'
import Home from './pages/Home'
import Student from './pages/Student'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
      <BrowserRouter>
        <div>
          <Header />
          <Routes>
            <Route path='/' element={< Home/>} />
            <Route path='/student' element={< Student/>} />
            <Route path='/about' element={<AboutUs/>} />
            <Route path='/addStudent' element={<AddStudent/>} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
