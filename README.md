# TODO LIST

## Versions
### Branch
* [main](https://github.com/bobsk8/todolist) Version with passport
* [without-passport](https://github.com/bobsk8/todolist/tree/without-passport) Version without passport

## Technologies used

* AdminLTE
* Angular 14
* git
* Nodejs
* Nestjs 9
* Swagger
* Docker
* Docker-compose
* Mysql
* npm
* Bootstrap
* jquery

## System Requirements

| Technology | Site |
| ------ | ------ |
| AdminLTE.IO v3.0.x | [https://adminlte.io]
| Angular CLI v 14.x.x | [https://cli.angular.io] |
| Git | [https://git-scm.com/book/en/v2/Getting-Started-Installing-Git] |
| Nodejs v 16.x.x | [https://nodejs.org/en/download/] |
| Nestjs v 9.x.x | [https://docs.nestjs.com/] |
| Docker v 19.03.x | [https://www.docker.com/get-started] |
| Docker-compose v 1.26.x | [https://docs.docker.com/compose/install/] |
|

---

## Front folder organization

### Core
  
 * Guads: Responsible for maintaining the application's global services.
 * Interceptors: Responsible forintercepting the HTTP request. 

### Modules

Due to the use of the [Lazy Loading](https://angular.io/guide/lazy-loading-ngmodules) this application is subdivided into the following modules:

#### views
* login: user login module.
* register: user registration module.

#### views/main
* project: module containing user projects.
* project-detail: module to insert / edit user projects.

#### Componentes
* views/main/components: contains components used in the application.

---

## Back folder organization

### Client
  
 * Client: Folder containing static files from the front. 

### Modules

Following documentation guidance [Modules](https://docs.nestjs.com/modules) this application is subdivided into the following modules:

* auth: module by user authentication. The authentication use bcrypt to encrypt the user password.
* project: project module.
* task: task module.
* user: user module.

---

## Run the application

Clone the project located in the repository of [github](https://github.com/bobsk8/todolist).

```sh
$ git clone https://github.com/bobsk8/todolist
```

Enter the project folder with the command
```sh
$ cd todo-list/todo-list-front
```

Install the front dependencies with the command
```sh
$ npm i
```

Generate front build with the command
```sh
$ npm run build
```

Back to the main project folder
```sh
$ cd ..
```

Run the application
```sh
$ docker-compose up
```

Run migration inside todo-list-back folder
```sh
$ npx typeorm-ts-node-commonjs migration:run -d db_config.t
```

Open browsed on
```sh
http://localhost:3000/
```
---

## API Documentation with Swagger
???????? http://localhost:3000/api/
