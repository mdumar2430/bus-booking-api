# Bus Booking API

REST API for managing bus seats, bookings, authentication, and admin seat resets.

## Features

- JWT login with seeded admin and user accounts
- View seats and seat status
- Book and release seats
- View booking owner details for a seat
- Admin reset for all seats and bookings

## Tech Stack

- Node.js
- Express
- TypeScript
- Sequelize
- PostgreSQL
- JWT

## Setup

1. Copy `env.example` to `.env` and fill in your database values.
2. Install dependencies.
3. Start the database.
4. Run the app.

```bash
npm install
npm run dev
```

## Environment Variables

Required values:

- `PORT`
- `DB_HOST`
- `DB_PORT`
- `DB_NAME`
- `DB_USER`
- `DB_PASSWORD`
- `JWT_SECRET`

Optional values:

- `ADMIN_PASSWORD`
- `USER_PASSWORD`

## Authentication

Use `POST /api/v1/auth/login` to obtain a JWT.

Default seeded accounts:

- `admin@test.com` / `password123`
- `user@test.com` / `password`

## Main Endpoints

- `GET /health`
- `GET /api/v1/seats`
- `GET /api/v1/seats/:seatNumber`
- `GET /api/v1/seats/status/:status`
- `POST /api/v1/seats/seat/:seatNumber/book`
- `POST /api/v1/seats/seat/:seatNumber/release`
- `GET /api/v1/seats/seat/:seatNumber/owner`
- `POST /api/v1/admin/seats/reset`

## Docs

- Import `postman_collection.json` for a ready-to-use collection with bearer token handling.

## Notes

- Booking requests require `passengerName` and `passengerEmail`.
- Protected endpoints use JWT bearer auth.
- Seat reset require an admin token.