# ShopHub - React Assessment Project

A modern e-commerce web application built with React, featuring user authentication, product browsing, filtering, and a shopping cart system.

## Project Description

ShopHub is a fully functional e-commerce platform that demonstrates core React concepts including:

- **User Authentication**: Secure login system with demo credentials
- **Protected Routes**: Authentication-based access control for products and cart pages
- **Product Catalog**: Browse and view detailed product information
- **Advanced Filtering**: Filter products by category, price range, and other criteria
- **Shopping Cart**: Add/remove items, manage quantities, and view cart totals
- **Context API**: State management using React Context for authentication and cart data
- **Responsive Design**: Modern UI with CSS styling for optimal user experience

## Tech Stack

- **Frontend Framework**: React 19.2.5
- **Routing**: React Router v7.14.2
- **State Management**: React Context API
- **Build Tool**: Create React App (react-scripts 5.0.1)
- **Testing**: Jest with React Testing Library

## Setup Steps

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/lepakshirohith26-ux/rohith_lepakshi_2489118_react_assessment.git
   cd rohith_lepakshi_2489118_react_assessment/shophub
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```
   The application will open in your browser at `http://localhost:3000`

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Run tests**
   ```bash
   npm test
   ```

## Environment Variables

Currently, the application uses hardcoded demo credentials for authentication. No environment variables are required for local development.

For future production deployment, consider adding:

```env
REACT_APP_API_URL=your_api_endpoint
REACT_APP_AUTH_TOKEN_KEY=authToken
REACT_APP_CART_KEY=cartData
```

## Demo Credentials

Use the following credentials to log in:

| Field    | Value        |
|----------|--------------|
| Email    | demo@shop.com |
| Password | demo123      |

**Note**: These are hardcoded credentials for demonstration purposes. In a production environment, implement proper authentication with a backend service.

## Features

### 1. Authentication
- Login page with email and password validation
- Protected routes that redirect unauthenticated users to login
- Session persistence using localStorage
- Logout functionality

### 2. Product Catalog
- Display products with images, names, prices, and ratings
- View detailed product information on dedicated product pages
- Search and filter capabilities

### 3. Shopping Cart
- Add products to cart
- Remove items from cart
- Adjust item quantities
- View cart totals and itemized breakdown
- Persistent cart state using Context API

### 4. User Interface
- Clean, modern design with responsive layout
- Navigation bar with search and account options
- Product filtering panel
- Cart icon with item count badge

## Project Structure

```
shophub/
├── public/
│   ├── index.html
│   ├── manifest.json
│   └── robots.txt
├── src/
│   ├── App.jsx                 # Main app component
│   ├── App.css
│   ├── AuthContext.jsx         # Authentication context
│   ├── CartContext.jsx         # Cart state management
│   ├── ProductDetail.jsx       # Product detail page
│   ├── ProtectedRoute.jsx      # Route protection wrapper
│   ├── index.js
│   ├── index.css
│   ├── LoginPage/              # Login page components
│   │   ├── LoginPage.jsx
│   │   ├── Form.jsx
│   │   ├── Logo.jsx
│   │   └── WelcomeText.jsx
│   ├── Products/               # Products page components
│   │   ├── ProductsPage.jsx
│   │   ├── ProductContainer.jsx
│   │   ├── Filters.jsx
│   │   ├── Item.jsx
│   │   ├── Navbar.jsx
│   │   └── test.jsx
│   └── Cart/                   # Cart components
│       ├── Cart.jsx
│       ├── CartItem.jsx
│       └── Cart.css
├── package.json
└── README.md
```

## Available Routes

| Route          | Access       | Description                    |
|----------------|--------------|--------------------------------|
| `/login`       | Public       | Login page                     |
| `/`            | Protected    | Products listing page          |
| `/products/:id`| Protected    | Individual product detail page |
| `/cart`        | Protected    | Shopping cart page             |

## Running the Application

1. **Development Mode**:
   ```bash
   npm start
   ```
   Runs the app in development mode with hot reload enabled.

2. **Production Build**:
   ```bash
   npm run build
   ```
   Creates an optimized production build in the `build/` folder.

3. **Testing**:
   ```bash
   npm test
   ```
   Launches the test runner in interactive watch mode.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Deployment

This application can be deployed to various hosting platforms:

- **Vercel**: Connected to GitHub for automatic deployments
- **Netlify**: Drag-and-drop or GitHub integration
- **GitHub Pages**: Using build artifacts
- **Traditional Hosting**: Upload build folder to web server

## Future Enhancements

- Backend API integration for real product data
- User registration and password reset
- Payment gateway integration
- Order history and tracking
- User reviews and ratings
- Wishlist functionality
- Admin dashboard for product management

## Troubleshooting

### Port Already in Use
If port 3000 is already in use:
```bash
$env:PORT=3001; npm start
```

### Dependencies Issues
Clear node_modules and reinstall:
```bash
rm -r node_modules package-lock.json
npm install
```

### Cache Issues
Clear browser cache or use incognito mode when testing authentication changes.

## Repository

- **GitHub**: https://github.com/lepakshirohith26-ux/rohith_lepakshi_2489118_react_assessment

## Notes

- This is an assessment project demonstrating React fundamentals and best practices
- Authentication is simplified for demonstration purposes
- Product data is currently mock data and can be replaced with API calls

## Author

**Rohith Lepakshi** (2489118)

## License

This project is private and created for assessment purposes.

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
