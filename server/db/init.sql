-- ==============
-- SETUP DATABASE
-- ==============
CREATE DATABASE tatacoa;
USE tatacoa;

-- =============
-- CREATE TABLES
-- =============

-- Slider section
CREATE TABLE slider_imgs (
   id CHAR(36) PRIMARY KEY DEFAULT (UUID()),
   image_url VARCHAR(255),
   created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
   updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Create this later for the drop image
-- CREATE TABLE slider_imgs (
--    id CHAR(36) PRIMARY KEY DEFAULT (UUID()),
--    image_data LONGTEXT NOT NULL,
--    image_name VARCHAR(255) NOT NULL,
--    image_type VARCHAR(50) NOT NULL,
--    image_size INT,
--    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
--    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
-- );

-- Restaurant section
CREATE TABLE categories (
   id CHAR(36) PRIMARY KEY DEFAULT (UUID()),
   name VARCHAR(100) NOT NULL
);

CREATE TABLE menu_items (
   id CHAR(36) PRIMARY KEY DEFAULT (UUID()),
   category_id CHAR(36),
   name VARCHAR(100) NOT NULL,
   price INT NOT NULL,
   description TEXT,
   image_url VARCHAR(255),
   created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
   updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
   FOREIGN KEY (category_id) REFERENCES categories(id) ON DELETE CASCADE
);

-- =============
-- INSERT DATA
-- =============

-- Slider section
INSERT INTO slider_imgs (image_url) VALUES 
('https://miro.medium.com/v2/resize:fit:1400/0*xvdYqYBu6w-BXz0j'),
('https://miro.medium.com/v2/resize:fit:1400/0*xvdYqYBu6w-BXz0j'),
('https://miro.medium.com/v2/resize:fit:1400/0*xvdYqYBu6w-BXz0j'),
('https://miro.medium.com/v2/resize:fit:1400/0*xvdYqYBu6w-BXz0j'),
('https://miro.medium.com/v2/resize:fit:1400/0*xvdYqYBu6w-BXz0j'), 
('https://miro.medium.com/v2/resize:fit:1400/0*xvdYqYBu6w-BXz0j');

-- Restaurant section
INSERT INTO categories (name) VALUES 
('Principales'),
('Postres');

INSERT INTO menu_items (category_id, name, price, description, image_url) VALUES
((SELECT id FROM categories WHERE name = 'Principales'), 'Truffle Pasta', 24000, 'Handmade pasta with black truffle sauce', 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=500&auto=format'),
((SELECT id FROM categories WHERE name = 'Principales'), 'Grilled Salmon', 18000, 'Fresh Atlantic salmon with lemon butter', 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=500&auto=format'),
((SELECT id FROM categories WHERE name = 'Postres'), 'Chocolate Soufflé', 12000, 'Warm chocolate dessert with vanilla ice cream', 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=500&auto=format'),
((SELECT id FROM categories WHERE name = 'Postres'), 'Mix Soufflé', 15000, 'Warm dessert with mixed ice cream', 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=500&auto=format');
