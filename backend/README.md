<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

# NNMKC Website Backend

Backend API for the North Nazareth Meserete Kristos Church (NNMKC) website, built with **NestJS**, **PostgreSQL**, and **Prisma**.

## 🛠️ Tech Stack

- **Framework:** [NestJS](https://nestjs.com/) (Node.js)
- **Database:** [PostgreSQL](https://www.postgresql.org/)
- **ORM:** [Prisma](https://www.prisma.io/)
- **Authentication:** JWT (Passport)
- **Payments:** Chapa Integration
- **Documentation:** Swagger / OpenAPI
- **Containerization:** Docker & Docker Compose

---

## 📂 Project Structure

```
src/
├── auth/           # Authentication & Authorization (Admin login)
├── users/          # Admin user management
├── pages/          # CMS for managing dynamic pages
├── articles/       # Blog/Articles management
├── announcements/  # Church announcements
├── donations/      # Donation records & business logic
├── payments/       # Chapa payment gateway integration
├── prisma/         # Database connection service
└── common/         # Shared guards, filters, decorators
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v18+)
- Docker & Docker Compose
- PostgreSQL (if not using Docker)

### 1. Installation

```bash
$ npm install
```

### 2. Environment Setup

Copy the example environment file and update it with your credentials:

```bash
$ cp .env.example .env
```

**Note:** Never commit `.env` to version control.

### 3. Database Setup (Docker)

Start the PostgreSQL database using Docker:

```bash
$ docker-compose up -d
```

Apply database migrations:

```bash
$ npx prisma migrate dev
```

### 4. Running the App

```bash
# development (watch mode)
$ npm run start:dev

# production mode
$ npm run start:prod
```

The API will be available at `http://localhost:3000`.

---

## 📚 API Documentation

Once the server is running, visit the Swagger UI documentation:

👉 **[http://localhost:3000/api/docs](http://localhost:3000/api/docs)**

---

## 🧪 Testing

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

---

## 📦 Database Management

You can view and manage the database content using **Prisma Studio**:

```bash
$ npx prisma studio
```
Access it at `http://localhost:5555`.

---

## 🔐 Security Notes

- **Authentication:** Admin access is protected via JWT.
- **Payments:** Webhooks are verified using Chapa signatures.
- **Environment:** Secrets are managed via `.env`.

## 📄 License

This project is [UNLICENSED](LICENSE).
