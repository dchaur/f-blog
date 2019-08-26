F-Blog: Laravel + Mongodb + Vue + Vuetify
===============

A complete app based on Laravel for the backend + MongoDB & Eloquent using Vue + Vuetify for the frontend


Table of contents
-----------------
* [Installation](#installation)
* [Migrations & Seeds](#migration-seeds)
* [Testing the API](#testing-the-api)
* [Testing the Frontend](#testing-the-frontend)
* [Running the application](#running-the-application)

Installation
------------

Requirements:
- MongoDB PHP driver installed. (http://php.net/manual/en/mongodb.installation.php)
- PHP 7


Installing composer dependencies

```
composer install
```

Installing npm dependencies

```
npm install
```

Environment
```
env.example `cp .env.example .env`
```

App Key
```
php artisan key:generate 
```

**NOTE:** Bear in mind to change your mongo DB credentials


Migration-seeds
---------
Run the migrations to load all necessary tables to run the application:

```
php artisan migrate
```

And just load basic data seeding the application with
```
php artisan db:seed
```

Testing the API
---------

The application comes with the API tests covering the CRUD operations to run it execute this command

```php
./vendor/bin/phpunit  // or your local phpunit installation
```

Testing the Frontend
---------

To run the vue (frontend) tests you can use two commands:

```javascript
npm run test-vue
```

Or watching them
```javascript
npm run test-vue:live
```

Running the application
-------
To run the application in local 

```
 php artisan serve
```
And
```
 npm run watch
```
