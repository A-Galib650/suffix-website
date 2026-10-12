import inventoryFeatureImg from '../../../media/smartTransformer/image (4).png';

const RemoteMonitoring = () => {
  return (
    <div
      className='inventory-feature'
      style={{ padding: '80px 0px' }}
    >
      <div className='container-fluid'>
        <h1
          className='text-center'
          style={{
            fontSize: '28px',
            fontWeight: '700',
            color: ' #80bfff',
          }}
        >
          {/* SMART TRANSFORMER MONITORING SYSTEM */}
        </h1>
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
            <h1
              style={{
                fontSize: '28px',
                fontWeight: '500',
                // textShadow: '1px 1px 1px ',
              }}
            >
              Multiple Transformer Status
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RemoteMonitoring;
