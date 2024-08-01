// declare environment variable
var SERVER_INIT_URL = "http://127.0.0.1:83/webservice/rest/server.php";
var SERVER_DEV_URL = "http://127.0.0.1:84/webservice/rest/server.php"; // ASSUME dev hosted on 84
var SERVER_PROD_URL = "http://www.moodle. com/webservice/rest/server.php";

// export variables so that it can be used in other JS files

export let intEnvironment = {
  SERVER_ENDPOINT: SERVER_INIT_URL,
};

// DEV URL THAT CAN BE USED INSIDE OTHER JS FILES
export let devEnvironment = {
  SERVER_ENDPOINT: SERVER_DEV_URL,
};

// Prod URL
export let prodEnvironment = {
  SERVER_ENDPOINT: SERVER_PROD_URL,
};

// Now lets declare environment types
export let int = "int";
export let dev = "dev";
export let prod = "prod";
// so we declare env.sh and env. js
// sensitive data
