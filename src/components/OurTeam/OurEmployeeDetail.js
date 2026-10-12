const OurEmployeeDetail = ({ empData }) => {
  const { id, name, type, img, job } = empData;
  return (
    <div className="col-lg-2 col-sm-3 col-xs-12 text-center mb-4" data-aos="fade-up"
      data-aos-duration="3000">
      <img className="" src={img} alt="employee" style={{ width: "80%", borderRadius: "18px", objectFit: "contain" }} />
      <h2 style={{ fontSize: "18px", fontWeight: "bold" }} className="mt-3">{name}</h2>
      <h3 style={{ fontSize: "14px", color: "grey" }}>{job}</h3>
    </div>
  )
}

export default OurEmployeeDetail;
