const fs = require('fs-extra');

const sqlFolder = './src/migration/sql';
const destinationFolder = 'dist/migration/sql';
fs.copySync(sqlFolder, destinationFolder, { overwrite: true });
console.log(`Pasta "${sqlFolder}" copiada para "${destinationFolder}"`);