# NNMKC Website Backend

Backend API for the North Nazareth Meserete Kristos Church (NNMKC) website, built with **NestJS**, **PostgreSQL**, and **Prisma**.

## 🛠️ Tech Stack

*   **Framework:** NestJS (Node.js)
*   **Database:** PostgreSQL
*   **ORM:** Prisma
*   **Authentication:** JWT (Passport)
*   **Payments:** Chapa Integration (Planned)
*   **Documentation:** Swagger / OpenAPI
*   **Containerization:** Docker & Docker Compose

## Project Structure

```bash
NNMKC/backend/
├── src/
│   ├── app.module.ts       # Main application module
│   ├── main.ts             # Entry point
│   ├── auth/               # Authentication (JWT, Guards)
│   ├── users/              # Admin user management
│   ├── prisma/             # Database connection service
│   ├── pages/              # Static pages (About Us, etc.)
│   ├── sermons/            # Sermons & Videos
│   ├── staff/              # Leadership team profiles
│   ├── ministries/         # Church ministries (Youth, etc.)
│   ├── articles/           # Blog & News
│   ├── events/             # Calendar & Events
│   ├── announcements/      # Urgent alerts
│   ├── dashboard/          # Stats & Recent Activity
│   ├── payments/           # Chapa Integration (Gateway Logic)
│   ├── donations/          # Donation Records & Business Logic
│   ├── media/              # Media library & Uploads
│   └── common/             # Shared guards, decorators, etc.
├── prisma/
│   ├── schema.prisma       # Database schema definition
│   ├── seed.ts             # Initial data seeder (Admin user)
│   └── migrations/         # SQL migration history
├── docker-compose.yml      # Docker configuration for PostgreSQL
├── .env                    # Environment variables (Git-ignored)
└── package.json            # Dependencies
```

## Setup Instructions

### 1. Prerequisites

*   **Node.js** (v18+)
*   **Docker Desktop** (for the database)
*   **Git**

### 2. Environment Configuration

1.  Create a `.env` file in the `backend` folder.
2.  Follow the example in `.env.example` to fill in your secrets (ask the team lead for keys).

### 3. Database Setup (Docker)

We use Docker to run PostgreSQL easily without installing it on your machine.

1.  Open **Docker Desktop** and ensure it's running.
2.  In the terminal, navigate to `NNMKC/backend`:
    ```bash
    cd NNMKC/backend
    ```
3.  Start the database container:
    ```bash
    docker-compose up -d
    ```
    *   *Note:* If you get port conflicts, ensure nothing is running on port 5433, or change `DB_PORT` in `.env` and `docker-compose.yml`.

### 4. Database Schema & Migration

Apply the schema to the database:

```bash
# Install dependencies
npm install

# Run migrations
npx prisma migrate dev
```

### 5. Seeding Initial Data

Create the first Super Admin user:

```bash
npx prisma db seed
```

### 6. Running the API

```bash
# Development mode (auto-reload)
npm run start:dev
```

The API will be available at: `http://localhost:3000`

## 📚 API Documentation

Once the server is running, visit the Swagger UI documentation:

👉 `http://localhost:3000/api`

## 🧪 Testing

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## 📦 Database Management

You can view and manage the database content using **Prisma Studio**:

```bash
$ npx prisma studio
```

Access it at `http://localhost:5555`.

## 🔐 Security Notes

*   **Authentication:** Admin access is protected via JWT.
*   **Payments:** Webhooks are verified using Chapa signatures (Future).
*   **Environment:** Secrets are managed via `.env`.

## Troubleshooting

*   **Prisma Client Error:** If you see "PrismaClient... error", try running `npx prisma generate`.
*   **Database Connection Refused:** Check if Docker container is running (`docker ps`).
*   **Port 3000 in use:** Stop other Node processes or change `PORT` in `.env`.

## 📄 License

This project is licensed under **NNMKC Ministry Use License** (custom, to be defined). Not intended for commercial redistribution.
