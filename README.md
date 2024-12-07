# Full Stack Node.js NLP Application

This repository contains a full-stack application that allows users to analyze the content of articles using the [MeaningCloud API](https://www.meaningcloud.com/). Users can input an article URL, and the application will perform natural language processing (NLP) on the content, providing detailed insights.

## Features

- Input article URL for analysis.
- Integration with MeaningCloud API for NLP.
- Frontend and backend built with Vanilla JavaScript, Node.js and Express.
- Service worker for offline support.
- Webpack for bundling and asset management.
- Unit testing with Jest.

---

## Technologies Used

- **Node.js**: Backend runtime environment.
- **Express**: Web framework for building the server.
- **Service Worker**: Provides offline capabilities and caching.
- **Webpack**: Module bundler for the frontend assets.
- **Jest**: Testing framework for unit and integration tests.

---

## Getting Started

### Prerequisites

Ensure you have the following installed:

- Node.js (v16 or above)
- npm (Node Package Manager)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/your-repo.git
   cd your-repo
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a .env file in the root directory and add your MeaningCloud API key:

   ```env
   MEANINGCLOUD_API_KEY=your_api_key
   ```

4. Start the development server:

   ```bash
   npm run start
   ```

### Scripts

- Start the server:

  ```bash
  npm start
  ```

- Run the development server with hot reloading:

  ```bash
  npm run build-dev
  ```

- Build for production:

  ```bash
  npm run build-prod
  ```

- Run tests:

  ```bash
  npm test
  ```

### License

This project is licensed under the MIT License. See the LICENSE file for details.
