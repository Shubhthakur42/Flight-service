This is a base node js project template which anyone can use as it has been prepared, by keeping some of the most important principles and projects management recommendation . Feel free to change anything.

`src` -> Inside the src folder all the actual source code regarding the project will reside, this will not include any kind of tests.(You might want to make seperate tests folder)

Lets take a look inside the `src` folder

1. `config` -> In this folder anything and everything regarding any configurations or steups of library or module will be done. For example : setting up `dotenv` so that we can use the enviroment variable anywhere in a cleaner fashion. This is done in the `server-config.js` . One more example can be setup you logging library that can help you to prepare meaningful logs, so configuration for this library should also be done here.

2. `routes` -> In this routes folder, we register a route and the corresponsing middleware and controllers to it

3. `middlewares` ->They are just going to intercept the incoming requests where we can write our validators , authenticators etc.

4. `controllers` ->They are kind of the last middlewares as post them you call your business layer to execute the business logic.In controllers we just receive the incoming request and data then pass to the business layer once biusiness layer returns the output we structure the API response in controllers and send the output

5. `repositories` -> this folder contains all the logic using which we can interact with Database by writing queries, all the raw queries or ORM queries will go here.

6. `services` ->contains the business logic and interacts with repositores for data from the databse

7. `utils`-> contains helper methods , error classes ,etc

### Setup the project

- Download this template from github and open it in your fav text editor.

- Go inside the folder path and execute the folloeing command:
```
    npm install
```
- In the root directory create a `.env` file and add the following env variables
 ```
    PORT=<port number of your choice>
 ```
 ex:
 ```
    PORT=3000
  ```
- Inside the `src/config` folder create a file named as config.json and write the following code:
```
{
  "development": {
    "username": "root",
    "password": "mypassword",
    "database": "database_development",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
```
- If you dont want to do manually you can use following command: go inside `src` folder and execute 
```
    npx sequelize init
```
- By executing the above command you will get migrations, models, seeders insixe src and config.json inside config folder
- If you are setting up your development enviroment, then write the username of your db, password of your db, and in dialect mention whatever database you are using for ex: mysql,mariadb, etc
- If you are setting up test or production enviroment , make sure you also replace the host with the hosted db url.

- To run the server execute 
```
    npm run dev
```
