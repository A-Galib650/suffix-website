import CommonSeamless from './CommonSeamless';
import data from './SeamlessPFData';
import img1 from '../../../media/chart.svg'
import img2 from '../../../media/info.svg'
import img3 from '../../../media/pay.svg'
const SeamlessPF = () => {
  return (
    <>
      <CommonSeamless
        alignment='left'

        description="Save deeply, detailed information about your employees. Get the exact, clear idea associated with distinctive employee profiles in order to configure a sensible account holder."
        title="Personal Information Management"
        img={img2}
      />
      <CommonSeamless
        color="rgba(253,253,253)"
        description="Improve your accounting system by using SuffixPF smart application features. Configure CoA based on your accounting system."
        title="Configurable Chart of Account"
        img={img1}
      />

      <CommonSeamless
        alignment='left'
        description="A complete Provident Fund Management System with the ability to integrate with any payroll management system."
        title="Flexibility to integrate with third party Payroll System"
        img={img3}
      />

    </>
  )
}

export default SeamlessPF
