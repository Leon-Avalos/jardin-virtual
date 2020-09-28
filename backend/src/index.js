import '@babel/polyfill'

import app from './app'


async function main() {
    await app.listen(app.get('port'));
    console.log('Server listening on: http://localhost:3000')
}

main();