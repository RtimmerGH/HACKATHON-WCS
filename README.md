HACKATHON2 - Wild Code School

This repo contains the project my team and I developped during the Wild Code School Hackathon2 in January 2023.

Other members of the team were:
-Marie-Hermine Schneider (https://github.com/aimach)
-Joris Grilleres (https://github.com/jorisgrls)
-Rémy Bernardin (https://github.com/Remy-B-prog)
-Jonathan Bonhoure (https://github.com/SkullZRulZ)

The partner of the Hackathon was Amazon Web Services (AWS)

The topic was:
You will have to develop a fleet management application with three levels of users (the user who can rent/book a vehicle, the community/company that offers vehicles for rent/reservation and the application administrator).

The user who makes a reservation request must have access to the vehicle information (mileage, technical data, availability dates...).

The community/company manages the update of its fleet with the possibility of adding new vehicles or removing some. It must also manage the maintenance part and therefore be able to make a vehicle temporarily unavailable.



===============================================================
## Concept

This template is meant to serve as a foundation for every P2/P3 following the React-Express-MySQL stack, as learned in Wild Code School.
It's pre-configured with a set of tools which'll help students produce industry-quality and easier-to-maintain code, while staying as simple as possible to use.

## Setup & Use

### Project Initialization

- In VSCode, install plugins **Prettier - Code formatter** and **ESLint** and configure them
- Clone this repo, enter it
- Run command `npm run setup`
- _NB: To launch the backend server, you'll need an environment file with database credentials. You'll find a template one in `backend/.env.sample`_

### Available Commands

- `setup` : Initialization of frontend and backend, as well as all toolings
- `migrate` : Run the database migration script
- `dev` : Starts both servers (frontend + backend) in one terminal
- `dev-front` : Starts the React frontend server
- `dev-back` : Starts the Express backend server
- `lint` : Runs validation tools, and refuses unclean code (will be executed on every _commit_)
- `fix` : Fixes linter errors (run it if `lint` growls on your code !)

## FAQ

### Tools

- _Concurrently_ : Allows for several commands to run concurrently in the same CLI
- _Husky_ : Allows to execute specific commands that trigger on _git_ events
- _Vite_ : Alternative to _Create-React-App_, packaging less tools for a more fluid experience
- _ESLint_ : "Quality of code" tool, ensures chosen rules will be enforced
- _Prettier_ : "Quality of code" tool as well, focuses on the styleguide
- _ Airbnb Standard_ : One of the most known "standards", even though it's not officially linked to ES/JS
- _Nodemon_ : Allows to restart the server everytime a .js file is udated
