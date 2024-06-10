import { Outlet, Link } from "react-router-dom"
import logoTxt from "../../assets/img/LogoTxt.png"
import {
  FaSteam,
  FaDiscord,
  FaTwitter,
  FaTiktok,
  FaItchIo,
} from "react-icons/fa"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import { FaBars } from "react-icons/fa"
import "./socials.css"
import "./header.css"
import "./footer.css"

function Layout() {
  const [navVisible, setNavVisible] = useState(false)
  const navigate = useNavigate()

  return (
    <div>
      <header>
        <div>
          <div className="logo">
            <Link to="/">
              <img src={logoTxt} alt="Logo" />
            </Link>
          </div>
          <div
            className="burger-menu"
            onClick={() => setNavVisible(!navVisible)}
          >
            {navVisible ? "X" : <FaBars />}
          </div>
        </div>
        <nav className={"nav-btns" + (navVisible ? "" : " mobile-hidden")}>
          <ul>
            <li>
              <a
                onClick={() => {
                  navigate("/", { state: { targetId: "about" } })
                }}
              >
                ABOUT
              </a>
            </li>
            <li>
              <a
                onClick={() => {
                  navigate("/", { state: { targetId: "medias" } })
                }}
              >
                MEDIAS
              </a>
            </li>
            <li>
              <Link to="/presskit">PRESSKIT</Link>
            </li>
          </ul>
        </nav>
        <a
          className="green-btn icon-btn"
          href="https://store.steampowered.com/app/2991890/Cauldron_Caution/"
        >
          TRY OUT THE DEMO !<FaSteam />
        </a>
      </header>

      <div id="socials">
        <a href="https://discord.com/invite/kvt4j6gv4u">
          <FaDiscord />
        </a>
        <a href="https://twitter.com/Poishicha">
          <FaTwitter />
        </a>
        <a href="https://www.tiktok.com/@poisheesha">
          <FaTiktok />
        </a>
        <a href="https://store.steampowered.com/app/2991890/Cauldron_Caution/">
          <FaSteam />
        </a>
        <a href="https://poishiche.itch.io/cauldron-caution">
          <FaItchIo />
        </a>
      </div>
      <Outlet />
      <footer>
        <img src={logoTxt} alt="LogoText" />
        <span>A game by Poisheesh !</span>
        <span>
          ✉ poishee
          <span className="blockspam" aria-hidden="true">
            PLEASE GO AWAY!
          </span>
          sh@
          <span className="blockspam" aria-hidden="true">
            PLEASE GO AWAY!
          </span>
          outlook.com
        </span>
      </footer>
    </div>
  )
}

export default Layout
