# url-shorter

## Overview
This project is a web-based URL shortener that allows users to create shortened URLs and redirect them to the original URLs.

## Features
- Create shortened URLs
- Retrieve original URLs from shortened URLs
- Redirect from shortened URLs to original URLs

## Technologies Used
- TypeScript
- Express.js
- Node.js

## Setup Instructions
1. Clone the repository:
   ```
   git clone https://github.com/yourusername/url-shortener.git
   ```
2. Navigate to the project directory:
   ```
   cd url-shortener
   ```
3. Install the dependencies:
   ```
   npm install
   ```
4. Start the application:
   ```
   npm start
   ```

## Usage
- To create a shortened URL, send a POST request to `/shorten` with the original URL in the request body.
- To redirect to the original URL, visit the shortened URL in your browser.

## Running Tests
To run the tests, use the following command:
```
npm test
```

## License
This project is licensed under the MIT License.