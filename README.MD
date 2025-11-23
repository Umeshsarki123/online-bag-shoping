
New Project

---> create .env >> MONGO_URI="add your data base string here"

A simple Node.js server using Express, MongoDB, and essential backend packages.

Packages Used

express – Server creation

mongoose – MongoDB connection

dotenv – Environment variables

cookie-parser – Cookie handling

jsonwebtoken – Authentication tokens

bcrypt – Password hashing

multer – File uploads

Workflow

Server starts with Express.

Environment variables load using dotenv.

MongoDB connects through a separate mongoose config file.

Middlewares parse JSON, URL data, cookies, and serve static files.

Routes are organized separately:

/users

/owners

/products

Server runs on port 3000.