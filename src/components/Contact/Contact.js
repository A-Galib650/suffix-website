import emailjs from "emailjs-com";
import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ScrollUp } from "../../helpers/ScrollUp";
import { useWindowSize } from "../../helpers/WindowSize";
import ContactLoader from "../../loader/ContactLoader";
import SEOComponent from "../common/SEOComponent";
import Footer from "../Footer/Footer";

const Contact = () => {
  ScrollUp();
  const [height, width] = useWindowSize();
  const [showSpinner, setShowSpinner] = useState(false);
  const [captchaValue, setCaptchaValue] = useState(false);
  const { register, handleSubmit, errors } = useForm();
  // const [data, setData] = useState({
  //   name: "",
  //   email: "",
  //   subject: "",
  //   phone: "",
  //   message: ""
  // })

  const onSubmit = (data, e) => {
    e.preventDefault();
    setShowSpinner(true);

    emailjs
      .sendForm(
        "service_s0blfc8",
        "template_4p6uhrn",
        e.target,
        "HPCap5-FjcFCUB1Gv"
      )
      .then(
        (result) => {
          result.text &&
            toast.success("Your Email has been sent successfully !", {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
            });
          result.text && setShowSpinner(false);
        },
        (error) => {
          error &&
            toast.error("Sorry,your mail failed to be sent successfully!", {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
            });
        }
      );

    e.target.reset();
  };

  const handleOnChangeCaptcha = (value) => {
    value !== "" && setCaptchaValue(true);
  };
  console.log(captchaValue);

  // let name, value;
  // const handleChange = (e) => {
  //   name = e.target.name;
  //   value = e.target.value;

  //   setData({ ...data, [name]: value });

  // }
  // console.log(data);
  return (
    <div>
      <SEOComponent />
      <section
        className="page-banner-contact d-flex align-items-center"
        style={{ minHeight: "100vh" }}
      >
        <div className="container ">
          <div className="row">
            <div className="col-lg-8">
              <div className="page-title-wrapper">
                <div className="page-title-inner px-4">
                  <h1
                    className="page-title text-left"
                    style={{ fontWeight: "bold" }}
                  >
                    Get in touch with Us
                  </h1>
                  <p>
                    We don't want to push our ideas on to customers, we simply
                    want to make what they want.
                  </p>
                </div>
                {/* /.page-title-inner */}
              </div>
              {/* /.page-title-wrapper */}
            </div>
            {/* /.col-lg-8 */}
            <div className="col-lg-4">
              <div className="animate-element-contact">
                <img
                  src="https://i.ibb.co/t2FZHVv/001.png"
                  alt=""
                  className="wow pixFadeDown"
                  data-wow-duration="1s"
                />
                <img
                  src="https://i.ibb.co/jvT40F0/002.png"
                  alt=""
                  className="wow pixFadeUp"
                  data-wow-duration="2s"
                />
                <img
                  src="https://i.ibb.co/60tCrTq/003.png"
                  alt=""
                  className="wow pixFadeLeft"
                  data-wow-delay="0.3s"
                  data-wow-duration="2s"
                />
                <img
                  src="https://i.ibb.co/G0hyjbg/004.png"
                  alt="man"
                  className="wow pixFadeUp"
                  data-wow-duration="2s"
                />
              </div>
              {/* /.animate-element-contact */}
            </div>
            {/* /.col-lg-4 */}
          </div>
          {/* /.row */}
        </div>
        {/* /.container */}
        <svg
          className="circle"
          data-parallax='{"y" : 250}'
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
      </section>
      {/* /.page-banner */}
      {/*===========================*/}
      {/*=         Contact         =*/}
      {/*===========================*/}
      <section className="contactus">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="contact-infos">
                <div className="contact-info">
                  <h3 className="title">Our Location</h3>
                  <p className="description">
                    Cha-70,70/A, Rupayan Millennium Square (9A), Progoti
                    Sharoni, North Badda, Gulshan, Dhaka-1212, Bangladesh.
                  </p>
                  <div className="d-flex align-items-center">
                    <i className="ei ei-icon_phone description fw-bold text-primary" />
                    <p className="description ms-1 fw-bold text-primary">
                      +88 01958 424000
                    </p>
                  </div>
                </div>
                {/* /.contact-info */}
                <div className="contact-info">
                  <h3 className="title">For more information:</h3>
                  <div className="d-flex align-items-center">
                    <i className="ei ei-icon_mail_alt description fw-bold text-primary" />
                    <p className="description ms-1 fw-bold text-primary ms-1">
                      info@suffixit.com
                    </p>
                  </div>
                </div>
                {/* /.contact-info */}
              </div>
              {/* /.contact-infos */}
            </div>
            <div className="col-md-1"></div>
            {/* /.col-md-4 */}
            <div className="col-md-8">
              <div className="contact-froms">
                <form
                  className="contact-form"
                  data-pixsaas="contact-froms"
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <div className="row">
                    <div className="col-md-6 ">
                      <div>
                        <input
                          type="text"
                          name="name"
                          placeholder="Name"
                          ref={register({
                            required: {
                              value: true,
                              message: "Your name is required",
                            },
                          })}
                        />
                      </div>
                      <div className="mt-2">
                        {errors?.name?.message && (
                          <h6 style={{ color: "red", marginLeft: "20px" }}>
                            {errors?.name?.message}
                          </h6>
                        )}
                      </div>
                    </div>
                    <div className={`col-md-6 ${width <= 768 && "mt-5"}`}>
                      <div>
                        <input
                          type="email"
                          name="email"
                          placeholder="Email"
                          ref={register({
                            required: {
                              value: true,
                              message: "Your email is required",
                            },
                          })}
                        />
                      </div>
                      <div className="mt-2">
                        {errors?.email?.message && (
                          <h6 style={{ color: "red", marginLeft: "20px" }}>
                            {errors?.email?.message}
                          </h6>
                        )}
                      </div>
                    </div>
                  </div>
                  <div>
                    <div>
                      <input
                        className="mt-5"
                        type="text"
                        name="subject"
                        placeholder="Subject"
                        ref={register({
                          required: {
                            value: true,
                            message: "Subject is required",
                          },
                        })}
                      />
                    </div>
                    <div className="mt-2">
                      {errors?.subject?.message && (
                        <h6 style={{ color: "red", marginLeft: "20px" }}>
                          {errors?.subject?.message}
                        </h6>
                      )}
                    </div>
                  </div>
                  <div>
                    <div>
                      <input
                        className="mt-5"
                        type="text "
                        name="phone"
                        placeholder="Phone No."
                        ref={register({
                          required: {
                            value: true,
                            message: "Your phone number is required",
                          },
                        })}
                      />
                    </div>
                    <div className="mt-2">
                      {errors?.phone?.message && (
                        <h6 style={{ color: "red", marginLeft: "20px" }}>
                          {errors?.phone?.message}
                        </h6>
                      )}
                    </div>
                  </div>
                  <div>
                    <div>
                      <textarea
                        className="mt-5"
                        name="message"
                        placeholder="Your Comment"
                        ref={register({
                          required: {
                            value: true,
                            message: "Message is required",
                          },
                        })}
                        defaultValue={""}
                      />
                    </div>
                    <div className="mt-2">
                      {errors?.message?.message && (
                        <h6 style={{ color: "red", marginLeft: "20px" }}>
                          {errors?.message?.message}
                        </h6>
                      )}
                    </div>
                  </div>
                  {/* Recaptcha */}
                  <ReCAPTCHA
                    sitekey=" 6LeoZ6sgAAAAALFOCMy3c3G4om6mdSCKpgBk77QL"
                    onChange={handleOnChangeCaptcha}
                    className="mt-5"
                  />

                  <div className="d-flex align-items-center ">
                    <button
                      disabled={!captchaValue}
                      type="submit"
                      className="btn btn-primary border-0 nav-btn text-uppercase mt-5 ps-3 pe-3 pt-4 pb-4"
                      style={{
                        backgroundColor: `${
                          !captchaValue ? "#0D9EFE" : "#0D9EFE"
                        }`,
                        cursor: `${!captchaValue ? "not-allowed" : "pointer"}`,
                      }}
                    >
                      SEND MESSAGE
                    </button>
                    {showSpinner && <ContactLoader />}
                  </div>
                  <input
                    type="hidden"
                    name="recaptcha_response"
                    id="recaptchaResponse"
                  />
                  <div className="row">
                    <div className="form-result alert">
                      <div className="content" />
                    </div>
                  </div>
                </form>

                {/* /.contact-froms */}
              </div>
              {/* /.faq-froms */}
            </div>
            {/* /.col-md-8 */}
          </div>
          {/* /.row */}
        </div>
        {/* /.container */}
      </section>
      <div className="mx-5">
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>
      {/* /.contactus */}
      {/*========================*/}
      {/*=         Map         =*/}
      {/*========================*/}
      <section id="google-maps">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.970292674778!2d90.42340141478479!3d23.784072184572732!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c78c4a4df089%3A0x2d74f32627c0ef7e!2sSuffix%20IT%2C%20Badda!5e0!3m2!1sen!2sbd!4v1676868557989!5m2!1sen!2sbd"
          width="100%"
          height={500}
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
        />
      </section>
      {/* /#google-maps */}
      <Footer />
    </div>
  );
};

export default Contact;
