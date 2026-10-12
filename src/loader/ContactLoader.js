import Loader from "react-loader-spinner";

const ContactLoader = () => {
  return (
    <div className="mt-md-5 ms-2">
      <Loader 
        type="Oval"
        color="black"
        height={30}
        width={30}
        timeout={60000}
      />
    </div>
  )
}

export default ContactLoader
