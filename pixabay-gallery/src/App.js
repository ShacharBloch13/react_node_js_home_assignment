import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchImages, setCategory } from './actions';
import './App.css';

const App = () => {
    const dispatch = useDispatch();
    const { images, category } = useSelector(state => state.images);
    const [page, setPage] = useState(1);

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
    };

    return (
        <div className="App">
            <header>
                <button onClick={handlePrev}>Prev</button>
                <button onClick={() => handleCategoryChange('animals')}>Change Category</button>
                <button onClick={handleNext}>Next</button>
            </header>
            <div className="gallery">
                {images.map(image => (
                    <div key={image.id} className="image-item">
                        <img src={image.webformatURL} alt={image.tags} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default App;