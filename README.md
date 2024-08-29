# Blog Project

## Description

This project is a Blog site where users can explore posts from various users and add new posts. The application provides a user-friendly interface to interact with a list of posts and users, and to create new posts that will be visible on the home page.

## Features

- **Home Page**: View all posts.
- **Post Page**: Click on a post title to view details.
- **Users Page**: View a list of users who have posts.
- **User Page**: Click on a user to view their posts.
- **Add New Post Form Page**: Use the form to add a new post.

## Technologies Used

- **React**: For building the user interface.
- **React Router**: For handling routing within the application.
- **RTK Redux**: For state management and making API requests.

## Backend API

This project uses the [JSONPlaceholder API](https://jsonplaceholder.typicode.com/) as a mock backend. JSONPlaceholder is a free online REST API that you can use for testing and prototyping. It provides endpoints for common resources such as posts, comments, users, and more. 

### Key Endpoints Used

- **Posts**: `/posts` – Fetches a list of posts or a single post by ID.
- **Users**: `/users` – Retrieves a list of users or a specific user by ID.

For detailed information about the available endpoints and their usage, refer to the [JSONPlaceholder Documentation](https://jsonplaceholder.typicode.com/).

## Setup and Installation

To get started with this project, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Manahil-04/Blog-App.git
   cd blog-project

2. **Install dependencies**:
    ```bash
    npm install

3. **Start the development server**:
    ```bash
    npm start dev
  Open your browser and go to http://localhost:5173 to view the application.
