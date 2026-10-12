import affordable from "../../../media/videoconferenceimage/affordable.png";
import simple from "../../../media/videoconferenceimage/simple.png";
import reliability from "../../../media/videoconferenceimage/reliability.png";
import experience from "../../../media/videoconferenceimage/experience.png";

const ReasonBehindVC = () => {
  return (
    <div className="video-conference-experience container" style={{ paddingTop: "50px" }}>
      <h1 className="text-center" style={{ fontSize: "30px", fontWeight: "500", color: "#525252" }}>Why Suffix Video Conferencing</h1>
      <div className="row d-flex justify-content-around video-conference-experience-content text-center px-5" style={{ paddingTop: "50px", paddingBottom: "50px" }} data-aos="fade-up"
        data-aos-duration="3000">

        <div className="col-md-3 col-xs-12 col-sm-6 d-flex flex-column align-items-center ">
          <img src={simple} alt="" style={{ width: '40%', height: "40%", objectFit: "contain" }} />
          <h2 className="pt-3">Simple to use, Purchase & Scale</h2>

        </div>
        <div className="col-md-3 col-xs-12 col-sm-6 d-flex flex-column align-items-center">
          <img src={affordable} alt="" style={{ width: '40%', height: "40%", objectFit: "contain" }} />
          <h2 className="pt-3">Most affordable</h2>

        </div>
        <div className="col-md-3 col-xs-12 col-sm-6  d-flex flex-column align-items-center ">
          <img src={reliability} alt="" style={{ width: '40%', height: "40%", objectFit: "contain" }} />
          <h2 className="pt-3">Built & configured to work reliably</h2>

        </div>
        <div className="col-md-3 col-xs-12 col-sm-6 d-flex flex-column align-items-center ">
          <img src={experience} alt="" style={{ width: '40%', height: "40%", objectFit: "contain" }} />
          <h2 className="pt-3">One clear client experience for all use cases</h2>

        </div>

      </div>

    </div>
  )
}

export default ReasonBehindVC
