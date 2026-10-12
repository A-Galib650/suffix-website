import inventoryFeatureImg from '../../../media/RupantarInventory/inventory-features.svg';
import data from './InventoryFeatureData';
const InventoryFeature = () => {
  return (
    <div
      className='inventory-feature'
      style={{ padding: '80px 0px' }}
    >
      <div className='container-fluid'>
        <div className='row d-flex justify-content-around align-items-center px-5'>
          <div
            className='col-md-5'
            data-aos='fade-right'
            data-aos-offset='300'
            data-aos-easing='ease-in-sine'
          >
            <img
              src={inventoryFeatureImg}
              alt='interconnect billing'
              style={{ width: '100%', objectFit: 'contain' }}
            />
          </div>

          <div
            className='col-md-5'
            data-aos='fade-left'
            data-aos-offset='300'
            data-aos-easing='ease-in-sine'
          >
            <h1 style={{ fontSize: '28px', fontWeight: '500' }}>
              Features of Inventory Control
            </h1>
            {data.map((item, index) => {
              return (
                <li
                  className='pt-3'
                  style={{
                    fontSize: '15px',
                    textAlign: 'left',
                    paddingLeft: '20px',
                  }}
                  key={index}
                >
                  {item?.list}
                </li>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InventoryFeature;
