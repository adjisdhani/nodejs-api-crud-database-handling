# Node.js API CRUD with Express, MySQL, Sequelize, and Prisma

## Author: Adjis Ramadhani Utomo

## Project Setup Guide

This guide provides step-by-step instructions to set up and test a RESTful API using Express, MySQL, Sequelize, and Prisma.

### 1. Clone the Repository
```sh
git clone https://github.com/adjisdhani/nodejs-api-crud-database-handling.git
```

### 2. Navigate into the Project Directory
```sh
cd nodejs-api-crud-database-handling
```

### 3. Install Dependencies
```sh
npm install express mysql2 sequelize prisma @prisma/client dotenv nodemon --save-dev
```

### 4. Run the Server
```sh
npm run dev
```

### 5. Setup Database Tables and Insert Initial Data
Execute the following SQL commands in your MySQL database:

```sql
CREATE TABLE buku (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  author VARCHAR(255) NOT NULL,
  published_year INT NOT NULL
) ENGINE=INNODB DEFAULT CHARSET=utf8;

INSERT INTO buku (title, author, published_year) VALUES
('Clean Code', 'Robert C. Martin', 2008),
('The Pragmatic Programmer', 'Andrew Hunt', 1999),
('You Don’t Know JS', 'Kyle Simpson', 2015);

CREATE TABLE siswa (
  id INT NOT NULL AUTO_INCREMENT,
  nama VARCHAR(255) NOT NULL,
  kelas VARCHAR(255) NOT NULL,
  umur INT NOT NULL,
  createdAt DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updatedAt DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (id)
);

INSERT INTO siswa (nama, kelas, umur, createdAt, updatedAt) VALUES
('Budi Santoso', '12 IPA', 17, NOW(), NOW()),
('Ani Rahmawati', '11 IPS', 16, NOW(), NOW()),
('Joko Widodo', '10 IPA', 15, NOW(), NOW());
```

## API Testing using Postman

To test the API, use Postman and set the `X-USER-ID` header to a valid admin user ID from the database.

### CRUD Operations for `buku`
#### 1. Get All Books
**Request:**
```
GET /api/buku
Headers:
  X-USER-ID: 1
```
**Response:**
```json
[
  { "id": 1, "title": "Clean Code", "author": "Robert C. Martin", "published_year": 2008 },
  { "id": 2, "title": "The Pragmatic Programmer", "author": "Andrew Hunt", "published_year": 1999 }
]
```

#### 2. Get Book by ID
**Request:**
```
GET /api/buku/1
Headers:
  X-USER-ID: 1
```

#### 3. Create a New Book
**Request:**
```
POST /api/buku
Headers:
  X-USER-ID: 1
Body (JSON):
{
  "title": "New Book",
  "author": "John Doe",
  "published_year": 2024
}
```

#### 4. Update a Book
**Request:**
```
PUT /api/buku/1
Headers:
  X-USER-ID: 1
Body (JSON):
{
  "title": "Updated Title"
}
```

#### 5. Delete a Book
**Request:**
```
DELETE /api/buku/1
Headers:
  X-USER-ID: 1
```

### CRUD Operations for `siswa`
#### 1. Get All Students
**Request:**
```
GET /api/siswa
Headers:
  X-USER-ID: 1
```

#### 2. Get Student by ID
**Request:**
```
GET /api/siswa/1
Headers:
  X-USER-ID: 1
```

#### 3. Create a New Student
**Request:**
```
POST /api/siswa
Headers:
  X-USER-ID: 1
Body (JSON):
{
  "nama": "New Student",
  "kelas": "10 IPA",
  "umur": 16
}
```

#### 4. Update a Student
**Request:**
```
PUT /api/siswa/1
Headers:
  X-USER-ID: 1
Body (JSON):
{
  "nama": "Updated Name"
}
```

#### 5. Delete a Student
**Request:**
```
DELETE /api/siswa/1
Headers:
  X-USER-ID: 1
```

## Conclusion
This API provides CRUD operations for books (`buku`) and students (`siswa`). Ensure that every request includes the `X-USER-ID` header to authorize the actions. You can extend this API further as needed.

---
**Happy coding! 🚀**

