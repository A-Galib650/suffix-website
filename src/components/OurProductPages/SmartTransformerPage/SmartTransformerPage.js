import FieldForceDemo from '../../../Shared/FieldForceDemo';
import { ScrollUp } from '../../../helpers/ScrollUp';
import img from '../../../media/smartTransformer/STMS.png';
import inventoryFeatureImg from '../../../media/smartTransformer/image (1).png';
import OurProductHeader from '../../FieldManagementDetail/OurProductHeader';
import Footer from '../../Footer/Footer';
import SEOComponent from '../../common/SEOComponent';
import BenefitesMonitoring from './BenefitesMonitoring';
import MultiDeviceSupport from './MultiDeviceSupport';
import RemoteMonitoring from './RemoteMonitoring';
import TimeSeries from './TimeSeries';
import TransformerMeasure from './TransformerMeasure';
import TransformerSafety from './TransformerSafety';

const SmartTransformerPage = () => {
  ScrollUp();
  return (
    <div className='rupantor-inventory overflow-hidden'>
      <SEOComponent keyWords='Smart Transformer Monitoring System, Transformer Smart Monitoring System, Smart Substation Monitoring System, Substation Smart Monitoring System, Smart Monitoring System, Online Monitoring System, Condition Monitoring System, Transformer Condition Monitoring System, Substation Condition Monitoring System, Online Transformer Monitoring System, Transformer Online Monitoring System, IoT based Transformer Monitoring System, IoT based Substation Monitoring System, STMS, STMS 2.0' />
      <OurProductHeader
        title='Smart Transformer Monitoring System'
        hyperRef='transformer-monitoring#smart-monitoring-intro'
        img={img}
        imgWidth='100%'
      />

      <div className='row d-flex justify-content-around align-items-center px-5'>
        <h1
          className='text-center'
          style={{
            fontSize: '28px',
            fontWeight: '700',
            color: ' #80bfff',
          }}
          id='smart-monitoring-intro'
        >
          SYSTEM FEATURES
        </h1>
        <img
          src={inventoryFeatureImg}
          alt='interconnect billing'
          style={{ width: '80%', height: 'auto', objectFit: 'contain' }}
        />
      </div>
      <RemoteMonitoring />

      <TransformerMeasure />
      <TimeSeries />
      <TransformerSafety />
      
      <BenefitesMonitoring/>
      <MultiDeviceSupport/>
      <FieldForceDemo />
      <Footer />
    </div>
  );
};

export default SmartTransformerPage;
