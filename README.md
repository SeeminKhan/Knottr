Knottr
Knottr is a modern social networking application built with Next.js and TypeScript. It enables users to connect, share, and interact with their peers through a seamless and engaging interface.

## Features

- **User Authentication**: Secure registration and login using Clerk.
- **User Profiles**: Create and customize your profile with personal information.
- **Search Functionality**: Easily find users and content with an intuitive search bar.
- **User Connections**: Connect with other users, view their profiles, and interact through messages.
- **Responsive Design**: Fully responsive layout for optimal viewing on all devices.

## Tech Stack

- **Frontend**: 
  - Next.js
  - TypeScript
  - Tailwind CSS
- **Backend**: 
  - Node.js
  - Express
- **Database**: MongoDB
- **Authentication**: Clerk for user management

## Installation

To set up the project locally, follow these steps:

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) and [MongoDB](https://www.mongodb.com/) installed.

### Clone the Repository

```bash
git clone https://github.com/SeeminKhan/Knottr.git
cd Knottr
npm install
```

###Environment Variables

Create a .env file in the root directory and add the following variables:
```bash
DATABASE_URL=mongodb://localhost:27017/knottr
NEXT_PUBLIC_CLERK_FRONTEND_API=<your-clerk-frontend-api>
CLERK_API_KEY=<your-clerk-api-key>
```
Replace <your-clerk-frontend-api> and <your-clerk-api-key> with your actual Clerk API keys.

###Run the Application

Start the development server:
```bash
npm run dev



