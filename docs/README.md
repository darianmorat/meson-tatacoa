## Documentation

### Tech Stack

- **Frontend**: React.js
- **Backend**: Express.js
- **Database**: PostgreSQL

### System Diagrams

System Diagrams: [View here](/docs/Diagrams/)

- **High-Level Architecture** (component communication)
- **Database Schema** (tables & relationships)
- **API Flow** (frontend-backend interactions)

## API Reference

- Postman collection: [View here](https://)
- Interactive Docs (locally): [View here](https://) <!-- Swagger UI (use this later) -->

## Getting Started

Follow these steps to run the project locally

1. Clone the repository:

```shell
git clone https://github.com/darianmorat/meson-tatacoa.git
cd meson-tatacoa
```

2. Install dependencies:

```shell
npm install
cd client && npm install
```

3. Set Up the PostgreSQL Database:

```shell
# Example (use your own DB name if you want)
createdb meson_db
psql -U your_username -d your_database_name -a -f server/db/init.sql
```

4. Configure environment variables:

```shell
# Backend
cp .env.example .env

# Frontend
cd client
cp .env.example .env
```

Run the project:

```
npm run dev
cd client && npm run dev
```
