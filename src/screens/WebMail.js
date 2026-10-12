import { useEffect } from "react";

const WebMail = () => {
  useEffect(() => {
    window.location.replace(
      "https://sg2plzcpnl505697.prod.sin2.secureserver.net:2096/"
    );
  }, []);
  return <div className="d-flex justify-content-center align-items-center" style={{ 
    height:"100vh"
  }}>
    <h1 className="display-2 text-primary">Redirecting to webmail....</h1>
  </div>;
};

export default WebMail;
