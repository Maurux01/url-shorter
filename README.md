# URL Shortener

This project is a simple web application that allows users to shorten long URLs. It is built using React and utilizes a URL shortening service to generate shortened links.

## Project Structure

```
url-shortener
├── public
│   ├── css
│   │   └── styles.css      # Styles for the application
│   └── index.html          # Main HTML file
├── src
│   ├── components
│   │   └── URLForm.js      # Component for URL input form
│   ├── App.js              # Main application component
│   └── utils
│       └── api.js          # API utility functions
├── .env                     # Environment variables
├── package.json             # npm configuration file
├── webpack.config.js        # Webpack configuration
└── README.md                # Project documentation
```

## Setup Instructions

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd url-shortener
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Create a `.env` file:**
   Add your API keys and configuration settings in the `.env` file.

4. **Run the application:**
   ```bash
   npm start
   ```

5. **Open your browser:**
   Navigate to `http://localhost:3000` to view the application.

## Usage

- Enter a long URL in the input field and click the "Shorten" button.
- The shortened URL will be displayed below the form.

## Contributing

Feel free to submit issues or pull requests if you have suggestions or improvements for the project.