 UX/UI Designer’s Portfolio Website – Backend API

A full-featured backend API for a UX/UI designer's portfolio website. This project includes user management (admin and customer), design showcase, pricing plans, reviews, and order management, built using Node.js, Express.js, TypeScript, and MongoDB with proper authentication, validation, and error handling.

 Features

JWT Authentication (Admin & Customer)

Role-based Access Control

RESTful APIs with CRUD support

MongoDB data modeling with Mongoose

Input validation with Zod/Joi

Global error handling

Reference-based database relations

Secure .env config for sensitive credentials

Bonus features: Search, Pagination, Soft Delete, Aggregation (Top Rated)

 Tech Stack

Backend: Node.js, Express.js, TypeScript

Database: MongoDB + Mongoose

Authentication: JWT + Bcrypt

Validation: Zod / Joi

Environment Config: dotenv

 Project Structure
├── src
│   ├── config/            # DB and env config
│   ├── controllers/       # Route handlers
│   ├── models/            # Mongoose models
│   ├── routes/            # API route definitions
│   ├── services/          # Business logic
│   ├── middlewares/       # Auth, error handling, validation
│   ├── utils/             # Helper functions
│   └── app.ts             # Express app setup
├── .env
├── package.json
├── tsconfig.json
└── README.md

 API Endpoints
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
GET	/api/reviews/:designId	Get reviews for design
DELETE	/api/reviews/:id	Delete review (Admin only)
🛒 Purchases
Method	Endpoint	Description
POST	/api/purchases	Purchase a design
GET	/api/purchases	Get all orders (Admin)
   Models (Schemas)
1. User

name, email, password, role (Admin | Customer)

2. Design

title, category, description, previewImage, designerName, toolsUsed, effectsUsed, price, process, complexityLevel, tags, status, likes, downloads

3. Category

name, slug

4. PricingPlan

name (Basic, Standard, Premium), price, features, duration

5. Review

reviewer, design, rating, comment, createdAt

6. Purchase

customer, design, selectedPlan, paymentStatus, purchaseDate

   Validation & Error Handling

All input data is validated using Zod or Joi

Centralized error middleware handles all runtime and validation errors

Proper HTTP status codes and messages

   Authentication & Authorization

JWT-based Auth (Bearer token)

Admin and Customer roles with protected routes

Middleware: auth, authorizeRole

   Bonus Features

   Pagination & Filtering (e.g., GET /api/designs?page=1&limit=10)

   Full-text Search API (?search=landing)

   Soft Delete for designs (status: "Archived")

   Aggregated "Top Rated Designs" API

   Getting Started
1. Clone the repo
git clone https://github.com/Tirtho-Ray/portfolio-backend
cd uxui-portfolio-backend

2. Install dependencies
npm install

3. Setup .env file
 Environment
NODE_ENV=development

# Port
PORT=8080
# Database URL
DB_URL=
# Bcrypt Salt Rounds
BCRYPT_SALT_ROUNDS=6
# JWT Secrets and Expiry
JWT_ACCESS_SECRET=<access_secret>
JWT_ACCESS_EXPIRES_IN=100m
JWT_REFRESH_SECRET=<refresh_secret>
JWT_REFRESH_EXPIRES_IN=1y

4. Run in Dev Mode
npm run dev

🧪 Postman Collection

A full Postman collection is included in the repo as:

📁 postman/uxui-portfolio.postman_collection.json


Import into Postman to test all endpoints.

🗂 Database Schema Diagram

Add an exported schema diagram image from a tool like DBDiagram.io
 or [Draw.io].

📝 Contribution Guide

Fork the repository

Create your feature branch: git checkout -b feature/your-feature

Commit your changes: git commit -m 'Add some feature'

Push to the branch: git push origin feature/your-feature

Create a pull request

📄 License

MIT License – feel free to use and modify.

Let me know if you want this exported to a .md file or need a GitHub repository template as well.
