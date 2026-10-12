import { ScrollUp } from '../../helpers/ScrollUp';
import Footer from '../Footer/Footer';
import OurTeamData from '../OurTeamFakeData/OurTeamFakeData.json';
import Banner from '../ReuseableComponent/Banner';
import BannerWithContent from '../ReuseableComponent/BannerWithContent';

import OurEmployeeDetail from './OurEmployeeDetail';

import OurManagementDetail from './OurManagementDetail';
import img from "../../media/team/Shared workspace-amico.svg";
import { Helmet } from 'react-helmet';

const OurTeam = () => {
  ScrollUp();
  const managementData = OurTeamData.filter((management) => management.type === "management");
  const employeeData = OurTeamData.filter((employee) => employee.type === "employee");
  return (
    <div>
      <Helmet>
        <title>Our Team</title>
        <meta
          name="description"
          content="This is Suffix Our Team"
        />
      </Helmet>
      {/* <Banner title={"Our Team"} /> */}
      <BannerWithContent title={"Our Team"} image={img} description={`One team, One heart, One legacy.`} hyperRef="our-team#ourTeam" />
      {/* /.page-banner */}
      {/*========================*/}
      {/*=         Team         =*/}
      {/*========================*/}
      <section className="teams-single" id="ourTeam">
        <div className="container">
          <div className="section-title text-center">
            <h3 className="sub-title wow pixFadeUp">Meet The Team</h3>
            <h2 className="title wow pixFadeUp" data-wow-delay="0.3s">Suffix IT Team</h2>
          </div>
          {/* Team Data */}
          <div className="row d-flex justify-content-center pb-5">
            {
              managementData.map((mngData) => <OurManagementDetail mngData={mngData} key={mngData.id} />)
            }
          </div>
          <div className="row d-flex justify-content-center">
            {
              employeeData.map((empData) => <OurEmployeeDetail empData={empData} key={empData.id} />)
            }
          </div>





        </div>
      </section>
      <Footer />
    </div>

  )
}

export default OurTeam
