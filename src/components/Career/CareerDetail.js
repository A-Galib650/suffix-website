import { useParams } from "react-router"
import { ScrollUp } from "../../helpers/ScrollUp";
import Footer from "../Footer/Footer";
import CareerDetailContent from "./CareerDetailContent";
import CareerDetailHeader from "./CareerDetailHeader";
import data from "./CareerFakeData";

const CareerDetail = () => {
  const { id } = useParams();
  const jobPostData = data.find((item) => parseInt(item.id) === parseInt(id));

  ScrollUp();
  return (
    <div className="career-detail">
      <CareerDetailHeader headlineData={jobPostData} />
      <CareerDetailContent CareerDetailContentData={jobPostData} />
      <Footer />

    </div>
  )
}

export default CareerDetail
