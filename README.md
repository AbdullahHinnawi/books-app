<h1 align="center">Welcome to Books App 👋</h1>

> You can use Books App to create a new book which has a title, author and description. When a book
> is added, it will appear in the book list from which, you can update or delete added books.

### ✨ [Running version on Heroku](https://books-app-heroku.herokuapp.com/)
> *Notice: Heroku puts the app to sleep after 30 minutes of inactivity. This means 
that the app will take some time (about 5-10 seconds or more) to wake up again.

## Frontend technologies:

- React
- Redux
- Material UI

## Backend technologies:

- Node.js
- Express.js
- Jest

## Database:

- MongoDB Atlas

## How to use locally:

Clone books-app to any IDE, for example VS Code.

### To run the client side (frontend):

Navigate to the "frontend" directory:

```sh
cd frontend
```

Install frontend dependencies:

```sh
npm install
```

Then run the app using:

```sh
npm start
```

### To run the server side (backend):

Navigate to the "backend" directory, if your current directory is "books-app" use:

```sh
cd backend
```

If your current directory is "frontend" use:

```sh
cd ../backend
```

Install backend dependencies:

```sh
npm install
```

After that, in the backend root directory you need to create a file called ".env" in which you
can save database credentials and other server configurations. File content could be as
the following (replace username, password, cluster-name, and database-name with your own):

```sh
MONGODB_URI=mongodb+srv://<username>:<password>@<cluster-name>.6avck.mongodb.net/<database-name>?retryWrites=true&w=majority

IP=localhost
PORT=3001
SECRET=<YOUR_SECRET>

TEST_MONGODB_URI=mongodb+srv://<username>:<password>@<cluster-name>.6avck.mongodb.net/<database-name>?retryWrites=true&w=majority
```

Then run the server using:

```sh
npm run dev
```

You can also run backend integration tests using:

```sh
npm run test
```

### To run both backend & frontend with a single command:

Both frontend and backend has a script called "fullstack" to run the whole
application (server side & client side) using single command. </br>
After installing the application dependencies you can navigate
to "frontend" or "backend" directory and use:

```sh
npm run fullstack
```

## Bonus

- Remote database (separate database for testing)
- Backend integration tests
- Backend HTTP requests exports as JSON file
- Error handling
- Three tier of validation (client, server, database)
- Notifications
- Deployment on Heroku
- README.md file (guidance to run the application locally)
- JS documentation

## Author:

👤 **Abdullah Hinnawi**

- [Portfolio](https://abdullahhinnawi.com/)
