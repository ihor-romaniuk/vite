// imports
import file from './file';
console.log('Hello world from JS!', file);

// CSS Modules
import classes from './style.module.css';
console.log(classes);
document.querySelector('body').className = classes.body;

// ENV variables
console.log(import.meta.env); // {"VITE_TEST": "TEST_VALUE", "VITE_DBNAME": "TEST_DBNAME", "VITE_PASSWORD": "TEST_PASSWORD", "BASE_URL": "/", "MODE": "development", "DEV": true, "PROD": false, "SSR": false}
console.log(import.meta.env.MODE); // development
