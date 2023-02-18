# Crud-App-Laravel-Angular
Crud Application (Single Page Application ) with Laravel v8 and Angular v13

## Installation

1-Clone the repository
```
git clone https://github.com/aymensmida/Crud-App-Laravel-Angular.git
```
Backend
---------------
2- cd into Backend(Laravel) folder with this command:
```
cd Crud-App-Laravel-Angular/Backend
```

3- composer install
```
composer install
```

4-Then create a environment file using this command:
```
cp .env.example .env
```

5- generate key
```
php artisan key:generate
``` 

Then edit `.env` file with appropriate credential for your database server. Just edit these two parameter(`DB_USERNAME`, `DB_PASSWORD`).

6-Then create a database named `library` and then do a database migration using this command:
```
php artisan migrate
```
7- Run server using this command:
```
php artisan serve
```





Frontend
---------------
8- cd into Frontend(Angular) folder with this command:
```
cd Crud-App-Laravel-Angular/Frontend
```
9- install packages
```
npm install
``` 
10- Run Angular Project:
```
ng serve
```

Then go to `http://localhost:4200/` from your browser and see the app.

## Technologies Used

- PHP Laravel Framework v8
- Angular v13
- Bootstrap v4.6