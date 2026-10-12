
import { ScrollUp } from "../../helpers/ScrollUp"
import Footer from "../Footer/Footer";
import AboutContent from "./AboutContent";
import BannerWithContent from "../ReuseableComponent/BannerWithContent";
import { Helmet } from "react-helmet";
import SEOComponent from "../common/SEOComponent";
const About = () => {
  ScrollUp();
  return (
    <div>
      <SEOComponent />
      <BannerWithContent title={"About Us"} hyperRef={"/about#whoWeAre"} />
      <AboutContent />
      <Footer />

    </div>
  )
}

export default About
