import React, { useState } from 'react';
import URLForm from './components/URLForm';

const App = () => {
    const [shortenedURLs, setShortenedURLs] = useState([]);

    const addShortenedURL = (url) => {
        setShortenedURLs([...shortenedURLs, url]);
    };

    return (
        <div>
            <h1>URL Shortener</h1>
            <URLForm addShortenedURL={addShortenedURL} />
            <h2>Shortened URLs</h2>
            <ul>
                {shortenedURLs.map((url, index) => (
                    <li key={index}>{url}</li>
                ))}
            </ul>
        </div>
    );
};

export default App;