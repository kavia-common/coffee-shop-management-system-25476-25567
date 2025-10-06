//
// PUBLIC_INTERFACE
// A small in-memory data source of coffee products for demo purposes.
/**
 * products is a list of coffee items used by Home and Cafe screens.
 * Each item has: id, name, price, rating, reviews, distance, image, and category tag.
 */
export const products = [
  {
    id: 'haus-coffee',
    name: 'Haus Coffee',
    price: 3.0,
    rating: 4.4,
    reviews: 429,
    distance: '2.5 miles',
    image: '/assets/figmaimages/figma_image_203_73.png',
    category: 'coffee',
  },
  {
    id: 'home-coffee-roasters',
    name: 'Home Coffee Roasters',
    price: 3.5,
    rating: 4.5,
    reviews: 1200,
    distance: '3.8 miles',
    image: '/assets/figmaimages/figma_image_203_72.png',
    category: 'coffee',
  },
  {
    id: 'cafe-mocha',
    name: 'Cafè Mocha',
    price: 3.0,
    rating: 4.6,
    reviews: 980,
    distance: '1.9 miles',
    image: '/assets/figmaimages/figma_image_207_65.png',
    category: 'drinks',
  },
  {
    id: 'caramel-macchiato',
    name: 'Caramel Macchiato',
    price: 3.5,
    rating: 4.2,
    reviews: 620,
    distance: '2.1 miles',
    image: '/assets/figmaimages/figma_image_205_198.png', // using header asset as a placeholder beverage image
    category: 'drinks',
  }
];

/**
 * getProductById returns a product for a given id, or undefined if not found.
 */
// PUBLIC_INTERFACE
export function getProductById(id) {
  return products.find(p => p.id === id);
}
