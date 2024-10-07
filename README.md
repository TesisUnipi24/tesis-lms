# Learning Management System

A full-stack Learning Management System built with Express.js, MongoDB, and React.

## Project Structure

This project uses a monorepo structure with both frontend and backend code in a single repository.

### Backend

- Express.js server
- MongoDB database
- JWT authentication

### Frontend

- React.js

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- MongoDB

### Installation

1. Clone the repository

```bash
git clone https://github.com/yourusername/tesis-lms.git
cd tesis-lms
```

2. Install dependencies

```bash
# Install root dependencies
npm install

# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd ../frontend
npm install
```

3. Set up environment variables
   Create a `.env` file in the backend directory:

```
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
PORT=5000
```

4. Start the development servers

```bash
# Start backend (from backend directory)
npm run dev

# Start frontend (from frontend directory)
npm start
```

## Contributing

-

## License

This project is licensed under the MIT License - see the LICENSE file for details
