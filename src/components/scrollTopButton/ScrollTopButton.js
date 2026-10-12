import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";


const ScrollTopButton = () => {

  const [scrollTopStyle, setScrollTopStyle] = useState("");
  useEffect(() => {
    setScrollTopStyle("scrollTop-style-none")
  }, [])

  const changeBackground = () => {

    (window.scrollY > 150) ? setScrollTopStyle("scrollTop-style-visible") : setScrollTopStyle("scrollTop-style-none");

  }
  window.addEventListener('scroll', changeBackground);

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <div className="scroll-top fw-normal fixed-bottom  mb-5 d-flex justify-content-end ">
      <button className={`btn   ${scrollTopStyle}`} onClick={handleScrollTop}><FontAwesomeIcon style={{ color: 'white', fontSize: '15px' }} icon={faChevronUp} /></button>
    </div>
  )
}

export default ScrollTopButton;
