import reasonImg from "../../../media/learningmanagement/lms.jpg";

const ReasonSuffixLMS = () => {
  return (
    <div className="reason-suffix-lms" style={{ paddingBottom: "80px" }}>
      <div className="container px-5">
        <div className="row d-flex justify-content-around align-items-center">
          <div className="col-md-6" data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine">
            <img src={reasonImg} alt="" style={{ width: '100%', height: '100%', objectFit: "contain" }} />

          </div>
          <div className="col-md-5" data-aos="fade-left"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine">
            <h1 style={{ fontSize: '22px', fontWeight: '500' }}>Top things to think about when choosing Suffix LMS</h1>
            <p style={{ fontSize: '14px', textAlign: "justify" }}>It's time to make a decision and find out what sort of LMS would be the best choice for you. That is a tough one. We were all there and it's fully understandable. Was your budget adequate to gain your own LMS? Is there a cloud-based LMS solution you can look for? What if your limit is small, money-wise, and you need to consider trying out an open-source LMS solution? No worries, here are the top items to consider when selecting an LMS for you.</p>

          </div>

        </div>

      </div>

    </div>
  )
}

export default ReasonSuffixLMS
