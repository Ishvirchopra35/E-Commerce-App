# E-Commerce Store

A full-stack e-commerce web application built with Next.js, featuring real-time shopping cart, product browsing, and checkout functionality with MongoDB integration.

## Project Overview

This is a modern e-commerce platform that allows users to browse products by category, add items to their shopping cart, and complete purchases through an integrated checkout system. The application features a responsive design, persistent cart state, and server-side rendering for optimal performance.

## Screenshots

<div align="center">

### Home Page - Product Catalog

<img width="1919" height="986" alt="image" src="https://github.com/user-attachments/assets/53e38ced-26fa-4803-b083-4a10b8e3e968" />

*Browse products organized by categories with search functionality*

### Shopping Cart

<img width="1919" height="989" alt="image" src="https://github.com/user-attachments/assets/43be84d2-0e2d-46d3-963f-6e0e0a040d7d" />

*View cart items with quantity controls and price breakdown*

### Checkout Page

<img width="1919" height="986" alt="image" src="https://github.com/user-attachments/assets/3b255148-a242-4782-b45f-6ec0c52215c8" />

*Complete order with shipping details and payment*

### Search Functionality

<img width="1917" height="994" alt="image" src="https://github.com/user-attachments/assets/1d484e3c-0245-462a-8ff9-7d0a8a6d38bf" />

*Ability to search products by name*

### Order Success

<img width="1919" height="991" alt="image" src="https://github.com/user-attachments/assets/e4cc35a4-d9ad-4a34-8b52-8c811d0bca46" />

*Confirmation message after successful order placement*

</div>

---

## Features

- **Product Catalog**: Browse products organized by categories
- **Search Functionality**: Real-time product search across all items
- **Shopping Cart**: 
  - Add/remove products with quantity controls
  - Persistent cart using local storage
  - Real-time price calculations
  - Cart item counter in navigation
- **Checkout System**:
  - Customer information form
  - Shipping cost calculation
  - Subtotal and total price display
  - Order submission to database
- **Responsive Design**: Mobile-first design with Tailwind CSS
- **Server-Side Rendering**: Fast page loads with Next.js SSR
- **Database Integration**: MongoDB for product and order storage

## Tech Stack

### Frontend
- **Next.js**: React framework with SSR and routing
- **React**: Component-based UI library
- **Tailwind CSS**: Utility-first CSS framework
- **Context API**: Global state management for shopping cart

### Backend
- **Next.js API Routes**: Serverless API endpoints
- **MongoDB**: NoSQL database for data persistence
- **Mongoose**: MongoDB object modeling

### Libraries
- **use-local-storage-state**: Persistent cart state across sessions
- **Heroicons**: SVG icon library


## Database Schema

### Product Model
```
{
  name: String,           // Product name
  description: String,    // Product description
  price: Number,          // Price in dollars
  category: String,       // Product category
  picture: String         // Image URL
}
```

### Order Model
```
{
  products: Object,       // Ordered products with quantities
  name: String,           // Customer name
  address: String,        // Shipping address
  city: String,           // City and postal code
  email: String,          // Customer email
  paid: Number,           // Payment status (default: 0)
  timestamps: true        // createdAt, updatedAt
}
```

## Getting Started

### Prerequisites

```
node --version  # Node.js 14 or higher
npm --version   # npm 6 or higher
```

### Installation

1. **Clone the repository**
```
git clone https://github.com/yourusername/ecommerce-store.git
cd ecommerce-store
```

2. **Install dependencies**
```
npm install
```

3. **Set up environment variables**

Create a `.env` file in the root directory:
```
MONGODB_URI=your_mongodb_connection_string
```

4. **Run the development server**
```
npm run dev
```

5. **Open in browser**
```
http://localhost:3000
```

## Configuration

### MongoDB Setup

1. Create a MongoDB Atlas account or use local MongoDB
2. Create a new database
3. Add your connection string to `.env.local`
4. The app will automatically connect on startup

