# url-shorter# URL Shortener

A modern URL shortening service built with Node.js, Express, and MongoDB. This web application allows users to create shortened URLs that are easier to share and track.

## Features

- Shorten long URLs into compact, shareable links
- Track number of clicks for each shortened URL
- RESTful API endpoints
- Simple and responsive web interface
- MongoDB database for persistent storage

## Tech Stack

- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Node.js, Express
- **Database**: MongoDB
- **Additional Tools**: 
  - cors (Cross-Origin Resource Sharing)
  - shortid (URL ID generation)
  - mongoose (MongoDB ODM)
  - dotenv (Environment Variables)

## Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/url-shorter.git
cd url-shorter
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory:
```env
MONGODB_URI=your_mongodb_connection_string
PORT=3000
```

4. Start the server:
```bash
npm start
```

## API Endpoints

### POST /api/url/shorten
Creates a shortened URL

**Request Body:**
```json
{
  "originalUrl": "https://example.com/very-long-url"
}
```

**Response:**
```json
{
  "originalUrl": "https://example.com/very-long-url",
  "shortUrl": "abc123",
  "clicks": 0,
  "createdAt": "2024-03-12T..."
}
```

### GET /:shortUrl
Redirects to the original URL and increments click counter

## Usage

1. Open your browser and navigate to `http://localhost:3000`
2. Enter a URL in the input field
3. Click "Shorten URL"
4. Copy and share the generated short URL

## Deployment

This application can be deployed to various platforms:

### Heroku
```bash
heroku create
git push heroku main
```

### Railway
1. Connect your GitHub repository
2. Add environment variables
3. Deploy automatically from main branch

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Author

Your Name - [@yourgithub](https://github.com/yourusername)

## Acknowledgments

- Thanks to shortid for URL generation
- MongoDB Atlas for database hosting