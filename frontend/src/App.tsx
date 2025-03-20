import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Proyectos from './pages/Proyectos'
import Noticias from './pages/Noticias'
import Live from './pages/Live'
import Contactame from './pages/Contactame'


function App() {

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/proyectos" element={<Proyectos />} />
            <Route path="/noticias" element={<Noticias />} />
            <Route path="/en-vivo" element={<Live />} />
            <Route path="/contactame" element={<Contactame />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
