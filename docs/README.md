# Documentation

## Tech Stack

- **Frontend**: React.js
- **Backend**: Express.js
- **Database**: PostgreSQL

## System Overview

- High-Level Architecture: [View Diagram](/docs/diagrams/system-architecture.png)

## API Reference

- Postman collection: [View Collection](https://www.postman.com/meson-tatacoa/meson-tatacoa/overview)
 <!-- - Interactive Docs (Swagger UI): [View here](#) -->

## Getting Started

Follow these steps to run the project locally

```shell
# Clone repository:
git clone https://github.com/darianmorat/meson-tatacoa.git
cd meson-tatacoa

# Database setup:
createdb meson_db
psql -U your_username -d your_database_name -a -f server/db/init.sql

# Install dependencies:
npm install && cd client && npm install

# Configure env variables:
cp .env.example .env # Both in root and client

# Run server:
npm run dev && cd client && npm run dev
```
