import Hapi from '@hapi/hapi';
import { Books } from './books.js';

const init = async () => {
    const server = Hapi.server({
        port: 3000,
        host: 'localhost'
    });

    const books = new Books();
    server.route({
        method: 'GET',
        path: '/',
        handler: books.index
    });

    await server.start();
    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});

init();
