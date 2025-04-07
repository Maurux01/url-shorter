import React, { useState } from 'react';

const URLForm = ({ onSubmit }) => {
    const [url, setUrl] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!isValidURL(url)) {
            setError('Please enter a valid URL');
            return;
        }
        setError('');
        onSubmit(url);
        setUrl('');
    };

    const isValidURL = (string) => {
        const res = string.match(/(https?:\/\/[^\s]+)/g);
        return res !== null;
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="Enter URL to shorten"
                required
            />
            <button type="submit">Shorten URL</button>
            {error && <p className="error">{error}</p>}
        </form>
    );
};

export default URLForm;