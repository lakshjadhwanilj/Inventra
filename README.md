# Inventra - Cloud-Native Inventory Management Dashboard

## Introduction
Inventra is a cloud-native inventory management dashboard application designed to help businesses manage their inventory efficiently. It provides a comprehensive view of products, sales, purchases, and expenses through an intuitive and user-friendly interface.

## Table of Contents
- [Technologies Used](#technologies-used)
- [Prerequisites](#prerequisites)
- [Project Structure](#project-structure)
- [Setup Instructions](#setup-instructions)
  - [1. Clone the Repository](#1-clone-the-repository)
  - [2. Install Dependencies](#2-install-dependencies)
  - [3. Configure Environment Variables](#3-configure-environment-variables)
  - [4. Set Up the Database](#4-set-up-the-database)
  - [5. Seed the Database](#5-seed-the-database)
  - [6. Start the Development Servers](#6-start-the-development-servers)
  - [7. Access the Application](#7-access-the-application)
- [Conclusion](#conclusion)
- [Additional Notes](#additional-notes)


## Technologies Used

- **Frontend**: 
  - [Next.js](https://nextjs.org)
  - [React](https://reactjs.org)
  - [Redux Toolkit](https://redux-toolkit.js.org)
  - [Tailwind CSS](https://tailwindcss.com)
  - [Recharts](https://recharts.org)
  - [Lucide Icons](https://lucide.dev)

- **Backend**:
  - [Node.js](https://nodejs.org)
  - [Express](https://expressjs.com)
  - [PostgreSQL](https://www.postgresql.org)
  - [Prisma](https://www.prisma.io)

- **Cloud and AWS**:
  - [AWS EC2](https://aws.amazon.com/ec2)
  - [AWS S3](https://aws.amazon.com/s3)
  - [AWS RDS](https://aws.amazon.com/rds)
  - [AWS Amplify](https://aws.amazon.com/amplify)
  - [AWS API Gateway](https://aws.amazon.com/api-gateway)

- **Other Tools**:
  - [TypeScript](https://www.typescriptlang.org)
  - [ESLint](https://eslint.org)
  - [Prettier](https://prettier.io)
  - [dotenv](https://github.com/motdotla/dotenv)
  - [PM2](https://pm2.keymetrics.io)

## Prerequisites
Before setting up the project, ensure you have the following installed:
- [Node.js](https://nodejs.org) (v14 or later)
- [npm](https://www.npmjs.com) (v6 or later)
- [PostgreSQL](https://www.postgresql.org) (v12 or later)

## Project Structure
The project is organizaed as follows:

```
inventra/ 
├── client/ 
│ ├── public/ 
│ ├── src/ 
│ | ├── app/ 
│ | ├── components/ 
| │ └── state/ 
│ ├── .env.local
│ ├── next.config.ts 
│ ├── package.json 
│ ├── postcss.config.mjs 
│ ├── tailwind.config.ts 
│ └── tsconfig.json 
├── server/ 
│ ├── assets/ 
│ ├── prisma/ 
│ ├── src/ 
│ ├── .env 
│ ├── ecosystem.config.js 
│ ├── package.json 
│ └── tsconfig.json 
└── README.md
```

- **inventra/**: Root directort of the project
- **client/**: Contains the frontend (Next.js) code for the app.
- **src/**: Contains the source code for the client
- **app/**: Contains the main application logic and pages.
- **components/**: Contains reusable React components.
- **state/**: Contains Redux state management files.
- **.env.local**: Environment variables for the client.
- **next.config.ts**: Confirguration file for Next.js.
- **package.json**: Contains metadata about the client project & its dependencies.
- **tailwind.config.ts**: Configuration file for Tailwind CSS.
- **server/**: Contains the backend code for the application.
- **assets/**: Contains static assets for the server.
- **prisma/**: Contains Prisma schema and migration files.
- **src/**: Contains the source code for the server.
- **.env**: Environment variables for the server.
- **ecosystem.config.js**: Configuration file for PM2.
- **package.json**: Contains metadata about the server project and its dependencies.
- **README.md**: Documentation for the project.

## Setup Instructions

### 1. Clone the Repository
```bash
git clone https://github.com/lakshjadhwanilj/Inventra.git
cd inventra
```

### 2. Install Dependencies

- **Client**
```bash
cd client
npm install
```

- **Server**
```bash
cd ../server
npm install
```

### 3. Configure Environment Variables
Create a `.env` file in both the `client` and `server` directories based on the provided example files.

#### Client `.env.local`
Copy the contents of `.env.local.example` to `.env.local` and fill in the necessary values.
```bash
cp client/.env.local.example client/.env.local
```

#### Server `.env`
Copy the contents of `.env.example` to `.env` and fill in the necessary values.
```bash
cp server/.env.example server/.env
```

### 4. Set Up the Database
Ensure PostgreSQL is running and create a new database named `inventra`.

Run the Prisma migrations to set up the database schema:
```bash
cd server
npx prisma migrate dev --name init
```

### 5. Seed the Database
Seed the database with initial data:
```bash
npm run seed
```

### 6. Start the Development Servers
#### Client
```bash
cd client
npm run dev
```

#### Server
```bash
cd server
npm run dev
```

### 7. Access the Application
Open your browser and navigate to http://localhost:3000 to access the Inventra dashboard.

## Conclusion
Inventra is a powerful and flexible inventory management dashboard that leverages modern web technologies to provide a seamless user experience. By following the setup instructions, you can quickly get started with managing your inventory in a cloud-native environment.

## Additional Notes
- Ensure that you have the necessary permissions and access to the required services and databases before setting up the project.
- Regularly update your dependencies to keep the project secure and up-to-date.
- If you encounter any issues or have any questions, feel free to open an issue on the project's GitHub repository.
- If you wish to host the application on AWS, you need to have an AWS account and the necessary permissions to create and manage AWS resources.