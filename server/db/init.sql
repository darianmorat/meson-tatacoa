-- SETUP DATABASE
CREATE DATABASE tatacoa;

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- CREATE TABLES
CREATE TABLE categories (
   id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
   name VARCHAR(100) NOT NULL
);

CREATE TABLE menu_items (
   id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
   category_id UUID REFERENCES categories(id) ON DELETE CASCADE,
   name VARCHAR(100) NOT NULL,
   price DECIMAL(10, 2) NOT NULL,
   description TEXT,
   image_url VARCHAR(255),
   created_at TIMESTAMP DEFAULT NOW(),
   updated_at TIMESTAMP DEFAULT NOW()
);

-- INSERT DATA
INSERT INTO categories (name) VALUES 
('Principales'),
('Postres');

INSERT INTO menu_items (category_id, name, price, description, image_url) VALUES
((SELECT id FROM categories WHERE name = 'Principales'), 'Truffle Pasta', 24.99, 'Handmade pasta with black truffle sauce', 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=500&auto=format'),
((SELECT id FROM categories WHERE name = 'Principales'), 'Grilled Salmon', 22.50, 'Fresh Atlantic salmon with lemon butter', 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=500&auto=format'),
((SELECT id FROM categories WHERE name = 'Postres'), 'Chocolate Soufflé', 12.50, 'Warm chocolate dessert with vanilla ice cream', 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=500&auto=format'),
((SELECT id FROM categories WHERE name = 'Postres'), 'Mix Soufflé', 15.50, 'Warm dessert with mixed ice cream', 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=500&auto=format');
