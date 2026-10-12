import mobile from '../../../media/PosBilling/point_of.png';
import Subscription from '../../../media/PosBilling/subscriptions invoice.png';
import question from '../../../media/PosBilling/quotations.png';
import purchase from '../../../media/PosBilling/Stock Purchase Orders.png';
import management from '../../../media/PosBilling/stock management.png';
import account from '../../../media/PosBilling/accounts & transactions.png';
import client from '../../../media/PosBilling/crm.png';
import supplier from '../../../media/PosBilling/stock suppliers.png';
import billing from '../../../media/PosBilling/billing.png';
import hrm from '../../../media/PosBilling/hr.png';


const data = [
  {
    id: 1,
    title: 'Mobile Supported Point of Sale',
    img: mobile,
    list: [
      'Elegant Point Of Sale',
      'Support for Multiple Payments',
      'POS Registers Log',
      'Dedicated POS Style and Settings for each employee',
      'QR Code Due Invoices'
    ]
  },
  {
    id: 2,
    title: 'Subscriptions Invoice Module',
    img: Subscription,
    list: [
      'Subscription Management Module for recurring invoices',
      'Support for Online Card Payment',
      'Performance Invoice',
      'Integrated Stock Manager',
      'Get online payment with unique invoice link',
      'Decent Invoice A4 & Compact POS Printing'
    ]
  },
  {
    id: 3,
    title: 'Quotations',
    img: question,
    list: [
      'Send Quotes with proposal as Email',
      'Convert quotes to invoices',
      'Customer can approve quote'
    ]
  },
  {
    id: 4,
    title: 'Stock Purchase Orders',
    img: purchase,
    list: [
      'Send Purchase receipt with your stock requirement to suppliers',
      'Integrated to Inventory Manager'
    ]
  },
  {
    id: 5,
    title: 'Stock Management',
    img: management,
    list: [
      'Improved & Intelligent Product Variations System',
      'Track Stock Worth with category ,warehouse',
      'Add Product Serials',
      'Manage products with live stock status',
      'Get Email Alerts of low stock items'
    ]
  },
  {
    id: 6,
    title: 'Accounts & Transactions',
    img: account,
    list: [
      'Custom Type Company Accounts',
      'Organized Balance Sheet',
      'Optional Dual Entry System',
      'Custom Transactions and Transaction Categories'
    ]
  },
  {
    id: 7,
    title: 'Client Management',
    img: client,
    list: [
      'Manage Customer and Contacts',
      'Customer Wallet',
      'Customer Reports'
    ]
  },
  {
    id: 8,
    title: 'Stock Suppliers',
    img: supplier,
    list: [
      'Manage Stock Purchase orders',
      'Payment records',
      'Suppliers Reports'
    ]
  },
  {
    id: 9,
    title: 'Billing',
    img: billing,
    list: [
      'Custom tax,discount and grouped units per products',
      'Delivery Note',

    ]
  },
  {
    id: 10,
    title: 'HRM',
    img: hrm,
    list: [
      'Custom Roles & 70+ Permissions',
      'Salary management with Payroll',
      'Attendance with Self Attendance or Manual'
    ]
  }
]

export default data;