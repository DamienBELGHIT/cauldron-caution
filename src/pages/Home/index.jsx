import Logo from "../../assets/img/Logo.png"
import BGUp2 from "../../assets/img/FrontRow.png"
import ShylaConfused from "../../assets/img/Confused.png"
import AustinConfused from "../../assets/img/AutinConfused.png"
import ShylaHungry from "../../assets/img/Hungry.png"
import Austin from "../../assets/img/AustinIdle.png"
import ShmuckCard from "../../assets/img/ShmuckCard.png"
import CurlyLanternCard from "../../assets/img/CurlyLanternCard.png"
import NoteIcon from "../../assets/img/Note.png"
import { FaDiscord } from "react-icons/fa"
import medias from "../../assets/data/medias"

import { FaSteam } from "react-icons/fa"

import CauldronTitle from "../../components/CauldronTitle"
import TinyCarousel from "../../components/TinyCarousel"
import MediaGrid from "../../components/MediaGrid"
import { Link } from "react-router-dom"
import { useLocation } from "react-router-dom"
import { useEffect } from "react"

import "./index.css"

function Home() {
  const { state } = useLocation()
  const { targetId } = state || {}

  useEffect(() => {
    medias.features.forEach((picture) => {
      const img = new Image()
      img.src = picture.img
    })
  }, [])

  useEffect(() => {
    const el = document.getElementById(targetId)
    if (el) {
      el.scrollIntoView()
    }
  }, [targetId])

  return (
    <div id="main-section">
      <img id="logo" src={Logo} />
      <div id="up-section">
        <a
          className="green-btn icon-btn"
          href="https://store.steampowered.com/app/2991890/Cauldron_Caution/"
        >
          TRY OUT THE DEMO !<FaSteam />
        </a>
        <img className="topImg" src={BGUp2} />
        <div className="parallax"></div>
      </div>
      <section id="about">
        <CauldronTitle
          title="ABOUT"
          leftImg={ShylaConfused}
          rightImg={AustinConfused}
        />
        <article id="summary">
          <img className="cardShowcase" src={ShmuckCard} />
          <div>
            <h3>
              PREPARE MAGIC SOUPS AND SUMMON ODD LITTLE CREATURES IN CAULDRON
              CAUTION, A TACTICAL CARD GAME MIXED WITH A POINT & CLICK ADVENTURE
              !
            </h3>
            <p>
              Shyla the Shyder is a strange pink insect lady that only seems to
              fall from one predator to the next. Until one day, she finds the
              opportunity to fight back by summoning strange creatures to her
              side while cooking dubious magic recipes with her trusty cauldron
              ! But she’s got a long way to go to get accepted in the Cauldron
              Union...
            </p>
          </div>
          <img className="cardShowcase" src={CurlyLanternCard} />
        </article>
        <article id="features">
          <h3>-FEATURES-</h3>
          <TinyCarousel slides={medias.features} />
        </article>
      </section>
      <section id="medias">
        <CauldronTitle title="MEDIAS" leftImg={ShylaHungry} rightImg={Austin} />
        <div className="trailer">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/M-c0bEh99AY?si=xzlhSjlMohEkHeK7"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <MediaGrid medias={medias.gallery} />
      </section>
      <section id="downPage">
        <div className="BG"></div>
        <Link className="green-btn icon-btn" to="/presskit">
          <img src={NoteIcon} />
          Presskit available here
        </Link>
        <a
          href="https://discord.com/invite/kvt4j6gv4u"
          className="discord-btn icon-btn"
        >
          JOIN THE DISCORD ! <FaDiscord />
        </a>
        <a
          className="green-btn icon-btn"
          href="https://store.steampowered.com/app/2991890/Cauldron_Caution/"
        >
          TRY OUT THE DEMO !<FaSteam />
        </a>
      </section>
    </div>
  )
}

export default Home