### Adding Products

Products can be added directly to MongoDB or through an admin interface (to be implemented). Example product:

```
{
  "name": "Wireless Headphones",
  "description": "High-quality Bluetooth headphones with noise cancellation",
  "price": 79.99,
  "category": "Electronics",
  "picture": "https://example.com/image.jpg"
}
```

## Key Features Explained

### Shopping Cart Management

The cart uses React Context API for global state and local storage for persistence:

```
// Add product to cart
setSelectedProducts(prev => [...prev, productId]);

// Remove product from cart
setSelectedProducts(prev => prev.filter((value, index) => index !== pos));
```

### Real-Time Price Calculation

```
let subtotal = 0;
for (let id of selectedProducts) {
  const price = productsInfos.find(p => p._id === id)?.price || 0;
  subtotal += price;
}
const total = subtotal + shippingPrice;
```

### Category-Based Product Display

Products are automatically grouped by category and displayed with horizontal scrolling:

```
const categoryNames = [...new Set(products.map(p => p.category))];
```

### Search Functionality

Real-time product filtering based on search input:

```
products = products.filter(p => 
  p.name.toLowerCase().includes(phrase.toLowerCase())
);
```

## Responsive Design

- **Mobile-First**: Optimized for mobile devices
- **Horizontal Scrolling**: Category sections scroll horizontally on small screens
- **Sticky Footer**: Navigation always accessible
- **Adaptive Layout**: Components adjust to screen size

## UI/UX Features

- **Emerald Color Scheme**: Modern green accent color
- **Smooth Scrolling**: Snap-to-grid product browsing
- **Visual Feedback**: Active states for navigation and buttons
- **Loading States**: Handles empty cart and loading states
- **Success Messages**: Order confirmation feedback

## Future Enhancements

- [ ] User authentication and accounts
- [ ] Order history tracking
- [ ] Product reviews and ratings
- [ ] Payment gateway integration (Stripe/PayPal)
- [ ] Admin dashboard for product management
- [ ] Wishlist functionality
- [ ] Product image gallery
- [ ] Advanced filtering (price range, ratings)
- [ ] Email notifications for orders
- [ ] Inventory management
- [ ] Discount codes and promotions
- [ ] Multi-currency support

## Troubleshooting

**Cart not persisting**:
- Check browser local storage settings
- Ensure cookies are enabled

**Products not loading**:
- Verify MongoDB connection string
- Check network tab for API errors
- Ensure products exist in database

**Checkout not working**:
- Check all required fields are filled
- Verify API routes are accessible
- Check MongoDB write permissions

## API Endpoints

### GET /api/products
Fetch products by IDs or all products
```
// Get specific products
GET /api/products?ids=id1,id2,id3

// Response
[
  {
    _id: "...",
    name: "Product Name",
    price: 29.99,
    ...
  }
]
```

### POST /api/checkout
Submit order with customer details
```
POST /api/checkout
Body: {
  name: "Customer Name",
  email: "email@example.com",
  address: "123 Street",
  city: "City, 12345",
  products: "id1,id2,id3"
}
```

## Learning Outcomes

This project demonstrates:
- Full-stack development with Next.js
- Context API for state management
- MongoDB integration with Mongoose
- Server-side rendering (SSR)
- RESTful API design
- Responsive web design with Tailwind CSS
- Form handling and validation
- Local storage for persistence
- Component-based architecture

## License

This project is open source and available for educational purposes.

## Acknowledgments

- Next.js team for the excellent framework
- Tailwind CSS for the utility-first approach
- MongoDB for flexible data storage
- Heroicons for beautiful SVG icons

---

**Author**: Ishvir Chopra 
**Date**: November 2025 
**Contact**: ishvir.chopra@gmail.om
**Live Demo**: Video coming soon!

---

## Quick Start Commands

```
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Made with 💚 by [Your Name]
