const Hapi = require('@hapi/hapi');

const init = async () => {

    const server = Hapi.server({
        port: 3000,
        host: 'localhost'
    });

    await server.start();
    console.log('Server running on %s', server.info.uri);

    server.route({
        method: 'GET',
        path: '/',
        handler: (request, h) => {
            console.log(request)
            // automatically sends a response header as application/json
            // as we are returning a hash
            return { message: "Hello World" };
        }
    });

    server.route({
        method: "GET",
        path: "/home",
        handler: (req, h) => {
            //sets the response redirect header with staus code 302 and redirect url as /
            return h.redirect('/')
        }
    })
};

process.on('unhandledRejection', (err) => {
    // TODO: send the error to a error logging service
    console.log(err);
    process.exit(1);
});

init();