import { ScrollUp } from "../../../helpers/ScrollUp"
import Footer from "../../Footer/Footer"
import Banner from "../../ReuseableComponent/Banner"
import BulkSmsTable from "./BulkSmsTable"
import BulkSmsTerms from "./BulkSmsTerms"
import bulkSms from '../../../media/download/bulkSms.jpg'

const BulkSmsPage = () => {
  ScrollUp();
  return (
    <div className="overflow-hidden">
      <Banner title="Bulk SMS" textColor="white" backgroundImg={bulkSms} />
      <div className="bulkSms" style={{ paddingTop: "60px" }}>
        <>
          <BulkSmsTable />
          <BulkSmsTerms />
        </>

      </div>
      <Footer />
    </div>
  )
}

export default BulkSmsPage
