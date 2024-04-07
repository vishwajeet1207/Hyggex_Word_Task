# User Management API

This Node.js application provides an API for managing user data in a MongoDB database.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/user-management-api.git
POST /api/v1/users: Create a new user.
GET /api/v1/users/random: Get data of a single random user.
GET /api/v1/users/check-existence?name=John: Check if a user with a given name exists.
GET /api/v1/users/above-age?age=30: Get users above a certain age.
GET /api/v1/users/names: Get an array of names of all users.
