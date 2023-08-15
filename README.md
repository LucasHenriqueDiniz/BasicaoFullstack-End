# BasicaoFullstack-main
 
## About 

Welcome to the repository for the **Fullstack Basic Workshop** hosted by [Engenharia do Futuro](https://www.linkedin.com/company/engenharia-do-futuro/). This repository serves as the starting point for the workshop project. The backend portion of the project has been developed by [Lucas Silva Ennes](https://github.com/Schukuratsu), and the frontend has been created by [Lucas Henrique Diniz Ostroski](https://github.com/LucasHenriqueDiniz).

### Workshop Details

- Workshop Hosted by: [Engenharia do Futuro](https://www.linkedin.com/company/engenharia-do-futuro/)
- Backend Developer: [Lucas Silva Ennes](https://github.com/Schukuratsu)
- Frontend Developer: [Lucas Henrique Diniz Ostroski](https://github.com/LucasHenriqueDiniz)
- Project Start Repository: [Link to Project Start Repository](#future-link-to-start-repository)
- Final Version Repository: [Link to Final Version Repository](#future-link-to-final-repository)

### Getting Started

To begin working with this project's frontend, ensure you have Node.js installed and follow these steps:

1. Install project dependencies:
   ```bash
   npm install
   npm run dev
    ```

For the backend, follow these instructions:

Install Poetry if not already installed:

   ```bash
    pip install poetry
    Navigate to the server folder and install dependencies:
    ```

    ```bash
    poetry install
    Copy .env.example and rename it as .env.
    ```

Update the database (sqlite is used):

    ```bash
    poetry run task db-upgrade
    Start the server:
    ```

    ```bash
    poetry run task dev
    ```