import enroll from '../../../media/hospitalmanagement/patient-enrolment.png';
import laboratory from '../../../media/hospitalmanagement/laboratory.png';
import clinical from '../../../media/hospitalmanagement/clinical-benefits.png';
import inpatient from '../../../media/hospitalmanagement/inpatient-care.png';
import stock from '../../../media/hospitalmanagement/stock-execution.png';
import report from '../../../media/hospitalmanagement/reports.png';
import billing from '../../../media/hospitalmanagement/billing-accounting.png';



const data = [
  {
    id: 1,
    title: "Patient enrolment",
    desc: "Patients should register with their demographics, name, touch, relationships and other information. Patients searching. Print Identification cards for patients.",
    img: enroll

  },
  {
    id: 2,
    title: "Laboratory",
    desc: "Manage ordering, screening, and monitoring of patients. A bird's eye view of the workload from the laboratory. Turn in referral samples.",
    img: laboratory
  }, {
    id: 3,
    title: "Clinical Benefits",
    desc: "Capture, keep, and access patient health information. Establish different forms of the general and the disease. Capture prescriptions for medications, and order hospital, radiology, other examinations or procedures. Using prescription templates pre-created for the drug.",
    img: clinical
  },
  {
    id: 4,
    title: "Inpatient care",
    desc: "  Manage admission of patients, conduct bed assignments and monitor occupancy of the room.",
    img: inpatient
  },
  {
    id: 5,
    title: "Stock Execution",
    desc: "Manage, register and reorder medical drugs and other supplies. Switch and keep track of stock rates.Group users into breakout rooms for team collaboration.",
    img: stock
  },
  {
    id: 6,
    title: "Reports",
    desc: "Perform reports on financial, clinical, and public health.",
    img: report
  },
  {
    id: 7,
    title: "Billing, Accounting",
    desc: "Manage and maintain precise track of all payments and financial transactions.",
    img: billing
  }
]

export default data