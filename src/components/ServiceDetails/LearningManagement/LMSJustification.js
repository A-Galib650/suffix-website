import justificationImg from "../../../media/learningmanagement/learning-management-system.png";
const LMSJustification = () => {
  return (
    <div className="lms-justification" style={{ backgroundColor: "rgb(252, 252, 252)", backgroundPosition: "center", backgroundRepeat: "none", height: "auto" }}>

      <div className="container px-5" style={{ padding: "80px 0px" }}>
        <h1 className="text-center" style={{ fontWeight: "500", fontSize: "30px" }}>Which is your justification for having Suffix LMS?</h1>
        <div className="row d-flex justify-content-center align-items-center " style={{ padding: "40px 0px" }}>
          <div className="col-lg-6" data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine">
            <img src={justificationImg} alt="justification" style={{ width: "100%", objectFit: "contain" }} />
          </div>
          <div className="col-lg-6" data-aos="fade-left"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine">
            <p style={{ fontSize: "15px", textAlign: "justify" }} >
              First of all, this is the basic clue which will decide what sort of LMS will help you achieve your goals. There are many ways an LMS can help an organization expand. You may need an LMS for the onboarding of workers , for example. It is probably one of the most common use instances. Several businesses plan to use an LMS in their onboarding process to help their new employees. It will help beginners learn more about their company culture, understand common business practices, learn about their goods and services, and develop those skills so that they can perform when they finally get their first projects, etc. <br />Another common case for use of LMS is to improve staff growth and retention. An LMS will provide tremendous support for the training and growth goals. You can develop courses to help your workers strengthen their skills, provide them with an opportunity to learn about new product features, or simply help them stay up to date with current trends, etc. Another reason you may want to use an LMS is to offer your clients training. Especially when it's software for your product.
            </p>
          </div>
          <div className="col-lg-11 pt-4" data-aos="fade-up"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine">
            <p style={{ fontSize: "15px", textAlign: "justify" }}>
              Even, if you've got a business in the software industry, you would need to teach consumers so they can use your product effectively.

              You can, of course , take advantage of an LMS to concentrate on compliance training for your staff, improve your sales potential to raise more money, extend your partner training if you own a multinational company or even provide exclusive member training.
            </p>

          </div>
        </div>

      </div>

    </div>
  )
}

export default LMSJustification
