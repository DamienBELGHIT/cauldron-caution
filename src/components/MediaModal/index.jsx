import { useState, useEffect } from "react"
import Arrow from "../../assets/img/Arrow.png"
import PropTypes from "prop-types"
import "./index.css"

function MediaModal({ visibility, setVisibility, medias, mediaIndex }) {
  const [page, setPage] = useState(0)

  const previousPage = () =>
    setPage(page - 1 < 0 ? medias.length - 1 : page - 1)

  const nextPage = () => setPage((page + 1) % medias.length)

  useEffect(() => {
    setPage(mediaIndex)
    visibility
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "auto")
  }, [visibility, mediaIndex])

  useEffect(() => {
    document.removeEventListener("keydown", detectKeyDown)
    document.addEventListener("keydown", detectKeyDown, true)
  }, [page])

  const detectKeyDown = (e) => {
    if (e.key === "Escape") {
      setVisibility(false)
    }
  }

  return visibility ? (
    <div>
      <div id="grey-bg"></div>
      <a className="close-modal" onClick={() => setVisibility(false)}>
        X
      </a>
      <div className="media-modal">
        <div className="modal-content">
          <a className="arrow-btn-modal mirrored" onClick={previousPage}>
            <img src={Arrow} />
          </a>
          <img src={medias[page]} alt="MediaModal" />
          <a className="arrow-btn-modal" onClick={nextPage}>
            <img src={Arrow} />
          </a>
        </div>
      </div>
    </div>
  ) : (
    ""
  )
}

MediaModal.propTypes = {
  visibility: PropTypes.bool,
  setVisibility: PropTypes.func,
  medias: PropTypes.array,
  mediaIndex: PropTypes.number,
}

export default MediaModal
