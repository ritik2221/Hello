# E-commerce Platform for Footwear

This is a full-stack e-commerce platform for selling footwear. It includes a modern, responsive frontend built with React and a robust backend API built with Node.js and Express.

## Features

*   **Rotating Image Slider:** A dynamic hero section with an auto-rotating image slider.
*   **Sticky Header:** A sticky header with navigation, search, and cart functionality.
*   **Product Catalog:** A comprehensive product catalog with advanced filtering and sorting options.
*   **Product Detail Page:** A detailed product page with an image gallery, size and color selectors, and a reviews section.
*   **Shopping Cart:** A slide-out cart and a full-page cart view with quantity steppers and other actions.
*   **Checkout Process:** A multi-step checkout process with a two-column layout for shipping and order summary.
*   **User Authentication:** A login/register modal with session management.
*   **User Dashboard:** A secure user dashboard for viewing orders, managing a wishlist, and editing a profile.
*   **Admin Dashboard:** A secure admin dashboard for managing products (CRUD operations).
*   **Floating UI Elements:** A floating action button for live chat and a quick-actions rail for easy navigation.
*   **Static Content Pages:** "About Us" and "Contact/Support" pages.

## Technologies Used

*   **Frontend:**
    *   React
    *   React Router
    *   Axios
    *   CSS
*   **Backend:**
    *   Node.js
    *   Express
    *   MongoDB
    *   Mongoose
    *   CORS
    *   Dotenv

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

*   Node.js and npm installed
*   MongoDB installed and running

### Installation

1.  **Clone the repo:**
    ```sh
    git clone https://github.com/your_username_/your_repository.git
    ```
2.  **Install frontend dependencies:**
    ```sh
    npm install
    ```
3.  **Install backend dependencies:**
    ```sh
    cd server
    npm install
    ```

### Running the Application

1.  **Start the backend server:**
    ```sh
    cd server
    npm start
    ```
    The backend server will start on `http://localhost:5000`.

2.  **Start the frontend server:**
    ```sh
    npm start
    ```
    The frontend application will open in your browser at `http://localhost:3000`.

## Project Structure

```
/
├── public/
├── src/
│   ├── components/
│   ├── context/
│   ├── data/
│   ├── pages/
│   ├── App.js
│   ├── index.js
│   └── ...
├── server/
│   ├── models/
│   ├── routes/
│   ├── index.js
│   └── package.json
└── package.json
```

## API Endpoints

*   `GET /products`: Get all products.
*   `GET /products/:id`: Get a single product by ID.
*   `POST /products/add`: Add a new product.
*   `POST /products/update/:id`: Update a product by ID.
*   `DELETE /products/:id`: Delete a product by ID.
