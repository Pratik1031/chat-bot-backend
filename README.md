MERN Stack Application with TypeScript
Project Overview
This project is a full-stack web application built using the MERN (MongoDB, Express.js, React.js, Node.js) stack, with the addition of TypeScript for enhanced type safety. The application leverages the OpenAI API for natural language processing.

Prerequisites
Before running the application, make sure you have the following installed:

Node.js and npm
MongoDB
OpenAI API Key and Organization ID
Installation
Clone the repository:

bash
Copy code
git clone [https://github.com/your-username/mern-typescript-openai-app.git](https://github.com/Pratik1031/chat-bot-backend)
Change to the project directory:

bash
Copy code
cd mern-typescript-openai-app
Install server dependencies:

bash
Copy code
cd server
npm install
Install client dependencies:

bash
Copy code
cd ../client
npm install
Set up environment variables:

Create a .env file in the server directory.

Add the following variables:

makefile
Copy code
MONGODB_URI=your_mongodb_connection_string
OPENAI_API_KEY=your_openai_api_key
OPENAI_ORG_ID=your_openai_organization_id
Running the Application
Start the server:

bash
Copy code
cd server
npm run start
This will start the Express server on http://localhost:5000.

Start the client:

bash
Copy code
cd ../client
npm run start
This will start the React app on http://localhost:3000.

Access the application in your web browser at http://localhost:3000.

Handling OpenAI API Errors
If the OpenAI API returns a 500 error indicating that the limit has been exceeded, follow these steps:

Replace the OpenAI secret key and organization ID with your own credentials.

Obtain your OpenAI API key and organization ID from the OpenAI dashboard.

Update the .env file in the server directory with your new credentials:

makefile
Copy code
OPENAI_API_KEY=your_new_openai_api_key
OPENAI_ORG_ID=your_new_openai_organization_id
Restart the server:

bash
Copy code
cd server
npm run start
Now, your application should be working with the updated OpenAI credentials.

Contributing
Feel free to contribute to this project by opening issues or submitting pull requests. Your feedback and contributions are welcome!
