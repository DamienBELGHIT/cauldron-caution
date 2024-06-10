import CauldronImg from "../../assets/img/CauldronTitleBG.png"
import PropTypes from "prop-types"
import "./index.css"

function CauldronTitle({ title, leftImg, rightImg }) {
  return (
    <span className="cauldron-title">
      <img src={leftImg} className="side-img" />
      <h2>{title}</h2>
      <img src={rightImg} className="side-img" />
      <img src={CauldronImg} id="cauldron-title-bg" />
    </span>
  )
}

CauldronTitle.propTypes = {
  title: PropTypes.string.isRequired,
  leftImg: PropTypes.string,
  rightImg: PropTypes.string,
}

export default CauldronTitle
