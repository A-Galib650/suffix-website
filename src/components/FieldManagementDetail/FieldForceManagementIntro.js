import { faCalendarAlt, faDatabase, faImages, faSearchLocation, faTasks } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import SFFMS from "../../media/download/field-force.png";


const FieldForceManagementIntro = () => {
    return (
        <div className="field-force-management-intro " style={{ backgroundColor: "rgb(252, 252, 252)", backgroundPosition: "center", backgroundRepeat: "none", height: "auto", paddingTop: "30px", paddingBottom: "30px" }}>
            <div className="container-fluid text-justify" style={{ paddingTop: "80px", paddingBottom: "50px" }}>
                <div className="row d-flex justify-content-around px-5">
                    <div className="col-md-5" data-aos="zoom-in-up">
                        <img src={SFFMS} alt="field1" style={{ width: "100%", height: "100%", objectFit: "contain" }} />

                    </div>
                    <div className="col-md-5" data-aos="zoom-in-up">
                        <div>
                            <h1  style={{ fontSize: "24px", fontWeight: "500" }}><FontAwesomeIcon icon={faCalendarAlt} />  Job Scheduling</h1>
                            <p style={{textAlign: "justify"}}>Schedule jobs to the local agent automatically. Share records, as well as other appointment detailing together with field force without possessing to be in business office.</p>
                        </div>
                        <div>
                            <h1  style={{ fontSize: "24px", fontWeight: "500" }}><FontAwesomeIcon icon={faSearchLocation} /> Live Tracking</h1>
                            <p style={{textAlign: "justify"}}>Auto assigned task to local and free field push agent after creation of recent task. Field force broker gets instant notification to take new task.</p>
                        </div>
                    </div>

                </div>
                <div className="row d-flex justify-content-around px-5 pt-5">

                    <div className="col-md-11" data-aos="zoom-in-up">
                        <div >
                            <h1  style={{ fontSize: "24px", fontWeight: "500" }}><FontAwesomeIcon icon={faTasks} /> Automate Assignment</h1>
                            <p style={{textAlign: "justify"}}>Auto assigned task to nearest and free field force agent upon creation of new task. Field force agent gets instant notification to accept new task</p>
                        </div>
                        <div>
                            <h1  style={{ fontSize: "24px", fontWeight: "500" }}><FontAwesomeIcon icon={faDatabase} /> Offline Data Synchronization</h1>
                            <p style={{textAlign: "justify"}}>The employees, using our field support mobile app, can employ this software in offline function in case there is internet connectivity concerns. Automatic syncing with net starts as soon for the reason that network connection will end up being restored. The intelligent harmonisation feature activates data safe-keeping in offline mode to be able to make sure the information can be very easily downloaded inside online setting.</p>
                        </div>

                    </div>

                </div>
            </div>

        </div>
    );
};

export default FieldForceManagementIntro;