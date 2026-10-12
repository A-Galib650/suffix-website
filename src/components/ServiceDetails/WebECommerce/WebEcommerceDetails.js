import { useParams } from "react-router"
import Footer from "../../Footer/Footer"
import Banner from "../../ReuseableComponent/Banner"
import img from '../../../media/download/eCommerceDetail.jpg'
import { ScrollUp } from "../../../helpers/ScrollUp"
import frontEndImg from '../../../media/webECommerceDetail/frontEnd.svg';
import backEndImg from '../../../media/webECommerceDetail/backEnd.svg';
import adminImg from '../../../media/webECommerceDetail/admin.svg';
import addImg from '../../../media/webECommerceDetail/Email campaign-cuate.svg';
import RightContentLeftImage from "../../ReuseableComponent/Products/RightContentLeftImage"
import webDetailData from './WebECommerceFakeData'
import LeftContentRightImage from "../../ReuseableComponent/Products/LeftContentRightImage"

const WebECommerceDetails = () => {
  const { type } = useParams();
  const singleData = webDetailData.find((singleData) => singleData.type === type)
  ScrollUp();
  return (
    <div>
      <Banner title="Web & E-Commerce" textColor="white" backgroundImg={img} />
      <RightContentLeftImage data={singleData?.frontEnd} title="Front End Site" image={frontEndImg} />
      <LeftContentRightImage data={singleData?.backEnd} title="Back End Site" image={backEndImg} bgColor="rgb(247,247,247)" />
      <RightContentLeftImage data={singleData?.admin} title="Admin Reports" image={adminImg} />
      <LeftContentRightImage data={singleData?.add} title="Add-Ons" image={addImg} bgColor="rgb(247,247,247)" />

      <Footer />
    </div>
  )
}

export default WebECommerceDetails
