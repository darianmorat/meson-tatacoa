# Documentation

## Tech Stack

- **Frontend**: React.js, JavaScript, CSS Modules
- **Backend**: Express.js, Node.js, MySQL

## Getting Started

Follow these steps to run the project locally

```shell
# Clone repository:
git clone https://github.com/darianmorat/meson-tatacoa.git
cd meson-tatacoa

# Database setup:
mysql -u root -p

CREATE DATABASE meson_db;
EXIT;

mysql -u your_username -p meson_db < server/db/init.sql

# Install dependencies:
npm install && cd client && npm install

# Configure env variables:
cp .env.example .env # Both in root and client

# Run server:
npm run dev && cd client && npm run dev
```
