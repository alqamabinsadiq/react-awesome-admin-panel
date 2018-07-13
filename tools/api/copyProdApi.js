let copydir = require('copy-dir');
copydir.sync('api-constant/prod', 'src/shared/api');
console.log('done copying Prod API');