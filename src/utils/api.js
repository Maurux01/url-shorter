export const shortenURL = async (longURL) => {
    const response = await fetch(`${process.env.API_URL}/shorten`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url: longURL }),
    });

    if (!response.ok) {
        throw new Error('Failed to shorten URL');
    }

    const data = await response.json();
    return data.shortenedURL;
};