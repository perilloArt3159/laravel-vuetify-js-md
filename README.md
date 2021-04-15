# Laravel + VuetifyJS MD
* Backend - Laravel 8.37.0  
→ There is no API setup, this is a clean version of Laravel.  


* Frontend - Vue + VuetifyJS  
→ Material Dashboard Theme

## Backend Setup Instructions
Make a copy of `.env` using the file `env.example` and then add your MySQL database credentials to establish a connection.

```
DB_CONNECTION=mysql
DB_HOST=<database host>
DB_PORT=<database port>
DB_DATABASE=<database name>
DB_USERNAME=<database username>
DB_PASSWORD=<database password>
```

Run the following commands:
1. `composer install`
2. `composer dump-autoload`
3. `php artisan key:generate`
4. `php artisan config:clear`
5. `php artisan migrate`
6. `php artisan serve`

## Frontend Setup Instructions 

Run the following commands:
1.  `cd vuetify`  
2.  `npm install` or `yarn`  
3.  `npm run build` or `yarn build`

**Reminder**: Always run `npm run build` or `yarn build` in `vuetify` folder everytime you make any changes in the frontend to recompile the js scripts.

## VueJS Proxy Address 
You can change the address in `./vuetify/vue.config.js`

```
const { env } = require("shelljs");

module.exports = {
  devServer: {
    // set proxy address
    proxy: 'http://127.0.0.1:8000', 
    disableHostCheck: true
  },
  // save static files in laravel public dir
  outputDir: '../public',
  // generated html files location during production
  indexPath: process.env.NODE_ENV === 'production' ? '../resources/views/index.blade.php' : 'index.html',
  // vuetify
  transpileDependencies: ['vuetify'],
}
```

