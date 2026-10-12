import IntegratedReservation from "./IntegratedReservation"
import PaymentOptions from "./PaymentOptions"

const ECommerceProvidedSolution = () => {
  return (
    <div className="eCommerceProvidedSolution" style={{ padding: '50px 0px', background: "rgb(252, 252, 252)", height: "auto", backgroundPosition: "center", backgroundRepeat: "none", backgroundSize: "cover" }}>
      <h1 style={{ fontSize: "28px", fontWeight: "500", textAlign: "center" }}>E-Commerce Solutions <span style={{ color: "#609dce" }}>We Provide</span></h1>
      <IntegratedReservation />
      <PaymentOptions />

    </div>
  )
}

export default ECommerceProvidedSolution
