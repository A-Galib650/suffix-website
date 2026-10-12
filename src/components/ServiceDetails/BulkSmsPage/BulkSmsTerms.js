import bulk from '../../../media/BulkSms/Mobile-rafiki.svg';
import data from './BulkSmsTermsData';

const BulkSmsTerms = () => {
  return (
    <div className='container-fluid bulk-sms-terms px-4' style={{ paddingBottom: '20px' }}>
      <div className="bulkTermsTitle text-center">
        <h1 style={{ fontSize: "28px", fontWeight: "500" }}>TERMS & CONDITION</h1>
        <p className="text-secondary" style={{ fontSize: "15px" }}>All prices are tax, vat and SD charge excluded. Masking Name Registration Cost: 5000 Taka(One Time).</p>
      </div>
      <div className="row d-flex justify-content-around align-items-center" style={{ padding: "20px 0px" }}>
        <div className="col-md-5" data-aos="fade-right"
          data-aos-offset="10"
          data-aos-easing="ease-in-sine">
          <img src={bulk} alt='smsBulk' style={{ width: "100%", objectFit: "contain" }} />

        </div>
        <div className="col-md-6" data-aos="fade-left"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine">
          {
            data.map((item, index) => {
              return (
                item && <div key={index}>
                  <div>
                    <h1 style={{ fontSize: "22px", fontWeight: "400" }}>SMS marketing requirement:</h1>
                    <li style={{ paddingLeft: "20px" }}>{item.smsMarketing1}</li>
                    <li style={{ paddingLeft: "20px" }}>{item.smsMarketing2}</li>
                  </div>
                  <div>
                    <h1 style={{ fontSize: "22px", fontWeight: "400" }}>SMS text character limit:</h1>
                    <ul style={{ paddingLeft: "40px", margin: 0, listStyleType: "disc", listStylePosition: "outside" }}>
                      <li style={{ display: "list-item" }}>
                        <div style={{ display: "flex", alignItems: "baseline" }}>
                          <strong style={{ whiteSpace: "nowrap", marginRight: "6px" }}>English SMS:</strong>
                          <span>{item.textCharacterLimit1}</span>
                        </div>
                      </li>
                      <li style={{ display: "list-item" }}>
                        <div style={{ display: "flex", alignItems: "baseline" }}>
                          <strong style={{ whiteSpace: "nowrap", marginRight: "6px" }}>Bangla SMS:</strong>
                          <span>{item.textCharacterLimit2}</span>
                        </div>
                      </li>
                    </ul>
                  </div>



                  <div>
                    <h1 style={{ fontSize: "22px", fontWeight: "400" }}>What you will get in report?</h1>
                    <li style={{ paddingLeft: "20px" }}>{item.report1}</li>
                    <li style={{ paddingLeft: "20px" }}>{item.report2}</li>
                    <li style={{ paddingLeft: "20px" }}>{item.report3}</li>
                  </div>

                  <div>
                    <h1 style={{ fontSize: "22px", fontWeight: "400" }}>Payment Procedure:</h1>
                    <li style={{ paddingLeft: "20px" }}>{item.payment1}</li>
                    <li style={{ paddingLeft: "20px" }}>{item.payment2}</li>

                  </div>
                </div>
              )
            })
          }

        </div>

      </div>
    </div>
  )
}

export default BulkSmsTerms
