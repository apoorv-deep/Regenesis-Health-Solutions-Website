# RegenesisConnect

A full-stack web application built with React, TypeScript, and Node.js, using modern tools and best practices.

## 🚀 Features

- Modern React application with TypeScript
- Server-side rendering with Vite
- Elegant UI components using Radix UI
- PostgreSQL database with Drizzle ORM
- Type-safe database operations
- RESTful API endpoints
- Form handling with React Hook Form
- Responsive design with Tailwind CSS

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v18 or higher)
- npm (v9 or higher)
- PostgreSQL (v16 or higher)

## 🛠️ Installation

1. Clone the repository:
   ```bash
   git clone [your-repository-url]
   cd RegenesisConnect
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory with the following content:
   ```env
   DATABASE_URL=postgres://postgres:postgres@localhost:5432/regenesis
   ```

4. Set up the database:
   ```bash
   # Create the database
   sudo -u postgres psql -c "CREATE DATABASE regenesis;"
   sudo -u postgres psql -c "ALTER USER postgres WITH PASSWORD 'postgres';"

   # Push the schema
   npm run db:push
   ```

## 🚀 Development

To start the development server:

```bash
npm run dev
```

This will start both the frontend and backend servers. The application will be available at http://localhost:5000.

## 🏗️ Building for Production

To create a production build:

```bash
npm run build
```

To start the production server:

```bash
npm start
```

## 📁 Project Structure

```
RegenesisConnect/
├── client/               # Frontend React application
│   ├── src/
│   │   ├── components/  # React components
│   │   ├── hooks/      # Custom React hooks
│   │   ├── lib/        # Utility functions
│   │   └── pages/      # Page components
│   └── index.html
├── server/              # Backend Node.js server
│   ├── index.ts        # Server entry point
│   ├── routes.ts       # API routes
│   └── vite.ts         # Vite SSR configuration
├── shared/             # Shared code between frontend and backend
│   └── schema.ts      # Database schema
└── package.json
```

## 🛠️ Built With

- [React](https://reactjs.org/) - Frontend library
- [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript
- [Vite](https://vitejs.dev/) - Frontend build tool
- [Express](https://expressjs.com/) - Backend framework
- [PostgreSQL](https://www.postgresql.org/) - Database
- [Drizzle ORM](https://orm.drizzle.team/) - Database ORM
- [Radix UI](https://www.radix-ui.com/) - UI component library
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework

## 📜 License

This project is licensed under the MIT License - see the LICENSE file for details.
