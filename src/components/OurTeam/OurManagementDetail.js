const OurManagementDetail = ({ mngData }) => {
  const { id, name, type, job, img } = mngData;

  return (
    <div className='col-lg-2 col-sm-4  text-center' data-aos="fade-up"
      data-aos-duration="3000">
      <img className="" src={img} alt="management" style={{ width: "90%", borderRadius: "18px", objectFit: "contain" }} />
      <h2 style={{ fontSize: "18px", fontWeight: "bold" }} className="mt-3">{name}</h2>
      <h3 style={{ fontSize: "14px", color: "grey" }}>{job}</h3>
    </div>
  )
}

export default OurManagementDetail;
