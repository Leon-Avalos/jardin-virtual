import '@babel/polyfill'

import app from './app'


async function main() {
    await app.listen(3000);
    console.log('Server listening on: http://localhost:3000')
}

main();