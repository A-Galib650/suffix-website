const { SitemapStream, streamToPromise } = require('sitemap');
const { writeFileSync } = require('fs');

const sitemap = new SitemapStream({
  hostname: 'https://suffixit.com',
});

const urls = [
  '/',
  '/home',
  '/webmail',
  '/contact',
  '/about',
  '/astha-policy',
  '/career',
  '/service/domain-hosting',
  '/service/erp-consulting',
  '/service/web-ecommerce',
  '/service/custom-applications',
  '/service/video-conferencing',
  '/service/it-infrastructure',
  '/service/mobile-apps',
  '/service/hospital-management',
  '/service/learning-management',
  '/service/storage-backup',
  '/service/bulk-sms',
  '/service/consultancy-system-integrator',
  '/service/it-ot-security-solution',
  '/service/power-cooling',
  '/service/pos-system',
  '/service/field-force-management',
  '/service/iot',
  '/service/Industrial-Monitoring',
  '/product/payroll-system',
  '/product/interconnect-billing',
  '/product/e-commerce',
  '/product/rupantor-erp',
  '/product/provident-fund',
  '/product/hotel-booking-system',
  '/product/rupantor-inventory',
  '/product/transformer-monitoring',
  '/product/field-force-management',
  '/product/pos-system',
  '/top-10-software-company-in-bangladesh',
];

urls.forEach(url => sitemap.write({ url }));

sitemap.end();

streamToPromise(sitemap).then(data => {
  writeFileSync('./public/sitemap.xml', data.toString());
});