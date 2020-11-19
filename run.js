console.log('------------------');
console.log('SUB LIB COMMANDER!');
console.log('------------------');

// console.log(process.argv);

const
    { exec, execSync } = require('child_process'),
    { resolve, join } = require('path'),
    libs = {
        ion: './ion-components',
        amp: './amplify-components',
        'ng-mat': './ng-mat-components'
    },
    [subLib, command] = process.argv[2].split('='),
    COMMAND = `cd ${libs[subLib.replace('--', '')]} && ${command}`;

console.log('subLib: ', libs[subLib.replace('--', '')]);
console.log('command: ', command);

try {
    const result = execSync(COMMAND);
    console.log('result: ', result.toString() === '' ? 'SUCCESS' : result.toString());
} catch (err) {
    console.log('ERR---------------');
    console.error(err.toString())
}

console.log('------------------');
process.exit();

