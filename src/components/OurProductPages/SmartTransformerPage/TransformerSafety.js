import controlImg from '../../../media/smartTransformer/image (2).png';
import safety from '../../../media/smartTransformer/safety.png';

const TransformerSafety = () => {
  const data = [
    {
      id: 1,
      list: 'Phase Loss or Recovery',
    },
    {
      id: 2,
      list: 'Overload or Exceed pre-set Value',
    },
    {
      id: 1,
      list: 'Oil Level or Temperature',
    },
    {
      id: 1,
      list: 'Advance Data Analysis(Optional)',
    },
  ];
  return (
    <div
      className='inventory-control'
      style={{
        padding: '80px 0px',
        background: 'rgb(252, 252, 252)',
        height: 'auto',
        backgroundPosition: 'center',
        backgroundRepeat: 'none',
        backgroundSize: 'cover',
      }}
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
              className=''
              src={safety}
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
              Remote Alarm & Notifications
            </h1>
            <img
              className=''
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

export default TransformerSafety;
