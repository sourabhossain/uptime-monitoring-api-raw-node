/**
* Title: Environment
* Description: Configure the environment variables
* Author: Sourab Hossain
*/

// module scaffolding
const environment = {};

// development modes
environment.development = {
    mode: 'development',
    port: 3000,
    secretKey: 'development'
};

environment.production = {
    mode: 'production',
    port: 5000,
    secretKey: 'production',
}

// chose the environment mode by environment variables
const environmentVariable = process.env.NODE_ENV;
const chosenEnvironment = typeof (environmentVariable) === 'string'
    ? environment[environmentVariable]
    : environment.development;

module.exports = chosenEnvironment;
