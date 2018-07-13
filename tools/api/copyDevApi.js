let copydir = require('copy-dir');
copydir.sync('api-constant/dev', 'src/shared/api');
console.log('done copying Dev API');