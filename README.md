**Patent Manager**
A MERN stack project for managing patents, built with Node.js, MongoDB, React, and Express. This project is divided into two parts:

pback: Backend server, handling APIs and database integration.
pfront: Frontend React application, providing the user interface.

**Prerequisites**
Before running the project, ensure the following tools are installed:

Node.js (latest LTS version recommended)
Download Node.js
MongoDB Community Server
Download MongoDB
MongoDB Compass (optional, for database visualization)
Download MongoDB Compass
Git (to clone the project repository, if applicable)
Download Git


**How to Run the Project**
Follow these steps to run both the backend and frontend of the project:

**Step 1: Clone the Repository (Optional)**
If the project is on GitHub, clone it using:
git clone https://github.com/<your-username>/patent-manager.git
cd patent-manager

**Step 2: Install Backend Dependencies**
Navigate to the backend folder:
cd pback
Install dependencies:
npm install
Create a .env file in the pback folder and configure the following environment variables:
MONGO_URI=mongodb://localhost:27017/<your-database-name>
PORT=5000
Replace <your-database-name> with the name of your MongoDB database (e.g., patent_manager).

Start the backend server:
node server.js
npx nodemon server.js
Backend will run on http://localhost:5000.

**Step 3: Install Frontend Dependencies**
Open a new terminal.
Navigate to the frontend folder:
cd pfront
Install dependencies:
npm install
Start the React development server:
bash
Copy code
npm start
The frontend will open automatically in your browser at http://localhost:3000.

**Step 4: Test the Application**
Verify Backend:
Use tools like Postman or a browser to check your API endpoints, e.g.,:
GET http://localhost:5000/api/your-endpoint
Ensure the backend connects to MongoDB successfully.
Verify Frontend:

Open http://localhost:3000 in your browser and interact with the application.
Ensure that the frontend communicates with the backend (e.g., fetching or sending data).
Database Management with MongoDB Compass
To visualize and manage the data in your MongoDB database:

**Open MongoDB Compass.**
Connect using the connection string from your .env file:
mongodb://localhost:27017/<your-database-name>
Replace <your-database-name> with the name of your database.

Once connected:
View collections (tables) such as users, patents, etc.
Perform CRUD operations (Create, Read, Update, Delete) directly.
Troubleshooting
Common Issues
PORT or MONGO_URI not recognized:
Ensure you have a .env file in the pback folder with the correct configuration.
Frontend shows a blank page or errors:
Ensure the React server is running on http://localhost:3000.
Check the API calls in your frontend code to ensure they point to http://localhost:5000.
Backend not connecting to MongoDB:
Verify the MONGO_URI in your .env file matches the database name in MongoDB Compass.
Ensure MongoDB is running (mongod process).


