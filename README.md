# Pixabay Image Gallery
This project is a full-stack web application that allows users to search for and view images from the Pixabay API. The application is built with React for the frontend and Node.js with Express for the backend. Users can browse images by category, search for specific keywords, and view detailed information about each image.

# Features
1. Search for images by pre-defined categories
2. View detailed information about images including views, downloads, and collections

# Technologies Used
1. Frontend: React, Redux
2. Backend: Node.js, Express
3. CSS: Custom styling
4. API: Pixabay API


# Installation
```git clone https://github.com/yourusername/pixabay-gallery.git```
```cd pixabay-gallery```
```cd pixabay-backend```
```npm install```
```cd ../pixabay-gallery```
```npm install```
Create a .env file in the pixabay-backend directory with the following content:
```PIXABAY_API_KEY=your_pixabay_api_key_here```

# Usage
1. Satrt the backend server:
```cd pixabay-backend```
```node index.js```
2. Start the frontend development server:
```cd ../pixabay-gallery```
```npm start```
3. Open your browser and navigate to: http://localhost:3000

# Project Structure
```
pixabay-gallery/
│
├── pixabay-backend/
│   ├── .env
│   ├── .gitignore
│   ├── index.js
│   ├── package.json
│   ├── package-lock.json
│   └── get_description.py
│
├── pixabay-gallery/
│   ├── node_modules/
│   ├── public/
│   ├── src/
│   │   ├── actions/
│   │   │   └── index.js
│   │   ├── reducers/
│   │   │   ├── imageReducer.js
│   │   │   └── index.js
│   │   ├── App.css
│   │   ├── App.js
│   │   ├── App.test.js
│   │   ├── index.js
│   │   ├── logo.svg
│   │   ├── reportWebVitals.js
│   │   ├── setupTests.js
│   │   └── store.js
│   ├── .gitignore
│   ├── package.json
│   ├── package-lock.json
│   └── README.md
```

# API Endpoints
Backend Endpoints:
  GET /api/images
  Fetch images from Pixabay based on category or search term.
  Query Parameters:
    category (string): The category or keyword to search for images.
    page (number): The page number for pagination.
Frontend Actions:
fetchImages(category, page)
  Fetch images from the backend API based on the provided category and page number.
setCategory(category)
  Set the current image category in the Redux store.


