import { faAngleDown } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const BannerWithContent = ({ title, description, hyperRef }) => {
  return (

    <div className="bannerWithContent">
      <div className="header">
        <div className="inner-header flex px-5">
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
        <div>
          <a href={`${hyperRef}`}> <FontAwesomeIcon icon={faAngleDown} style={{ fontSize: "3rem", color: "#fff", cursor: "pointer" }} /></a>
        </div>

        <svg className="waves" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
          <defs><path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" /></defs>
          <g className="parallax">
            <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7" />
            <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
            <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
            <use xlinkHref="#gentle-wave" x="48" y="7" fill="#fff" />
          </g>
        </svg>
      </div>
    </div>


  )
}

export default BannerWithContent
