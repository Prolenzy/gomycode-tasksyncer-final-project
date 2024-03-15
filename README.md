# TaskSyncer

TaskSyncer is a MERN (MongoDB, Express.js, React.js, Node.js) task management application designed to help users efficiently organize and track their tasks. With TaskSyncer, users can create, update, and delete tasks, set deadlines, and monitor their progress, all within an intuitive and seamless user interface.

## Features

- **Task Management**: Create, update, and delete tasks effortlessly.
- **Deadline Tracking**: Set deadlines for tasks to stay organized and on schedule.
- **Progress Monitoring**: Track the progress of tasks to ensure timely completion.
- **User Authentication**: Sign up and log in to access personalized task lists securely.

## Installation

To run TaskSyncer locally, follow these steps:

1. Clone this repository:

    ```bash
    git clone https://github.com/Prolenzy/gomycode-tasksyncer-final-project 
    ```

2. Navigate to the project directory:

    ```bash
    cd TaskSyncer
    ```

3. Install dependencies for both the server and client:

    ```bash
    cd server && npm install
    cd ../client && npm install
    ```

4. Set up environment variables:
   
   - Create a `.env` file in the `server` directory.
   - Add the necessary environment variables, including MongoDB connection URI, JWT secret, etc.

5. Run the server:

    ```bash
    cd ../server && npm start
    ```

6. Run the client:

    ```bash
    cd ../client && npm start
    ```

7. Access TaskSyncer in your browser at `http://localhost:3000`.

## Technologies Used

### Frontend

- **React**: JavaScript library for building user interfaces.
- **TypeScript**: Typed superset of JavaScript that compiles to plain JavaScript.
- **Tailwind CSS**: Utility-first CSS framework for quickly building custom designs.

### Backend

- **Node.js**: JavaScript runtime built on Chrome's V8 JavaScript engine.
- **Express.js**: Web application framework for Node.js.

### Database

- **MongoDB**: NoSQL database for storing task data.

### Authentication

- **JWT**: JSON Web Tokens for user authentication.

## Contributing

Contributions are welcome! If you'd like to contribute to TaskSyncer, please follow these guidelines:

1. Fork the repository and create your branch from `main`.
2. Make your changes and ensure the code follows the existing code style.
3. Test your changes thoroughly.
4. Create a pull request describing your changes.

## License

This project is licensed under the [MIT License](LICENSE).

## Contact

If you have any questions or suggestions regarding TaskSyncer, feel free to contact us at [ck563841@gmail.com](mailto:ck563841@gmail.com).

---
 
