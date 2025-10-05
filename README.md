UX/UI Designer’s Portfolio Website – Backend API

A full-featured backend API for a UX/UI designer's portfolio website. This backend includes user management (admin & customer), design showcase, pricing plans, reviews, and order management. Built with Node.js, Express.js, TypeScript, and MongoDB with proper authentication, validation, and error handling.

✨ Features

JWT Authentication (Admin & Customer)

Role-based Access Control

RESTful APIs with full CRUD support

MongoDB data modeling with Mongoose

Input validation with Zod / Joi

Global error handling

Reference-based database relationships

Secure .env configuration for sensitive credentials

Bonus: Search, Pagination, Soft Delete, Aggregation (Top Rated Designs)

🛠 Tech Stack

Backend: Node.js, Express.js, TypeScript

Database: MongoDB + Mongoose

Authentication: JWT + Bcrypt

Validation: Zod 

Environment Config: dotenv

📂 Project Structure
src/
├── config/            # DB and environment configuration
├── controllers/       # Route handlers
├── models/            # Mongoose models
├── routes/            # API route definitions
├── services/          # Business logic
├── middlewares/       # Auth, error handling, validation
├── utils/             # Helper functions
└── app.ts             # Express app setup

.env
package.json
tsconfig.json
README.md

🚀 API Endpoints
Auth
Method	Endpoint	Description
POST	/api/auth/register	Register user
POST	/api/auth/login	Login user
Users
Method	Endpoint	Description
GET	/api/users/profile	Get user profile
PUT	/api/users/update	Update profile
Designs
Method	Endpoint	Description
GET	/api/designs	Get all designs
GET	/api/designs/:id	Get design by ID
POST	/api/designs	Create design (Admin)
PUT	/api/designs/:id	Update design (Admin)
DELETE	/api/designs/:id	Delete design (Admin)
Categories
Method	Endpoint	Description
GET	/api/categories	List all categories
POST	/api/categories	Create category (Admin)
DELETE	/api/categories/:id	Delete category (Admin)
Pricing Plans
Method	Endpoint	Description
GET	/api/pricing	List pricing plans
POST	/api/pricing	Create pricing plan (Admin)
PUT	/api/pricing/:id	Update plan (Admin)
DELETE	/api/pricing/:id	Delete plan (Admin)
Reviews
Method	Endpoint	Description
POST	/api/reviews	Create review (Customer)
GET	/api/reviews/:designId	Get reviews for a design
DELETE	/api/reviews/:id	Delete review (Admin only)
Purchases
Method	Endpoint	Description
POST	/api/purchases	Purchase a design
GET	/api/purchases	Get all orders (Admin)
💾 Database Schemas

User: name, email, password, role (Admin | Customer)

Design: title, category, description, previewImage, designerName, toolsUsed, effectsUsed, price, process, complexityLevel, tags, status, likes, downloads

Category: name, slug

PricingPlan: name (Basic, Standard, Premium), price, features, duration

Review: reviewer, design, rating, comment, createdAt

Purchase: customer, design, selectedPlan, paymentStatus, purchaseDate

🛡 Validation & Error Handling

Input validation via Zod / Joi

Centralized error middleware

Proper HTTP status codes and messages

🔑 Authentication & Authorization

JWT-based authentication (Bearer token)

Admin and Customer roles

Protected routes with middleware (auth, authorizeRole)

🎁 Bonus Features

Pagination & Filtering (e.g., /api/designs?page=1&limit=10)

Full-text Search API (e.g., ?search=landing)

Soft Delete for designs (status: "Archived")

Aggregated "Top Rated Designs" API

⚡ Getting Started

Clone the repository:

git clone https://github.com/Tirtho-Ray/portfolio-backend
cd uxui-portfolio-backend


Install dependencies:

npm install


Create .env file:

NODE_ENV=development
PORT=8080
DB_URL=<your_mongodb_url>
BCRYPT_SALT_ROUNDS=6

JWT_ACCESS_SECRET=<access_secret>
JWT_ACCESS_EXPIRES_IN=100m
JWT_REFRESH_SECRET=<refresh_secret>
JWT_REFRESH_EXPIRES_IN=1y


Run in development mode:

npm run dev

🧪 Postman Collection

A Postman collection is included in:

postman/uxui-portfolio.postman_collection.json


Import it into Postman to test all endpoints.

📊 Database Schema Diagram

Add an exported schema diagram image using DBDiagram.io or Draw.io.

🤝 Contribution Guide

Fork the repository

Create a feature branch: git checkout -b feature/your-feature

Commit your changes: git commit -m 'Add some feature'

Push the branch: git push origin feature/your-feature

Create a pull request
