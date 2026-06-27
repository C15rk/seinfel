import { getRequestURL, setHeader } from 'h3';

const routes = [
  '/',
  '/contact',
  '/applicationareas',
  '/AboutSeinfel/Introduction',
  '/AboutSeinfel/Seinfel',
  '/AboutSeinfel/Manu',
  '/AboutSeinfel/Related',
  '/AboutSeinfel/rd/OneStop',
  '/AboutSeinfel/rd/TestCenter',
  '/life/Planning',
  '/life/Manufacturing/overview',
  '/life/Manufacturing/Quick',
  '/life/Manufacturing/Incoming',
  '/life/Manufacturing/Workflow',
  '/life/Manufacturing/Process',
  '/life/Manufacturing/Product',
  '/life/Delivery/Transportation',
  '/life/Delivery/Warehousing',
  '/life/Delivery/Traceability',
  '/PRODUCTS/FloorCare/Paper',
  '/PRODUCTS/FloorCare/Woven',
  '/PRODUCTS/FloorCare/Sewn',
  '/PRODUCTS/FloorCare/Filter',
  '/PRODUCTS/FloorCare/Soft',
  '/PRODUCTS/FloorCare/Pre',
  '/PRODUCTS/AirPuri/Dust',
  '/PRODUCTS/AirPuri/Deodorizing',
  '/PRODUCTS/AirPuri/Health',
  '/PRODUCTS/AirPuri/Humidification',
  '/PRODUCTS/Commercial/pre',
  '/PRODUCTS/Commercial/Medium',
  '/PRODUCTS/Commercial/High',
  '/PRODUCTS/Commercial/FFU',
  '/PRODUCTS/Commercial/HEPA',
  '/PRODUCTS/EcoFriendly/Product',
  '/PRODUCTS/EcoFriendly/ProductCategory',
  '/PRODUCTS/EcoFriendly/Environmental',
  '/PRODUCTS/EcoFriendly/Application',
  '/PRODUCTS/Automotive/Product',
  '/PRODUCTS/Automotive/Catalogo',
];

export default defineEventHandler((event) => {
  const { origin } = getRequestURL(event);
  const urls = routes
    .map((path) => `<url><loc>${new URL(path, origin).href}</loc></url>`)
    .join('');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`;

  setHeader(event, 'content-type', 'application/xml; charset=utf-8');
  return xml;
});
