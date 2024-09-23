import Fastify from 'fastify';
import cors from  '@fastify/cors';
import dotenv from 'dotenv';
import { routes } from './routes'
dotenv.config();

const app = Fastify({ logger: true });

app.setErrorHandler((error, request, reply) => {
    reply.code(400).send({ message: error });
});

const init = async () => {
    const port  = 8080;
    app.register(cors);
    app.register(routes);

    try {
        await app.listen({ port, host: "localhost" });
        console.log(`O servidor está rodando na porta ${port}\n`);
    }
    catch(error) {
        console.log(error)
    }
};

init();