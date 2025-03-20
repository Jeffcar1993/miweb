import { Link } from "react-router-dom"

const Header = () => {
  return (
    <header className="bg-gray-900 text-white p-4">
        <nav>
            <h1>Bienvenidos a mi web</h1>
            <ul>
                <li><Link to="/">Acerca de mi</Link></li>
                <li><Link to="/proyectos">Proyectos</Link></li>
                <li><Link to="/noticias">Noticias</Link></li>
                <li><Link to="/en-vivo">Transmisión en vivo</Link></li>
                <li><Link to="/contactame">Contactame</Link></li>
            </ul>
        </nav>
    </header>
  )
}

export default Header