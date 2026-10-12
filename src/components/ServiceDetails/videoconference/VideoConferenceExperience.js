import training from "../../../media/videoconferenceimage/training.png";
import meeting from "../../../media/videoconferenceimage/meeting-room.png";
import activity from "../../../media/videoconferenceimage/m-activity.png";
import gear from "../../../media/videoconferenceimage/ngt.png";

const VideoConferenceExperience = () => {
  return (
    <div className="video-conference-experience container" >
      <h1 className="text-center" style={{ fontSize: "30px", fontWeight: "500", color: "#525252" }}>Get Ultimate Experience</h1>
      <div className="row d-flex justify-content-around video-conference-experience-content text-center px-5" style={{ paddingTop: "90px", paddingBottom: "70px" }} data-aos="fade-up"
        data-aos-duration="3000">
        <div className="col-md-3 col-xs-12 col-sm-6 d-flex flex-column align-items-center">
          <img src={training} alt="" style={{ width: '40%', height: "40%", objectFit: "contain" }} />
          <h2 className="pt-3">Internet meetings, training & technical assistance</h2>

        </div>
        <div className="col-md-3 col-xs-12 col-sm-6 d-flex flex-column align-items-center ">
          <img src={meeting} alt="" style={{ width: '40%', height: "40%", objectFit: "contain" }} />
          <h2 className="pt-3">Building collaboration-enabled meeting rooms</h2>

        </div>
        <div className="col-md-3 col-xs-12 col-sm-6  d-flex flex-column align-items-center ">
          <img src={gear} alt="" style={{ width: '40%', height: "40%", objectFit: "contain" }} />
          <h2 className="pt-3">Next-generation business phone system</h2>

        </div>
        <div className="col-md-3 col-xs-12 col-sm-6 d-flex flex-column align-items-center ">
          <img src={activity} alt="" style={{ width: '40%', height: "40%", objectFit: "contain" }} />
          <h2 className="pt-3">Marketing activities & discussions in Town Hall</h2>

        </div>

      </div>

    </div>
  )
}

export default VideoConferenceExperience
