import videoData from "../videoconference/VideoConferenceData";


const VideoConferenceFeature = () => {
  return (
    <div className="video-conference-feature " style={{ backgroundColor: "rgb(252, 252, 252)", backgroundPosition: "center", backgroundRepeat: "none", height: "auto" }}>
      <div className="container" style={{ padding: "80px 0px" }}>
        <h1 className="text-center" style={{ fontSize: "30px", fontWeight: "500", color: "#525252" }}>Key Features</h1>
        <div className="row d-flex justify-content-center video-conference-experience-content px-3" style={{ paddingTop: "50px", paddingBottom: "50px" }}>
          {videoData.map((item, index) => {
            return (
              <div className="col-md-5   mx-5 feature-content" key={index} style={{ padding: "25px 0px" }} data-aos="fade-up"
                data-aos-duration="3000">
                <div className="pt-3" >
                  <img src={item?.img} alt="" style={{ width: '80px', height: "80px", objectFit: "contain" }} />
                </div>
                <div className="px-5">
                  <h1 style={{ fontWeight: '500', color: "#609dce" }}>{item?.title}</h1>
                  <p style={{ fontSize: "15px" }}>{item?.desc}</p>

                </div>

              </div>
            )
          })}


        </div>

      </div>
    </div>
  )
}

export default VideoConferenceFeature
