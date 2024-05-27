
/**
 * `src/App.js`
 * 
 * This file is the main component of the React application. It renders the interface for browsing 
 * and searching images from Pixabay. The component includes:
 * - A header with navigation buttons and a search bar.
 * - A gallery that displays images fetched from the Pixabay API.
 * - Modals for selecting image categories and viewing image details.
 * 
 * The component uses Redux for state management, fetching images based on selected categories 
 * or search terms, and handling pagination. It includes functionality for opening and closing 
 * modals and handling user interactions with images.
 */

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchImages, setCategory } from './actions';
import './App.css';

const categories = ['animals', 'nature', 'sports', 'technology', 'people', 'food', 'travel', 'architecture', 'business','fashion', 'iphone wallpaper', 'woman'];

const App = () => {
    const dispatch = useDispatch();
    const { images, category } = useSelector(state => state.images);
    const [page, setPage] = useState(1);
    const [isCategoryModalOpen, setIsCategoryModalOpen] = useState(false);
    const [isImageModalOpen, setIsImageModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    useEffect(() => {
        dispatch(fetchImages(category, page));
    }, [category, page, dispatch]);

    const handleNext = () => {
        setPage(prevPage => prevPage + 1);
    };

    const handlePrev = () => {
        if (page > 1) {
            setPage(prevPage => prevPage - 1);
        }
    };

    const handleCategoryChange = (newCategory) => {
        dispatch(setCategory(newCategory));
        setPage(1); // Reset to the first page on category change
        setIsCategoryModalOpen(false); // Close the modal after selecting a category
    };

    const openCategoryModal = () => {
        setIsCategoryModalOpen(true);
    };

    const closeCategoryModal = () => {
        setIsCategoryModalOpen(false);
    };

    const openImageModal = (image) => {
        setSelectedImage(image);
        setIsImageModalOpen(true);
    };

    const closeImageModal = () => {
        setIsImageModalOpen(false);
    };

    

    return (
        <div className="App">
            <header>
                <button onClick={handlePrev}>Prev</button>
                <button onClick={openCategoryModal}>Change Category</button>
                <button onClick={handleNext}>Next</button>
            </header>
            <div className="gallery">
                {images.map(image => (
                    <div key={image.id} className="image-item" onClick={() => openImageModal(image)}>
                        <img src={image.webformatURL} alt={image.tags} style={{ width: '512px', height: '256px' }} />
                    </div>
                ))}
            </div>
            {isCategoryModalOpen && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close-button" onClick={closeCategoryModal}>&times;</span>
                        <h2>Select a Category</h2>
                        <ul>
                            {categories.map(cat => (
                                <li key={cat} onClick={() => handleCategoryChange(cat)}>{cat}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}
            {isImageModalOpen && selectedImage && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close-button" onClick={closeImageModal}>&times;</span>
                        <h2>Image Details</h2>
                        <p><strong>Views:</strong> {selectedImage.views}</p>
                        <p><strong>Downloads:</strong> {selectedImage.downloads}</p>
                        <p><strong>Collections:</strong> {selectedImage.collections}</p>
                        <p><strong>Tags:</strong> {selectedImage.tags}</p>
                    </div>
                </div>
            )}
        </div>
    );
};



export default App;
