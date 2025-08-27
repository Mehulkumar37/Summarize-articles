# Synop - Web App for Summarizing Articles

**Synop** is a powerful and user-friendly web application that simplifies the process of summarizing articles from URLs. Whether you're a student looking to extract key information from research papers or a busy professional trying to stay informed, Synop has got you covered. With just a few clicks, you can generate concise and coherent summaries, saving you time and effort.


## Features

- **URL Summarization**: Synop allows you to provide the URL of any article, blog post, or news story, and it will generate a summary for you.

- **Accurate Summaries**: chat gpt cutting-edge natural language processing algorithms ensure that the generated summaries are accurate and relevant.

## Technology Stack

- **Frontend**: Synop's user interface is built using React.js, providing a responsive and interactive experience for users.

- **Backend**: The server-side of Synop is powered by Node.js, enabling efficient processing of article summaries.

- **Database**: MongoDB is used as the database to store user query.

## Installation

To install and run this app locally, follow the steps below:

1. Clone the repository:

   ```bash
   git clone https://github.com/Mehulkumar37/Summarize-articles.git

   ```

2. Install the dependencies for the server by navigating to the server folder:

   ```bash
   cd ./server
   npm install

   ```

3. Set up environment variables by creating a .env file in the "server" folder with the following content:

   ```bash
   API_KEY= your_summerize_rapid_api_key
   MONGO_USER = mongodb_user_id
   MONGO_PASS = mongodb_password
   ```

4. Start the server by running the following command:

   ```bash
   npm start
   ```

This will launch the server and make it accessible at [http://localhost:3030](http://localhost:3030).

4. Install the dependencies for the frontend by navigating to the public folder:

   ```bash
   cd ./public
   npm install

   ```

5. Start the React app by running the following command:

   ```bash
   npm start
   ```
   
This will start the frontend of the app and make it accessible at [http://localhost:3000](http://localhost:3000).

## Disclaimer

Synop is a tool designed to aid in summarizing articles and does not replace critical thinking or research skills. While we strive for accuracy, the generated summaries may not always capture the full context of an article. Users are encouraged to use Synop summaries as a starting point and verify information when needed.

