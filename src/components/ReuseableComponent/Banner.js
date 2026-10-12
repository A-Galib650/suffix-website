import { Link } from "react-router-dom";

const Banner = ({ title, backgroundImg, textColor }) => {
  return (
    <div>
      {/* <section className="page-banner" style={{ height: '100vh', background: `linear-gradient(rgba(0,0,0, 0.3),rgba(0,0,0, 0.3) ),url(${backgroundImg}) center center/cover no-repeat` }}> */}
      <section
        className="page-banner"
        style={{
          height: "100vh",
          background: `linear-gradient(rgba(0,0,0, 0.347),rgba(0,0,0, 0.347) ),url(${backgroundImg})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          backgroundSize: "cover ",
          // backgroundAttachment: "fixed",
        }}
      >
        {textColor ? (
          <div className="container">
            <div
              className="page-title-wrapper"
              style={{ color: `${textColor}` }}
            >
              <h1 className="page-title" style={{ color: `${textColor}` }}>
                {title}
              </h1>
              <ul className="bradcurmed">
                <li>
                  <Link
                    to="/"
                    rel="noopener noreferrer"
                    style={{ color: `${textColor}` }}
                  >
                    Home
                  </Link>
                </li>
                <li style={{ color: `${textColor}` }}>{title}</li>
              </ul>
            </div>
            {/* /.page-title-wrapper */}
          </div>
        ) : (
          <div className="container">
            <div className="page-title-wrapper">
              <h1 className="page-title">{title}</h1>
              <ul className="bradcurmed">
                <li>
                  <Link to="/" rel="noopener noreferrer">
                    Home
                  </Link>
                </li>
                <li>{title}</li>
              </ul>
            </div>
            {/* /.page-title-wrapper */}
          </div>
        )}

        {/* /.container */}
        {!backgroundImg && (
          <>
            <svg
              className="circle wow pixFadeLeft"
              data-parallax='{"x" :150}'
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              width="950px"
              height="950px"
            >
              <path
                fillRule="evenodd"
                stroke="#80b3ff"
                strokeWidth="100px"
                strokeLinecap="butt"
                strokeLinejoin="miter"
                opacity="0.051"
                fill="none"
                d="M450.000,50.000 C670.914,50.000 850.000,229.086 850.000,450.000 C850.000,670.914 670.914,850.000 450.000,850.000 C229.086,850.000 50.000,670.914 50.000,450.000 C50.000,229.086 229.086,50.000 450.000,50.000 Z"
              />
            </svg>
            <ul className="animate-ball" style={{ background: "#e6f0ff" }}>
              <li className="ball" style={{ background: "#cce0ff" }} />
              <li className="ball" style={{ background: "#cce0ff" }} />
              <li className="ball" style={{ background: "#cce0ff" }} />
              <li className="ball" style={{ background: "#cce0ff" }} />
              <li className="ball" style={{ background: "#cce0ff" }} />
            </ul>
          </>
        )}
      </section>
    </div>
  );
};

export default Banner;
