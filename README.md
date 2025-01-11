# Koinx Task

## Project Overview
The Koinx Task project is a Node.js-based backend application designed to provide API endpoints for managing cryptocurrency-related data. It utilizes MongoDB for database management and Express.js for creating a RESTful API.

---

## Folder Structure

```
Koinx_Task/
├── models/           # Database models for MongoDB collections
├── .env              # Environment variables
├── routes/           # Route definitions
├── controllers/      # Request and response handling logic
├── config/           # Configuration files (e.g., database connections)
├── app.js            # Entry point of the application
├── constants.js      # Constants used across the application
├── .gitignore        # Ignored files for version control
├── package-lock.json # Dependency tree and locked versions
├── node_modules/     # Installed dependencies
├── package.json      # Project metadata and dependencies
└── .git/             # Git repository metadata
```

---

## Prerequisites

- **Node.js** (v14 or later)
- **MongoDB**
- **npm** (v6 or later)

---

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```bash
   cd Koinx_Task
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Set up environment variables in the `.env` file. Use the template below:
   ```env
   DB_URI=your_mongodb_connection_string
   PORT=3000
   SECRET_KEY=your_secret_key
   ```

---

## Usage

1. Start the application:
   ```bash
   npm start
   ```
   The server will run on the port specified in the `.env` file.

2. Available endpoints (base URL: `http://localhost:3000/api`):

   - **POST** `/info`: Retrieves cryptocurrency information. Requires `Accept: application/json` header.
   - **GET** `/deviation`: Fetches deviation data.
   - **GET** `/stats`: Provides statistical insights.

3. Example API call using `curl`:
   ```bash
   curl --request GET \
        --url http://localhost:3000/api/stats \
        --header 'Accept: application/json'
   ```

---

## Features

- **Cryptocurrency Information Retrieval**: Provides real-time data on supported cryptocurrencies.
- **Deviation Calculation**: Offers analytical insights into deviations in data.
- **Database Integration**: Uses MongoDB for efficient data storage and retrieval.

---

## Development

- Run the application in development mode:
  ```bash
  npm run dev
  ```

- Use a tool like Postman to test API endpoints.

---

## Contribution

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m 'Add a new feature'
   ```
4. Push to the branch:
   ```bash
   git push origin feature-name
   ```
5. Submit a pull request.

---

## License

This project is licensed under the MIT License. See the LICENSE file for details.


