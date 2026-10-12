import data from "./BulkSmsTableData";
import { FixedNumber } from "./../../../helpers/functions";
const BulkSmsTable = () => {
  return (
    <div
      className="container bulk-sms-table px-4"
      style={{  paddingBottom: "80px" }}
    >
      <h1
        className="text-center"
        style={{ fontSize: "28px", fontWeight: "500" }}
      >
        Bulk SMS for Business
      </h1>
      <div className="pt-5">
        <div className="table-responsive">
          <table
            className="table table-bordered table-striped text-center"
            style={{ border: "1px solid rgba(248,248,248,248)" }}
          >
            <thead>
              <tr
                className=" text-center text-light"
                style={{ background: "#11a5db" }}
              >
                <th colSpan="8">SMS PACKAGE & PRICE</th>
              </tr>
              <tr className="bg-light">
                <th className="text-dark text-left" scope="col">
                  #
                </th>
                <th className="text-dark" scope="col">
                  SMS QUANTITY
                </th>
                <th className="text-dark" scope="col">
                  NON MASKING SMS PRICE/SMS
                </th>
                <th className="text-dark" scope="col">
                  TOTAL
                </th>
                <th className="text-dark" scope="col">
                  VALIDITY
                </th>
                <th className="text-dark" scope="col">
                  MASKING SMS PRICE/SMS
                </th>
                <th className="text-dark" scope="col">
                  TOTAL
                </th>
                <th className="text-dark" scope="col">
                  VALIDITY
                </th>
              </tr>
            </thead>
            <tbody>
              {data?.map((item, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item?.quantity}</td>
                  <td>{FixedNumber(item?.nonMaskingPrice )}</td>
                  <td>{item?.total1}</td>
                  <td>{item?.validity1}</td>
                  <td>{FixedNumber(item?.maskingPrice )}</td>
                  <td>{item?.total2}</td>
                  <td>{item?.validity2}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default BulkSmsTable;
