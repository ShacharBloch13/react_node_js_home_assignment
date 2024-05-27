import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchImages, setCategory } from './actions';
import './App.css';

const categories = ['animals', 'nature', 'sports', 'technology', 'people', 'food', 'travel', 'architecture', 'business']; // Add more categories as needed

const App = () => {
    const dispatch = useDispatch();
    const { images, category } = useSelector(state => state.images);
    const [page, setPage] = useState(1);
    const [isModalOpen, setIsModalOpen] = useState(false);

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
        setIsModalOpen(false); // Close the modal after selecting a category
    };

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="App">
            <header>
                <button onClick={handlePrev}>Prev</button>
                <button onClick={openModal}>Change Category</button>
                <button onClick={handleNext}>Next</button>
            </header>
            <div className="gallery">
                {images.map(image => (
                    <div key={image.id} className="image-item">
                        <img src={image.webformatURL} alt={image.tags} style={{ width: '512px', height: '256px' }} />
                    </div>
                ))}
            </div>
            {isModalOpen && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close-button" onClick={closeModal}>&times;</span>
                        <h2>Select a Category</h2>
                        <ul>
                            {categories.map(cat => (
                                <li key={cat} onClick={() => handleCategoryChange(cat)}>{cat}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}
        </div>
    );
};

export default App;
