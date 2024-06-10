import { useState } from "react"
import PropTypes from "prop-types"
import MediaModal from "../MediaModal"
import "./index.css"

function MediaGrid({ medias }) {
  const [isModalVisible, setModalVisible] = useState(false)
  const [modalMediaList, setModalMediaList] = useState([])
  const [modalMediaIndex, setModalMediaIndex] = useState(0)
  return (
    <ul className="media-grid">
      {medias &&
        medias.map((media, index) => (
          <li className="media" key={index}>
            <img
              src={media}
              onClick={() => {
                setModalVisible(true),
                  setModalMediaList(medias),
                  setModalMediaIndex(index)
              }}
            />
          </li>
        ))}
      <MediaModal
        visibility={isModalVisible}
        setVisibility={setModalVisible}
        medias={modalMediaList}
        mediaIndex={modalMediaIndex}
      />
    </ul>
  )
}

MediaGrid.propTypes = {
  medias: PropTypes.array,
}

export default MediaGrid
