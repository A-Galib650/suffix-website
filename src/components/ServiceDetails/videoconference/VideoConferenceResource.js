import React from 'react';
import side from "../../../media/videoconferenceimage/side.png";
import resource from "../../../media/videoconferenceimage/resources.png";
import webcam from "../../../media/videoconferenceimage/webcam1.png";
import blackBoard from "../../../media/videoconferenceimage/blackboard.png";

const VideoConferenceResource = () => {
    return (
        <div className="video-conference-resource container" className="video-conference-feature " style={{ backgroundColor: "rgb(252, 252, 252)", backgroundPosition: "center", backgroundRepeat: "none", height: "auto", padding: "150px 0px" }}>
            <div className="row d-flex justify-content-center px-5">
                <div className="col-md-5" data-aos="fade-right"
                    data-aos-duration="3000">
                    <img src={side} alt="" style={{ width: '100%', objectFit: "contain" }} />
                </div>
                <div className="col-md-5 pt-5 text-justify" data-aos="fade-left"
                    data-aos-duration="3000">
                    <div className="d-flex">
                        <img src={resource} alt="" style={{ width: '55px', height: '55px', objectFit: "contain" }} />
                        <h1 className="px-2" style={{ fontWeight: "500", fontSize: "20px" }}>Resources designed to match teachers</h1>
                    </div>
                    <div className="pt-3">
                        <p style={{ fontSize: "14px" }}>The Suffix Video Conferencing Platform allows students to share their audio, images, chat, video and screen. Built-in polling makes it easy for students to engage and recording your lectures means you can make them available for later review.</p>
                    </div>



                    <div className=" py-5 text-justify">
                        <div className="d-flex">
                            <img src={webcam} alt="" style={{ width: '55px', height: '55px', objectFit: "contain" }} />
                            <h1 className="px-2" style={{ fontWeight: "500", fontSize: "20px" }}> Anybody can share a webcam</h1>
                        </div>
                        <div className="pt-3">
                            <p style={{ fontSize: "14px" }}>There's no limit to how many webcams you can share in a session (limited by bandwidth only.</p>
                        </div>

                    </div>

                    <div className=" text-justify">
                        <div className="d-flex align-items-center">
                            <img src={blackBoard} alt="" style={{ width: '55px', height: '55px', objectFit: "contain" }} />
                            <h1 className="px-2 " style={{ fontWeight: "500", fontSize: "20px" }}> Whiteboard live for presenters and groups</h1>
                        </div>
                        <div className="pt-3">
                            <p style={{ fontSize: "14px" }}>Annotations are automatically shown back to the students in real-time while using the whiteboard device. Presenters do have the option to zoom, highlight, draw and write on presentations to make the points easier for students who are far away.</p>
                        </div>

                    </div>

                </div>



            </div>

        </div>
    );
};

export default VideoConferenceResource;