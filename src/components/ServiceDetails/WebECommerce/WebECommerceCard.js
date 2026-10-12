import { Link } from 'react-router-dom';
import data from './WebECommerceFakeData';

const WebECommerceCard = () => {
  return (
    <div className="container" style={{ backgroundColor: "white", backgroundPosition: "center", backgroundRepeat: "none", height: "auto", width: "100vw", minHeight: "100vh" }}>
      <div className="webECommerce" style={{ paddingTop: "80px", paddingBottom: "80px" }}>
        <div className="d-flex justify-content-center row px-5">
          {
            data.map((item, index) => {
              return (
                <div className="col-xl-3 col-lg-4 col-sm-5 mx-4 " data-aos="fade-up"
                  data-aos-duration="3000">
                  <div className="pricing-card" key={index}>
                    <h3 className={`${item.priceHeader}`}>{item.type}</h3>
                    <div className="price"><sup>$</sup>{item.price}</div>
                    <h1 className="text-center">Front End Site</h1>
                    <ul>
                      {
                        item?.frontEnd.slice(0, 7).map((frontendItem, index) => {
                          return (
                            <li key={index}>{frontendItem}</li>
                          )
                        })
                      }
                    </ul>
                    <Link to={`/web-e-commerce-detail/${item.type}`} className="order-btn">Details</Link>

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

export default WebECommerceCard
