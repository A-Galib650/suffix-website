import controlImg from '../../../media/smartTransformer/chart.png';
// import controlImg from '../../../media/smartTransformer/chart2.jpeg';

const TimeSeries = () => {
  return (
    <div
      className='inventory-control'
      style={{
        padding: '80px 0px',
        background: '#e6f7ff',
        height: 'auto',
        backgroundPosition: 'center',
        backgroundRepeat: 'none',
        backgroundSize: 'cover',
      }}
    >
      <div className='container-fluid'>
        <div className='row d-flex justify-content-around align-items-center px-5'>
          <div
            className='col-md-6'
            data-aos='fade-right'
            data-aos-offset='300'
            data-aos-easing='ease-in-sine'
          >
            <h1 style={{ fontSize: '28px', fontWeight: '500', textAlign:"center" }}>
              Transformers History
            </h1>
          </div>
          <div
            className='col-md-6'
            data-aos='fade-left'
            data-aos-offset='300'
            data-aos-easing='ease-in-sine'
          >
            <img
              className='shadow mb-5 bg-body rounded'
              src={controlImg}
              alt='interconnect billing'
              style={{ width: '100%', objectFit: 'contain' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimeSeries;
