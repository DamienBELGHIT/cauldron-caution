import Arrow from "../../assets/img/Arrow.png"
import BGTitle from "../../assets/img/TitleCard.png"
import PropTypes from "prop-types"
import { useState } from "react"
import "./index.css"

function TinyCarousel({ slides }) {
  const [slideIndex, setSlideIndex] = useState(0)
  return (
    <div className="tiny-carousel">
      <a
        onClick={() =>
          setSlideIndex(slideIndex != 0 ? slideIndex - 1 : slides.length - 1)
        }
        className="arrow-btn mirrored"
      >
        <img src={Arrow} />
      </a>
      <div>
        <div className="centerImg">
          <img src={slides[slideIndex]["img"]} />
        </div>
        <span className="carousel-title">
          <img src={BGTitle} />
          <h3>{slides[slideIndex]["title"]}</h3>
        </span>
        <p>{slides[slideIndex]["description"]}</p>
      </div>
      <a
        onClick={() => setSlideIndex((slideIndex + 1) % slides.length)}
        className="arrow-btn"
      >
        <img src={Arrow} />
      </a>
    </div>
  )
}

TinyCarousel.propTypes = {
  slides: PropTypes.array,
}

export default TinyCarousel
