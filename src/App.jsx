import { useRef } from "react"
import moonImg from "./assets/moon.png"
import "./App.css"

export default function App() {
  const navRef = useRef(null)

  const menuToggle = () => {
    const menuIcon = document.getElementById("menu-icon")
    navRef.current.classList.toggle("open")
    menuIcon.classList.toggle("bx-x")
  }

  return (
    <>
      <header>
        <a href="/" className="logo">Lua</a>
        <nav ref={navRef} className="navbar">
          <ul className="nav-list">
            <li><a href="#" className="active">Home</a></li>
            <li><a href="#">Etimologia</a></li>
            <li><a href="#">Fases</a></li>
            <li><a href="#">Formação</a></li>
            <li><a href="#">Característica</a></li>
          </ul>
        </nav>
        <div onClick={menuToggle} className="bx bx-menu" id="menu-icon"></div>
      </header>

      <section className="home">
        <figure className="home-image">
          <img src={moonImg} alt="Main image" />
          <figcaption>A lua é o único satélite natural do planeta terra.</figcaption>
        </figure> 
        <main className="home-text">
          <h3>A Lua é um satélite natural, composta por três grandes camadas.</h3>
          <h1>Lua</h1>
          <p>A Lua é um corpo celeste localizado no Sistema Solar, mais precisamente nas proximidades da Terra, sendo o único satélite natural desse planeta.</p>
          <div className="descriptions">
            <div className="description">
              <h5>Distância</h5>
              <p><span>384.400</span> km</p>
            </div>
            <div className="description">
              <h5>Diâmetro</h5>
              <p><span>3.474,8</span> km</p>
            </div>
          </div>
        </main>
      </section>
    </>
  )
}